import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { Input, SearchBtn } from "../components/Form";
import {
  SearchResultsList,
  SearchResultsListItem,
} from "../components/SearchResults";
import SaveBtn from "../components/SaveBtn";

function Search() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleSearchBook(event) {
    event.preventDefault();
    if (formObject.title) {
      API.searchBook({
        title: formObject.title,
      })
        .then((res) => {
          setBooks(res.data.items);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
      </Jumbotron>
      <form style={{ marginBottom: 100 }}>
        <Input
          onChange={handleInputChange}
          name="title"
          placeholder="Please enter a book's title"
        />
        <SearchBtn disabled={!formObject.title} onClick={handleSearchBook}>
          Search Book
        </SearchBtn>
      </form>
      <SearchResultsList>
        {books.map((book) => {
          return (
            <div>
              <SearchResultsListItem
                key={book.id}
                authors={
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors
                    : ["No Author Available"]
                }
                title={book.volumeInfo.title}
                description={
                  book.volumeInfo.description
                    ? book.volumeInfo.description
                    : "No Description Available"
                }
                link={book.volumeInfo.infoLink}
                thumbnail={
                  book.volumeInfo.imageLinks.thumbnail
                    ? book.volumeInfo.imageLinks.thumbnail
                    : "#"
                }
              />
              <SaveBtn
                disabled={!book.volumeInfo.title}
                authors={
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors
                    : ["No Author Available"]
                }
                title={book.volumeInfo.title}
                description={
                  book.volumeInfo.description
                    ? book.volumeInfo.description
                    : "No Description Available"
                }
                link={book.volumeInfo.infoLink}
                thumbnail={
                  book.volumeInfo.imageLinks.thumbnail
                    ? book.volumeInfo.imageLinks.thumbnail
                    : "#"
                }
              >
                Save Book
              </SaveBtn>
            </div>
          );
        })}
      </SearchResultsList>
    </Container>
  );
}

export default Search;
