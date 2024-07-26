// Assuming you have a MongoDB connection set up

import mongoose from "mongoose";

// Define the schema
const executiveSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    enum: ['President', 'Vice President', 'General Secretary'],
    required: true,
  },
  academicYear: {
    type: String,
    required: true,
  },
  programme:{
    type: String,
    required: true
  },
  photo:{
    type: String,
  }
});

// Create a model based on the schema
const Executive = mongoose.model('Executive', executiveSchema);
export default Executive;
