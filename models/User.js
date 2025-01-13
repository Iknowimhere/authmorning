import {Schema,model} from 'mongoose'

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        minLength:[4,"Please enter characters above 4"]
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
})

export default model("User",userSchema);