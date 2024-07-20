import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    title: { type: String, required: true },
    article: { type: String, required: true },
    image:{type:String},
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
},{
    timestamps: true
});

export const projects = mongoose.model('projects', projectsSchema);
