import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Books from "./Books";
import Bookshelf from "../icons/Bookshelf.png"
// import escapeRegExp from 'escape-string-regexp'
class SearchPage extends Component {
  state = {
    query: "",
    searchedBook: []
  };
  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateSearchedBook(query);
  };

  updateSearchedBook = query => {
    if (query) {
      BooksAPI.search(query).then(searchedBook => {
        if (searchedBook.error) {
          this.setState({ searchedBook: [] });
        } else {
          this.setState({ searchedBook: searchedBook });
        }
      });
    } else {
      this.setState({ searchedBook: [] });
    }
  };

  render() {
    return (
      <div id="searchPage">
         <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBook.map(searchedBooks => {
              // Default shelf = none
              let BookShelf = "none";
               
              this.props.books.map(
                book =>
                  book.id === searchedBooks.id ? (BookShelf = book.shelf) : ""
              );

              return (
                <li key={searchedBooks.id}>
                  <Books
                    book={searchedBooks}
                    moveBooks={this.props.moveBooks}
                    currentShelf={BookShelf}
                  />
                </li>
              );
            })}
          </ol>
          <img src={Bookshelf} className="book-shelf" alt="book-shelf"/>
        </div>
      </div>
      </div>
    );
  }
}

export default SearchPage;
