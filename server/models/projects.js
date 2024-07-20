import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
},{
    timestamps: true
});

export const projects = mongoose.model('projects', projectsSchema);
