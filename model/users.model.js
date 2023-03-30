const mongoose=require("mongoose")

const usersSchema= mongoose.Schema({

    name:{type:String},
    email:{type:String,unique:true},
    mobileno:{type:Number},
    password:{type:String},
    age:{type:Number},
    city:{type:String}

},
{ versionKey: false })

const UsersModel=mongoose.model("userdata", usersSchema)
module.exports={
    UsersModel
}