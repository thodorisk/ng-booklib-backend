const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let book = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    subject: {
        type: String
    }
});

export default mongoose.model('Book', book);