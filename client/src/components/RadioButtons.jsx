import React from "react";

export const RadioButtons = props => {
    const { parameters, searchBy } = props;
    const formattedInputs = parameters.map(parameter => (
      <>
        <input
            type="radio"
            name="parameters"
            key={parameter}
            id={parameter}
            value={parameter}
            defaultChecked={searchBy === parameter}
        />
        <label className="search-parameters uppercase bold" htmlFor={parameter}>{parameter}</label>
      </>
    ));
    return (
      [formattedInputs]
    );
};
