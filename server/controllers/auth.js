const { UserModel } = require("../models/user");
var jwt = require('jsonwebtoken');

const signToken = (userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET)
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

module.exports = {login}