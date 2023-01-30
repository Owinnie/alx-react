import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe('Test <Login /> Component', () => {
    let login;

    beforeEach(() => {
        login = shallow(<Login />);
    });

    it("Renders without crashing", () => {
        expect(login).toBeDefined();
    });

    it("Renders 2 input tags", () => {
        expect(login.find('input')).toHaveLength(2);
    });

    it("Renders 2 label tags", () => {
        expect(login.find('label')).toHaveLength(2);
    });
});
