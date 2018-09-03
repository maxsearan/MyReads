import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage";
import SearchPage from "./Components/SearchPage";
import Error404 from "./Components/Error404";


import * as BooksAPI from "./BooksAPI";

import "./App.css";

class BooksApp extends React.Component {

  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books});
    });
  }

  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.OnShelf();
    });
  };

  OnShelf() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books});
    });
  }

  render() {
    return (
      <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} moveBooks={this.moveBooks} />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchPage books={this.state.books} moveBooks={this.moveBooks} />
          )}
        />

        <Route
          path="/"
          render={() =>(
            <Error404  />
          )}
        />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;

