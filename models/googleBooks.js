const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBooksSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  thumbnail: String,
  link: String
});

const Book = mongoose.model("Book", googleBooksSchema);

module.exports = Book;
