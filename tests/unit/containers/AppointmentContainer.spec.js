import React from "react";
import { mount } from "../Enzyme";
import { AppointmentContainerComp } from "../../../src/containers/AppointmentContainer";

const testProps = {
  fetchStatus: "",
  error: "",
  list: [],
  fetchSchedules: () => [],
  fullCalendarOpen: false,
  selectedDate: new Date(),
  startDate: new Date,
  displayMonth: new Date(),
  selectedFilter: 0,
};

describe("<AppointmentContainerComp />", () => {
  it("should load schedule list", () => {
    spyOn(testProps, "fetchSchedules");
    const componentsWrapper = mount(<AppointmentContainerComp {...testProps} />);
    expect(componentsWrapper.find(".vensa-theme-doctor-list").exists()).toEqual(true);
    expect(testProps.fetchSchedules).toHaveBeenCalled();
  });
});
