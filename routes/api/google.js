const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll);
  // .post(booksController.create);

// Matches with "/api/books/:id"
 router
   .route("/:id")
   .get(googleController.findAll)
  //  .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
