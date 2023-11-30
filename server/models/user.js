const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Username is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:{
            validatior:function (email){
                return String(email).toLowerCase().match(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/)
            },
            message:(props)=>'Email is invalid'
        }
    },
    phoneNo:{
        type:String,
        required:[true,"Phone number is required"]
    },
    password:{
        type:String,
        requried:[true,"Password is required"]
    },

})

userSchema.method.correctPassword = async function (
    candidatePassword,
    userPassword
){
    return await bcrypt.compare(candidatePassword,userPassword)
}

const UserModel = mongoose.model("User",userSchema)

module.exports = {UserModel}