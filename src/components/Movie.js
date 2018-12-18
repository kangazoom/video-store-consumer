import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

  const onMovieClick = () => {
    props.selectMovieCallback(props.id);
  }

  return (
    <div>
      <img src={props.imageUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.releaseDate}</h4>
      <button
        onClick={onMovieClick}>
        Select for Rental
      </button>
    </div>
  )
}

Movie.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  selectMovieCallback: PropTypes.func,
  id: PropTypes.number,
};

export default Movie;
