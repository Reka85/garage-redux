import React from "react";
import  { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Car from "../../components/car";

test("should render Car correctly", () => {
  const wrapper = shallow(<Car brand={"Ford"} model={"456"} owner={"Joe"} plate={"ABC123"}/>);
  expect(wrapper).toMatchSnapshot();
});
