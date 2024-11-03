require('dotenv').config();

const express = require('express');
const Staff = require('../../models/staff/staff')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Redis = require('ioredis');

const redis = new Redis(process.env.REDIS_URL);

const generateToken=(userId)=>{

    const accessToken=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15m"});
    const refreshToken=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"});

    return {accessToken,refreshToken};
}

const storeRefreshToken=async(userId,refreshToken)=>{
    try {

        await redis.set(`refresh_token:${userId}`, refreshToken, 'EX', 7 * 24 * 60 * 60);
        console.log('Refresh token stored successfully');
    } catch (error) {
        console.error('Error storing refresh token:', error);
    }
}

const setCookies=(res,accessToken,refreshToken)=>{
    res.cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",
        maxAge:15*60*1000,
    })

    res.cookie("refreshToken",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",
        maxAge:15*60*1000,
    })

}


const signup=async (req,res)=>{

    const {name,password,role} = req.body;

    try{    
        const staffMatch = await Staff.findOne({name})

        if(staffMatch){
            return res.status(500).json({message:"Staff Already exist"});
        }
        const response = {
                name,
                password,
                role
            }
        
        const newStaff = await Staff.create(response);
        const{accessToken,refreshToken} = generateToken(newStaff._id);
        await storeRefreshToken(newStaff._id,refreshToken);    
        
        setCookies(res,accessToken,refreshToken);

        res.status(201).json(newStaff);
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
}

const login = async (req,res)=>{

    const {name,password} = req.body;

    try {
        const staffExist = await Staff.findOne({name})
        if(!staffExist){
            return res.status(400).json({message:"Invalid staff"})
        }
        const role = staffExist.role;
        const Id = staffExist._id;
        //validate password
        const isMatch = await bcryptjs.compare(password,staffExist.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }

         // Generate access and refresh tokens
         const { accessToken, refreshToken } = generateToken(staffExist._id);

         // Store refresh token in Redis
         await storeRefreshToken(staffExist._id, refreshToken);
 
         // Set cookies with the tokens
         setCookies(res, accessToken, refreshToken);
 
         // Update staff record with the new access token
         staffExist.token = accessToken;
         await staffExist.save();
        
        // Prepare response with key details
        const response = {
            name,
            role,
            Id,
            token: accessToken,
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error)
    }
}

const logout = async (req,res)=>{
    
   try {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
        const decoded = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
        await redis.del(`refresh token :${decoded.userId}`);
    }

     res.clearCookie("accessToken");
     res.clearCookie("refreshToken");

     res.json({message:"Logged out successfully"})
} catch(error) {
    res.status(500).json({message:"Error logging out"})
   }
}

module.exports = {signup,login,logout};