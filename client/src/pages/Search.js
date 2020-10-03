import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, SearchBtn } from "../components/Form";
import { SearchResultsList, SearchResultsListItem } from "../components/SearchResults"
import SaveBtn from "../components/SaveBtn";

function Search() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  console.log(`Books List: ${books}`);
  
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // function loadBooks() {
  //   API.getBooks()
  //     .then(res => 
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleSearchBook(event) {
    event.preventDefault();
    if (formObject.title) {
      API.searchBook({
        title: formObject.title,
      })
        .then(res => {
          console.log(res.data.items);
          setBooks(res.data.items)
        }
        //searchRes = res.
        )
        .catch(err => console.log(err));
    }
  };

  function handleSaveBook(event) {
    event.preventDefault();
    console.log(event);
      // API.saveBook({
      //   title: this.title,
      //   authors: this.authors,
      //   description: this.description
      // })
      //   .then(res => console.log("Trying to save book..."))
      //   .catch(err => console.log(err));
    
  };

    return (
      <Container fluid>

            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h2>Search for and Save Books of Interest</h2>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <SearchBtn
                disabled={!(formObject.title)}
                onClick={handleSearchBook}
              >
                Search Book
              </SearchBtn>
            </form>
            <SearchResultsList>
            {books.map(book => {
            return (
              <div>
              <SearchResultsListItem
              key={book.id} 
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              link={book.volumeInfo.infoLink}
              thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                book.volumeInfo.imageLinks.thumbnail : "#"}
              />
              <SaveBtn
                disabled={!(formObject.title)}
                onClick={handleSaveBook}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                description={book.volumeInfo.description ? 
                  book.volumeInfo.description : "No Description Available"}
                >Save Book</SaveBtn>     
              </div>
            )
              })}
            </SearchResultsList>

      </Container>
    );
  }


export default Search;
