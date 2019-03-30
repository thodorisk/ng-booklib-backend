const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const bookRoutes = require('./api/routes/books');
const userRoutes = require('./api/routes/user');

mongoose.connect('mongodb+srv://theodor_85:' + process.env.MONGO_ATLAS_PASSWORD + '@cluster0-yqdpw.mongodb.net:/test?retryWrites=true', { useNewUrlParser: true });

// Useful middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/books', bookRoutes);
app.use('/user', userRoutes);

// // Error handling for any other routes
// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// });

module.exports = app;