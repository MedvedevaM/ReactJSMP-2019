import React from "react";
import { shallow, configure } from "enzyme";
import { RadioButtons } from "../../main/components/RadioButtons.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const parameters = ["first_parameter", "second_parameter", "third_parameter"];

it("check radio buttons rendering", () => {
    const radioButtons = shallow( <RadioButtons parameters={parameters} searchBy="second_parameter" /> );
    expect(radioButtons).toMatchSnapshot();
    expect(radioButtons.find('input').length).toBe(3);
});

