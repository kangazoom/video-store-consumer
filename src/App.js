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
    console.log(this.state.selectedMovie);
    console.log(`In App: ${movieTitle}`);
    this.setState({
      selectedMovie: movieTitle
    })
    console.log(this.state.selectedMovie);
  }

  selectCustomerForRental = (customerObject) => {
    console.log(`In App: ${customerObject.id} with ${customerObject.name}`);
    this.setState({
      selectedCustomer: customerObject
    })
  }

  render() {
    return (
      <div>
        <NavMenu selectedMovie={this.state.selectedMovie} selectedCustomer={this.state.selectedCustomer}/>
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
