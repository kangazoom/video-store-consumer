import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './MovieSearchForm.css';

class MovieSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      movies: [],
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
 }

  onFormSubmit = (event) => {
    event.preventDefault();

    const searchQuery = {
      title: this.state.title,
    };

    this.setState({
      title: '',
    });

    const url = `http://localhost:3000/movies?query=${searchQuery.title}`
    axios.get(url)
      .then((response) => {
        console.log(searchQuery);
        console.log(url);
        console.log(response.data);
        this.setState({movies: response.data})
      })
      .catch((error) => {
        console.log(error);
        this.setState({error: error.message})
      });
   }

   addMovieToLibrary = (movieId) => {
     const clickedMovie = this.state.movies.find( movie => movie.external_id === movieId)

     const movieData = {
       title: clickedMovie.title,
       overview: clickedMovie.overview,
       release_date: clickedMovie.release_date,
       inventory: 10,
       image_url: clickedMovie.image_url.slice(31),
       external_id: clickedMovie.external_id
     }

     axios.post('http://localhost:3000/movies/', movieData)
      .then((response) => {
        alert(`Sucessfully added ${movieData.title} to rental library with id ${response.data.id}`);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      })
   }

  render() {
    const searchResults = this.state.movies.map((movie, i) => {
      return <Movie key={i}
      id={movie.external_id}
      title={movie.title}
      releaseDate={movie.release_date}
      imageUrl={movie.image_url}
      callback={this.addMovieToLibrary}
      buttonText='Add to Library' />
    });
    return (
      <section>
        <form onSubmit={this.onFormSubmit}>
           <input name="title" placeholder="Movie title..." type="text"
             value={this.state.title}
             onChange={this.onInputChange}
             />
           <input type="submit" value="Search" />
        </form>
        <div className="search-results-container">
          {searchResults}
        </div>
      </section>
    );
  }
}

export default MovieSearchForm;
