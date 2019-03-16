const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Book = require('../models/book');

// API Endpoints

//#region GET LIST OF BOOKS

router.get('/', (req, res, next) => {
    Book.find()
    .exec()
    .then(books => {
        console.log(books);
        res.status(200).json(books);
    })
    .catch(err => {
        console.log(err);
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
        .exec()
        .then(book => {
            console.log("From db", book)
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({
                    message: 'No valid entry found for the provided id'
                })
            }
        }).catch(err => {
            console.log(err);
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
        subject: req.body.subject,
        isbn: req.body.isbn
    });
    book.save().then(result => {
        console.log(result);

        res.status(201).json({
            message: 'New book entry was created',
            createdBook: book
        });
    }).catch(err => {
        console.log(err);
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
        console.log(result);
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
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
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//#endregion

module.exports = router;