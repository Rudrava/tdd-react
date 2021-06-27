import { shallow } from "enzyme";
import React from "react";

import NewRestrauntForm from "../../src/components/NewRestrauntForm";

describe("NewRestrauntForm", () => {
  describe("Clicking and adding the new restraunt", () => {
    let saveHandler, wrapper;

    beforeEach(() => {
      saveHandler = jest.fn();

      wrapper = shallow(<NewRestrauntForm onSave={saveHandler} />);
      wrapper
        .find("[data-test='newRestrauntName']")
        .simulate("change", { target: { value: "Zaika" } });
      wrapper.find('[data-test="saveNewRestrauntButton"]').simulate("click");
    });
    it("calls the onSave handler", () => {
      expect(saveHandler).toHaveBeenCalledWith("Zaika");
    });
    it("input field is empty", () => {
      expect(
        wrapper.find("[data-test='newRestrauntName']").props().value
      ).toEqual("");
    });
  });
});
