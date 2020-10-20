// const { default: Axios } = require("axios");
const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
  // findAll: function(req, res) {
  //   console.log(req);
  //   const {query: params} = req;
  //   axios.get("https://www.googleapis.com/books/v1/volumes", {
  //     params
  //   })
  //     .then(results => console.log(results)
  //     )}}
        // results.data.items.filter(
        //   result =>
        //    result.volumeInfo.title &&
        //    result.volumeInfo.infoLink &&
        //    result.volumeInfo.authors &&
        //    result.volumeInfo.description &&
        //    result.volumeInfo.imageLinks &&
        //    result.volumeInfo.imageLinks.thumbanail 
        
        // )
        // ).then(apiBooks => 
        //   db.Google.find().then(dbBooks =>
        //     apiBooks.filter(apiBook =>
        //       dbBooks.every(dbBook => dbBook.googleId.toString() != apiBook.id)))
        // ).then(books=> res.json(books))
        //  .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
 
