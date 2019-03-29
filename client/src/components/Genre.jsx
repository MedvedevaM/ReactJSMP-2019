import React from 'react';

export const Genre = (props) => {
    const { genres } = props;
    const formattedGenres = genres.reduce((formattedGenres, currentGenre) => {
        return `${formattedGenres} & ${currentGenre}`;
    });
    return (
        <p>{formattedGenres}</p>
    )
};