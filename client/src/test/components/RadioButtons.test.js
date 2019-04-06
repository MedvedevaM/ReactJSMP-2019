import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import RadioButtons from "../../main/components/RadioButtons.jsx";

const parameters = ["first_parameter", "second_parameter", "third_parameter"];

it("check radio buttons rendering", () => {
    const radioButtons = shallow( <RadioButtons parameters={parameters} searchBy="second_parameter" /> );
    expect(toJson(radioButtons)).toMatchSnapshot();
    expect(radioButtons.find('input').length).toBe(3);
});

