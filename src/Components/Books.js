import React, { Component } from "react";

class Books extends Component {

  render() {
    
    const imageBookDisplay = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : 'http://via.placeholder.com/128x193?text=No%20Cover';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageBookDisplay}")`
            }}
          />
          <div className="book-shelf-changer">
            {/* Shelf is e.target.value */}
            <select
              value={this.props.currentShelf}
              onChange={event =>
                this.props.moveBooks(this.props.book, event.target.value)
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(', ') : ''}</div>
      </div>
    );
  }
}

export default Books;
