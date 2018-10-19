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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books: books } )
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState( { books: books } )
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route 
            path='/'
            exact
            render={(props) => <Home {...props} books={this.state.books} changeShelf={this.changeShelf}/>}
          />
          <Route path='/search' component={Search} exact/>
        </div>
      </BrowserRouter>
      /*<div className="app">
        <Home 
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      </div>*/
    )
  }
}

export default BooksApp
