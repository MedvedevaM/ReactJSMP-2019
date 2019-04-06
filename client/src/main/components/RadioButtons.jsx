import React from 'react';

const RadioButtons = (props) => {
  const { parameters, searchBy } = props;
  const formattedInputs = parameters.map(parameter => (
    <React.Fragment key={`containerOf${parameter}SortParameter`}>
      <input
        data-parameter={parameter}
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

export default RadioButtons;
