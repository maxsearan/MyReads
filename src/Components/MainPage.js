import React, { Component } from "react";
import { Link } from "react-router-dom";
import Books from "./Books";
import Bookshelf from "../icons/Bookshelf.png"

class MainPage extends Component {
  render() {
    console.log(this.props.books);
    return (
      <div id="mainPage">
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>

      </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === "currentlyReading")
                    .map(book => (
                      <li key={book.id}>
                        <Books
                          book={book}
                          moveBooks={this.props.moveBooks}
                          currentShelf="currentlyReading"
                        />
                      </li>
                    ))}
                </ol>
                <img src={Bookshelf} className="book-shelf" alt="book-shelf"/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title ">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === "wantToRead")
                    .map(book => (
                      <li key={book.id}>
                        <Books
                          book={book}
                          moveBooks={this.props.moveBooks}
                          currentShelf="wantToRead"
                        />
                      </li>
                    ))}
                </ol>
                <img src={Bookshelf} className="book-shelf" alt="book-shelf"/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === "read")
                    .map(book => (
                      <li key={book.id}>
                        <Books
                          book={book}
                          moveBooks={this.props.moveBooks}
                          currentShelf="read"
                        />
                      </li>
                    ))}
                </ol>
                <img src={Bookshelf} className="book-shelf" alt="book-shelf"/>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default MainPage;
