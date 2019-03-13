import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Book from './models/book';

const mongoose = require('mongoose');
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// Connect to database...

// API

// GET BOOKS

router.route('/books').get((req, res) => {
    Book.find((err, books) => {
        if (err)
            console.log(err);
        else
            res.json(books);
    });
});

// GET BOOK BY ID

router.route('/books/:id').get((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err)
            console.log(err);
        else
            res.json(book);
    });
});

// CREATE A BOOK

router.route('/books/add').post((req, res) => {
    let book = new Book(req.body);
    book.save().then(book => {
        res.status(200).json({'book': 'Added successfully'}).catch(err => {
            res.status(400).send('Failed to create new record');
        });
    });
});

// UPDATE A BOOK

router.route('/books/update/:id').post((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (!book)
            return next(new Error('Could not load document'));
        else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.subject = req.body.subject;

            book.save().then(book => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// DELETE A BOOK

router.route('/issues/delete/:id').get((req, res) => {
    Book.findByIdAndRemove({_id: req.params.id}, (err, book) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));