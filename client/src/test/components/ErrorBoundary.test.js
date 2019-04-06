import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import { ErrorBoundary } from "../../main/components/ErrorBoundary.jsx";

it("renders correctly", () => {
    const error = shallow(<ErrorBoundary />);
    expect(toJson(error)).toMatchSnapshot();
});