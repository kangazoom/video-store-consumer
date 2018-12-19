import React from 'react';
import axios from 'axios';
import Movie from './Movie';

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

  render() {
    const searchResults = this.state.movies.map((movie, i) => {
      return <Movie key={i}
      id={movie.id}
      title={movie.title}
      releaseDate={movie.release_date}
      imageUrl={movie.image_url} />
    });
    return (
      <section>
        <h2>This is Search.</h2>
        <form onSubmit={this.onFormSubmit}>
           <input name="title" placeholder="Movie title..." type="text"
             value={this.state.title}
             onChange={this.onInputChange}
             />
           <input type="submit" value="Search" />
        </form>
        {searchResults}
      </section>
    );
  }
}

export default MovieSearchForm;
