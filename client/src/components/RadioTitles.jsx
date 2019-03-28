import React from "react";

export const RadioTitles = props => {
    const { parameters, sortBy } = props;
    const formattedInputs = parameters.map(parameter => (
        <>
            <input
                className="sort-parameters"
                type="radio"
                name="parameters"
                key={parameter}
                id={parameter}
                value={parameter}
                defaultChecked={sortBy === parameter}
            />
            <label className="sort-parameters uppercase bold" htmlFor={parameter}>{parameter}</label>
        </>
    ));
    return (
        [formattedInputs]
    );
};