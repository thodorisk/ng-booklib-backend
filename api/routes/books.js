const express = require('express');
const router = express.Router();
const authChecker = require('../middleware/authChecker');
const BooksController = require('../controllers/books');

// API Endpoints

router.get('/', authChecker, BooksController.books_get_all);

router.get('/:id', authChecker, BooksController.books_get_book);

router.post('/', authChecker, BooksController.books_create_book);

router.patch('/:id', authChecker, BooksController.books_update_book);

router.delete('/:id', authChecker, BooksController.books_delete_book);

module.exports = router;