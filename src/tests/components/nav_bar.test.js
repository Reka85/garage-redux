import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import NavBar from "../../components/nav_bar";

test("should render NavBar correctly", () => {
  const wrapper = shallow(<NavBar garage={'MyGarage'}/>);
  expect(wrapper).toMatchSnapshot();
});
