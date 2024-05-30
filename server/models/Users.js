const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema(
    {
        fullName: String,
        email: String,
        phone: String

    }
)

const UserModel=mongoose.model("user",UserSchema)
module.exports=UserModel