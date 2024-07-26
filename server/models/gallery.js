import mongoose from "mongoose";
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    caption: { type: String, required: true },
    link: { type: String, required: true },
    cover:{ type: String, }
},
{
    timestamps: true

});

const gallery = mongoose.model('gallery', gallerySchema);
export default gallery;
