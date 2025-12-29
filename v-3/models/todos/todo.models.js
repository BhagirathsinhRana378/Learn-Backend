import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default:false
    },
    createdBy:{
        // this should be related or relation with the user
        type: mongoose.Schema.Types.ObjectId,
        // here we took type its a special type
        ref: "User"
        // after defing the type its compulsory to write this line ref--> reference to user
        // here we gave the name or reference of User form the user.models.js where we exported the users 
        // here we have to always give the text/string/word the name which we gaved in the model in the export
        //export const User = mongoose.model("User", userSchema);---> User
        // this is a special type where we give refrence of user
    },
    subTodos:[
        // here we wanted the sub-todos in array format and in array we have specific obj
        {
            //for this first we are giving the refernace of another modle
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo" //gived referance of sub-todo.models.js
        }
    ]

}, {timestamps: true});