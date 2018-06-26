import React from "react";
import  { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import GarageDetails from "../../components/garage_details";

test("should render GarageDetails correctly", () => {
  const wrapper = shallow(<GarageDetails garage={"MyGarage"}/>);
  expect(wrapper).toMatchSnapshot();
});
