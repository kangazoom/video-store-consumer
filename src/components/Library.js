import React from 'react';
import axios from 'axios';

class Library extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get('localhost:3000/movies')
      .then((response) => {
        console.log('Yay!');
        console.log(response);
      })
      .catch((error) => {
        console.log('Boo!');
        console.log(error);
      })
  }

  render() {
    return (
      <section>
        <h2>This is Library.</h2>
      </section>
    )
  }

}

export default Library;
