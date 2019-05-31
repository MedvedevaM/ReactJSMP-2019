import React from 'react';

const Genre = (props) => {
  const { genres } = props;
  const formattedGenres = genres.reduce(
    (alreadyFormattedGenres, currentGenre) => `${alreadyFormattedGenres} & ${currentGenre}`,
  );
  return (
    <p>{formattedGenres}</p>
  );
};

export default Genre;
