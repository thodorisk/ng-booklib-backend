const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, require: true },
    author: { type: String, require: true },
    category: { type: String, require: true },
    isbn: { type: String },
    year: { type: Number, require: true },
});

module.exports = mongoose.model('Book', bookSchema);