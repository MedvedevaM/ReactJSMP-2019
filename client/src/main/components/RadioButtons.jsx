import React from 'react';

const RadioButtons = (props) => {
  const { parameters, searchBy, onClick } = props;
  const formattedInputs = parameters.map(parameter => (
    <React.Fragment key={`containerOf${parameter}SortParameter`}>
      <input
        data-parameter={parameter}
        type="radio"
        name="parameters"
        key={parameter}
        value={parameter}
        defaultChecked={searchBy === parameter}
        onClick={onClick}
      />
      <label data-parameter={parameter} className="uppercase bold" htmlFor={parameter}>{parameter}</label>
    </React.Fragment>
  ));
  return (
    [formattedInputs]
  );
};

export default RadioButtons;
