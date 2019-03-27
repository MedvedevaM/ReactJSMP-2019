import React from 'react';

export const Genre = (props) => {
    const { genres } = props;
    const formattedGenres = genres.reduce((formattedGenres, currentGenre, index, genres) => {
        if (index === genres.length - 1) {
            return `${formattedGenres}`;
        }
        return `${formattedGenres} & ${currentGenre}`;
    });
    return (
        <p>{formattedGenres}</p>
    )
};