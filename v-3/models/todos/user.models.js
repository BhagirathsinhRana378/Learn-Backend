// models/todos/sub_todo.models.js
// data modling for User entity

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // Define user fields here
        // This is a placeholder schema. Actual fields should be defined as per requirements.

        username: { type: String, required: true, unique: true },

        // here we gave all things like type , required and unique in one line
        // here we directly defined an object with key value pairs not the string
  
        dob: { type: Date, required: true },

        isActive: { type: [Boolean, "the IsActive data field should be true or false"], default: true },

        // we can also give our custom messages like the above while defining fields
        
        email: { type: String, required: true, unique: true },
        
        password: { type: String, required: true },
    }, 
    { timestamps: true }
    // its added after the main object of schema
    // this will automatically add createdAt and updatedAt fields to the schema
);

export const User = mongoose.model("User", userSchema);
    
// User for  exporting the User model for use in other parts of the application
//mongoose.modle is a method that creates a model based on the schema provided.
// which modle to make and what based on what schema.
//so make User model based on userSchema in the line no 3
// Note: This is a placeholder model. The actual User model should be defined in its own file with appropriate fields.
