import mongoose from "mongoose";
const Schema = mongoose.Schema;

const executiveSchema = new Schema({
    name: {
        type: String,
        required: true
     },
    position: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    contant: {
        type: String
    }
});

const Executive = mongoose.model('Executive', executiveSchema);
module.exports = Executive;
