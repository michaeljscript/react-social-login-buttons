import Adapter from "enzyme-adapter-react-16";
import React from "react";
import SocialLoginButton from "../SocialLoginButton";
import Enzyme, { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

const render = props => shallow(<SocialLoginButton {...props} />);

describe("SocialLoginButton", () => {
  it("Should render without crash", () => {
    render({});
  });
});
