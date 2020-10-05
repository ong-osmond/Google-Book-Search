import axios from "axios";

export default {
  searchBook: function(bookData) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${bookData.title}`;
    return axios.get(url);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
