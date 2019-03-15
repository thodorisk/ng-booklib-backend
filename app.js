const express = require('express');
const app = express();
const morgan = require('morgan');

const bookRoutes = require('./api/routes/books');

app.use(morgan('dev'));

// Routes related to /books that will handle requests
app.use('/books', bookRoutes);

// Error handling for any other routes
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

module.exports = app;