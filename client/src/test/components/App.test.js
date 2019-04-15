import React from "react";
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import App from "../../main/components/App.jsx";

describe("test app", () => {
    it("renders correctly", () => {
        const app = shallow(<App />);
        expect(toJson(app)).toMatchSnapshot();
    });
});
