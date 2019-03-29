import React from "react";

export const RadioTitles = props => {
    const { parameters, sortBy } = props;
    const formattedInputs = parameters.map(parameter => (
        <>
            <input
                type="radio"
                name="parameters"
                key={parameter}
                value={parameter}
                defaultChecked={sortBy === parameter}
            />
            <label id={parameter} className="uppercase bold" htmlFor={parameter}>{parameter}</label>
        </>
    ));
    return (
        [formattedInputs]
    );
};