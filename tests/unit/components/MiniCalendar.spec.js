import React from "react";
import { mount } from "../Enzyme";
import MiniCalendar from "../../../src/components/calendar/MiniCalendar";

const testProps = {
  selectedDate: new Date(2019, 3, 28),
  selectedFilter: 0,
  updateSelectedDate: () => {},
};

describe("<MiniCalendar />", () => {
  it("should render a MiniCalendar", () => {
    const componentsWrapper = mount(<MiniCalendar {...testProps} />);
    expect(componentsWrapper.find(".vensa-theme-minicalendar-container").exists()).toEqual(true);
    expect(componentsWrapper.find(".vensa-theme-slot-filter__item-selected").exists()).toEqual(true);
  });

  it("should call updateSelectedDate when click a date", () => {
    spyOn(testProps, "updateSelectedDate");
    const componentsWrapper = mount(<MiniCalendar {...testProps} />);
    componentsWrapper.find(".vensa-theme-minicalendar-day-inner-div").at(0).simulate("click");
    expect(testProps.updateSelectedDate).toHaveBeenCalled();
  });
});
