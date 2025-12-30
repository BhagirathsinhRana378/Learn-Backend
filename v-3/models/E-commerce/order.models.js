import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    prductId:{
        type: mongoose.Schema.type.ObjectId,
        ref:"Product"
    
    },
    quantity:{
        type:Number,
        require:true
    }
})

const orderSchema = new mongoose.Schema({
    orderprice:{
        type:Number,
        require:true,
        default:0
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    orderItems:{
        type: [orderItemsSchema]
    },
    address:{
        type: String,
        require:true        
    },
    status:{
        type: String,
        enum: ["pending","cancelled","delivered"],
        // enum used for giving the choices
        default: "pending"
    }
}, {timestamps:true});

export const Order = mongoose.model("Order", orderSchema);