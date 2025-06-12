const User=require("../model/UserModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

exports.signup=async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        const existingUser=await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"Email already exists"});
     
    const hash=await bcrypt.hash(password,10);
    const user=await User.create({username,email,password})
    res.status(201).json({message: "signup successful"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
exports.login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"});
    
        const valid=await bcrypt.compare(password,user.password);
        if(!valid) return res.status(401).json({message:"Invalid credentials"});

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"2h"});
    res.json({token,user:{username:user.username,email:user.email}});

    
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};