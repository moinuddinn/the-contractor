const jwt = require('jsonwebtoken');
const Staff = require('../models/staff/staff');
const protectedMiddlware = async (req, res, next) => {

    try {
        
        const accessToken = req.cookies.accessToken;
        if(!accessToken){
                 return res.status(401).json({message:"Unauthorized-No access token provided"})
        }

        try {
                const decoded = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
                const staff = await Staff.findById(decoded.userId).select("-password");

                if(!staff){
                    return res.status(401).json({message:"User not found"});
                }

                req.staff = staff;

                console.log(`Staff retrived: ${staff}`);
                
                 // Pass control to the next middleware or route handler
        } catch (error) {
            if(error.name==="TokenExpiredError"){
                return res.status(401).json({message:"Provided token expired"})
            }
            throw error;
        }
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
};

module.exports = { protectedMiddlware };
