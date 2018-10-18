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
      this.setState( {books: books} )
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route 
            path='/'
            exact
            render={(props) => <Home {...props} books={this.state.books}/>}
          />
          <Route path='/search' component={Search} exact/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
