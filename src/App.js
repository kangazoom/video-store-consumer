import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import { Route } from 'react-router-dom';
import MovieSearchForm from './components/MovieSearchForm';
import Library from './components/Library';
import Customers from './components/Customers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <Route path="/search" component={MovieSearchForm} />
        <Route path="/library" component={Library} />
        <Route path="/customers" component={Customers} />
      </div>
    );
  }
}

export default App;
