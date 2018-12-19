import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import { Route } from 'react-router-dom';
import MovieSearchForm from './components/MovieSearchForm';
import Library from './components/Library';
import Customers from './components/Customers';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: 'None',
      selectedCustomer: 'None'
    };
  }

  selectMovieForRental = (movieTitle) => {
    console.log(`In App: ${movieTitle}`);
    const clickedMovie =
    this.setState = ({
      selectedMovie: movieTitle
    })
  }

  selectCustomerForRental = (customerID) => {
    console.log(`In App: ${customerID}`);
    const clickedCustomer =
    this.setState = ({
      selectedCustomer: customerID
    })
  }

  render() {
    return (
      <div>
        <NavMenu />
        <Route path="/search" component={MovieSearchForm} />
        <Route exact path="/library" render={(props) => (
          <Library selectedMovieCB={this.selectMovieForRental} />
        )}/>
      <Route exact path="/customers" render={(props) => (
        <Customers selectedCustomerCB={this.selectCustomerForRental} />
      )}/>
      </div>
    );
  }
}

export default App;
