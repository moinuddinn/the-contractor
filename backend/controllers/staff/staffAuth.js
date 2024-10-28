const express = require('express');
const Staff = require('../../models/staff/staff')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup=async (req,res)=>{

    const {name,password,role} = req.body;

    try{    
        const staffMatch = await Staff.findOne({name})

        if(staffMatch){
            return res.status(500).json({message:"Staff Already exist"});
        }
        const hashedpassword = await bcryptjs.hash(password,10);
        const response = {
                name,
                password:hashedpassword,
                role
            }
        

        const newStaff = new Staff(response)
        await newStaff.save();
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
            return res.status(400).json({message:"Invalid username or password"})
        }
        const role = staffExist.role;
        const Id = staffExist._id;
        //validate password
        const isMatch = await bcryptjs.compare(password,staffExist.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }

        //Generate jwt
        const token = await jwt.sign({staffId:staffExist._id,role:staffExist.role},process.env.JWT_SECRET,{expiresIn:"24h"})
        staffExist.token = token;
        await staffExist.save();

        const response = {
            name,password,token,role,Id
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error)
    }
}

const logout = async (req,res)=>{

   const {staffId} = req.body; 

   try {
    console.log(staffId)
    const staffExist = await Staff.findById(staffId);
    if(!staffExist){
        return res.status(400).json({message:"Logout failed"})
    }
    staffExist.token=null;
    await staffExist.save();

    res.send("Logged out successfully")
} catch(error) {
    res.status(500).json({message:"Error logging out"})
   }
}

module.exports = {signup,login,logout};