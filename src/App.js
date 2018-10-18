import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/' component={Home} exact/>
          <Route path='/search' component={Search} exact/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
