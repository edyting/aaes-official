import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
         type: String,
          required: true
         },
    description: {
         type: String,
          required: true
         },
    date: {
        type: Date,
        required: true
    },
    location:{
        type: String,
        required: true

    }
},{
    timestamps:true

});

export const Event = mongoose.model('Event', eventSchema);

