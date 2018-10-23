import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  fillBooksState() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books: books } )
    })
  }

  componentDidMount() {
    this.fillBooksState()
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fillBooksState();
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route 
            path='/'
            exact
            render={(props) => (
              <Home {...props} books={this.state.books} changeShelf={this.changeShelf}/>)}
          />
          <Route 
            path='/search' 
            exact
            render={() => (
              <Search changeShelf={this.changeShelf} books={this.state.books}/>
            )}
            />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
