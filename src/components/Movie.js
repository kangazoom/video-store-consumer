import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

  const onMovieClick = () => {
    props.callback(props.id)
  }


  return (


    <div>
      <img src={props.imageUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.releaseDate}</h4>
      <button
        onClick={onMovieClick}>
        {props.buttonText}
      </button>
    </div>
  )
}

Movie.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  id: PropTypes.number,
  callback: PropTypes.func,
  buttonText: PropTypes.string,
};

export default Movie;
