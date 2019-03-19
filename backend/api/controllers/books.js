const Book = require("../models/book");

exports.books_get_all = (req, res, next) => {
  Book.find()
    .select("_id title author category year isbn")
    .exec()
    .then(books => {
      const response = {
        count: books.length,
        books: books
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.books_get_book = (req, res, next) => {
  const id = req.params.id;
  Book.findById(id)
    .select("_id title author category isbn year")
    .exec()
    .then(book => {
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({
          message: "No valid entry found for the provided id"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.books_create_book = (req, res, next) => {
  const id = req.params.id;
  Book.findById(id)
    .select("_id title author category isbn year")
    .exec()
    .then(book => {
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({
          message: "No valid entry found for the provided id"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.books_update_book = (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Book.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Book Updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.books_delete_book = (req, res, next) => {
  const id = req.params.id;
  Book.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Book deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
