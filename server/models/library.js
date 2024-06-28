const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarySchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    cover:{ type: String, },
    file: {type: String}
},
{
    timestamps: true

});

const Library = mongoose.model('Library', librarySchema);
module.exports = Library;
