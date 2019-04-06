import React from "react";
import { shallow, mount } from "enzyme";
import toJson from 'enzyme-to-json';
import App from "../../main/components/App.jsx";
import SearchPage from "../../main/components/SearchPage.jsx";

describe("test app", () => {
    it("renders correctly", () => {
        const app = shallow(<App />);
        expect(toJson(app)).toMatchSnapshot();
    });
    it("test an error", () => {
        const app = mount(<App />);
        app.find(SearchPage).simulateError(new Error("hi!"));
    });
});
