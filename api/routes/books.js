const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Book = require('../models/book');

// API Endpoints

//#region GET LIST OF BOOKS

router.get('/', (req, res, next) => {
    Book.find()
    .select('_id title author category year isbn')
    .exec()
    .then(books => {
        const response = {
            count: books.length,
            books: books
        }
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//#endregion

//#region GET A BOOK BY ID

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Book.findById(id)
        .select('_id title author category isbn year')
        .exec()
        .then(book => {

            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({
                    message: 'No valid entry found for the provided id'
                })
            }
        }).catch(err => {
            res.status(500).json({error: err});
        });
});

//#endregion

//#region CREATE A BOOK

router.post('/', (req, res, next) => {
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        isbn: req.body.isbn,
        year: req.body.year
    });
    book.save().then(result => {
        res.status(201).json({
            message: 'New book was created',
            createdBook: {
                title: result.title,
                author: result.author,
                category: result.category,
                isbn: result.isbn,
                year: result.year
            }
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//#endregion

//#region UPDATE A BOOK

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Book.update({_id: id}, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Book Updated'
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//#endregion

//#region DELETE A BOOK

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Book.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Book deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//#endregion

module.exports = router;