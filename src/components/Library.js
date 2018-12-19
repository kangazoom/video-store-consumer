import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class Library extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        this.setState({movies: response.data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  render() {
    const movieCollection = this.state.movies.map((movie) => {
      return <Movie key={movie.id}
      id={movie.id}
      title={movie.title}
      releaseDate={movie.release_date}
      imageUrl={movie.image_url}
      buttonText='Select for Rental' />
    });
    return (
      <section>
        <h2>This is Library.</h2>
        {movieCollection}
      </section>
    )
  }

}

export default Library;
