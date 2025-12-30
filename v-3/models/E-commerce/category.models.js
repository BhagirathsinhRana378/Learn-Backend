import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },

    createdbyuser:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"User"
    }
},
{timestamps:true});

export const Category = mongoose.model("Category", categorySchema)