import React from 'react';

const Genre = (props) => {
  const { genres } = props;
  const formattedGenres = genres.reduce((formattedGenres, currentGenre) => `${formattedGenres} & ${currentGenre}`);
  return (
    <p>{formattedGenres}</p>
  );
};

export default Genre;
