import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { Input, SearchBtn } from "../components/SearchForm";
import {
  SearchResultsList,
  SearchResultsListItem,
} from "../components/SearchResults";

function Search() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setsearchTerm] = useState({});

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setsearchTerm({ ...searchTerm, [name]: value });
  }

  function handleSearchBook(event) {
    event.preventDefault();
    if (searchTerm.title) {
      API.searchBook({
        title: searchTerm.title,
      })
        .then((res) => {
          setBooks(res.data.items);
        })
        .catch((err) => {
          searchTerm.title = "";
          console.log(err);
        });
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
        <SearchBtn disabled={!searchTerm.title} onClick={handleSearchBook}>
          Search Book
        </SearchBtn>
      </form>
      {books && books.length > 0 ? (
        <SearchResultsList>
          {books.map((book) => {
            return (
              <row>
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
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "#"
                  }
                />
              </row>
            );
          })}
        </SearchResultsList>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </Container>
  );
}

export default Search;
