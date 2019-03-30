import React from "react";

export const RadioButtons = props => {
    const { parameters, searchBy } = props;
    const formattedInputs = parameters.map(parameter => (
      <React.Fragment key={`containerOf${parameter}SortParameter`}>
        <input
            id={parameter}
            type="radio"
            name="parameters"
            key={parameter}
            value={parameter}
            defaultChecked={searchBy === parameter}
        />
        <label className="uppercase bold" htmlFor={parameter}>{parameter}</label>
      </React.Fragment>
    ));
    return (
      [formattedInputs]
    );
};
