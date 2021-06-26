import { shallow } from "enzyme";
import React from "react";

import NewRestrauntForm from "../../src/components/NewRestrauntForm";

describe("NewRestrauntForm", () => {
  describe("Clicking and adding the new restraunt", () => {
    it("calls the onSave handler", () => {
      const saveHandler = jest.fn();

      const wrapper = shallow(<NewRestrauntForm onSave={saveHandler} />);
      wrapper
        .find("[data-test='newRestrauntName']")
        .simulate("change", { target: { value: "Zaika" } });
      wrapper.find('[data-test="saveNewRestrauntButton"]').simulate("click");
      expect(saveHandler).toHaveBeenCalledWith("Zaika");
    });
  });
});
