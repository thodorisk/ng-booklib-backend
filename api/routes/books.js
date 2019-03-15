const express = require('express');
const router = express.Router();

// API Endpoints

//#region GET LIST OF BOOKS

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /books'
    });
});

//#endregion

//#region GET A BOOK BY ISBN

router.get('/:isbn', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to a specific book'
    });
});

//#endregion

//#region CREATE A BOOK

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request to create a book'
    });
});

//#endregion

//#region UPDATE A BOOK

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PATCH request to update details of a specific book'
    });
});

//#endregion

//#region DELETE A BOOK

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Handling DELETE request to delete a specific book'
    });
});

//#endregion

module.exports = router;