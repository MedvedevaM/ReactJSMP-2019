import React from "react";

const Genre = (props) => {
  const { genres } = props;
  const formattedGenres = genres.reduce((formattedGenres, currentGenre) => {
    return `${formattedGenres} & ${currentGenre}`;
  });
  return (
    <p>{formattedGenres}</p>
  );
};

export default Genre;
