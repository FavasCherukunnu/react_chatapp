const { UserModel } = require("../models/user");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const crytpo = require('crypto');
const { promisify } = require("util");

const signToken = (userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET)
}


async function register(req,res,next){

    const {userName,email,phoneNo,password} = req.body;

    const existing_user = await UserModel.findOne({
        email:email
    });

    if(existing_user){
        return res.status(400).json({
            status:'error',
            message:'Email is already in use, Please login.'
        })
    }

    const hashed_password = bcrypt.hash(
        password,
        12
    )

    const new_user = await UserModel.create(
        {
            userName,
            email,
            phoneNo,
            hashed_password
        }
    )

    req.userId = new_user._id;
    const token = signToken(new_user._id);

    res.status(200).json({
        status:'success',
        message:'registered successfully',
        token
    })
    next();  

}

async function login(req,res,next){

    const {email,password} = req.body;

    if(!email || password) {
        res.status(400).json({
            status:'error',
            message:'Both email and password are required'
        })
    }

    const user = await UserModel.findOne(
        {
            email:email
        }
    ).select({
        password:true
    });  //return only password field


    if(!user || await user.correctPassword(password,user.password)){
        return res.status(400).json({
            status:'error',
            message:'Email or password is incorrect'
        })
    }

    const token = signToken(user._id);


    return res.status(200).json({
        status:'success',
        message:'logged in successfully',
        token
    })



}

async function protect(req,res,next){
    let token;

    if(req.headers.authorization && req.headers.authorization.startWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }else if(req.cookies.jwt){
        token = req.cookies.jwt
    }else{
        res.status(400).json({
            status:'error',
            message:'Not logged in'
        })
    }

    const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET,);
    const user = await UserModel.findById(decoded.userId);

    if(!user){
        return res.status(400).json({
            status:'error',
            message:'User does not exist'
        })
    }

    req.userId = user._id;
    next()

}



module.exports = {login,register}