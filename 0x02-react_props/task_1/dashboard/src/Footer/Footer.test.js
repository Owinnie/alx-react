import React from "react";
import Footer from './Footer';
import { shallow } from "enzyme";

describe('Test <Footer /> Component', () => {
    let footer;

    beforeEach(() => {
        footer = shallow(<Footer />);
    });

    it("Renders without crashing", () => {
        expect(footer.exists());
    });

    it("Renders Copyright text", () => {
        expect(footer.find("Copyright").at(0)).toBeDefined();
    });
});
