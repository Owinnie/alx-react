import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe('Test <Header /> Component', () => {
    let header;

    beforeEach(() => {
        header = shallow(<Header />);
    });

    it("Renders without crashing", () => {
        expect(header).toBeDefined();
    });

    it("Renders h1", () => {
        expect(header.find('h1')).toBeDefined();
    });

    it("Renders img", () => {
        expect(header.find('img')).toBeDefined();
    });
});
