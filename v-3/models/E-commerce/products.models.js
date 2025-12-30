import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      require: true,
    },
    productid: {
      type: Number,
      require: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
    },
    productimg:{
        type:String
    },// here we dont store images and other buffer items(video,pdfs etc) in database
    // for that we have to store the things in our own server
    // cloudnery is a website where we store our video and images and it gives us the url of the stored images and videos
    // so we store url in string format in the database
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    }

  },
  { timestamps: true }
);
// you always forgot the time stamps

export const Product = mongoose.model("Product", productSchema);
