import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';
import { RadioButtons } from "../../main/components/RadioButtons.jsx";

configure({ adapter: new Adapter() });

const parameters = ["first_parameter", "second_parameter", "third_parameter"];

it("check radio buttons rendering", () => {
    const radioButtons = shallow( <RadioButtons parameters={parameters} searchBy="second_parameter" /> );
    expect(toJson(radioButtons)).toMatchSnapshot();
    expect(radioButtons.find('input').length).toBe(3);
});

