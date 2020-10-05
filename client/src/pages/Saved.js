import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import {
  SavedBooksList,
  SavedBooksListItem,
} from "../components/SavedBooks";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <h2>Saved Books</h2>
      </Jumbotron>
      {books.length ? (
        <SavedBooksList>
        {books.map((book) => {
          return (
            <div>
              <SavedBooksListItem
                id={book._id}
                authors={
                  book.authors
                    ? book.authors
                    : ["No Author Available"]
                }
                title={book.title}
                description={
                  book.description
                    ? book.description
                    : "No Description Available"
                }
                link={book.link}
                thumbnail={
                  book.thumbnail
                    ? book.thumbnail
                    : "#"
                }
              />       
            </div>
          );
        })}
      </SavedBooksList>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </Container>
  );
}

export default Saved;
