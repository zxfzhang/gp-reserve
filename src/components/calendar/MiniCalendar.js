import React, { Component } from "react";
import PropTypes from "prop-types";
import MiniCalendarHead from "./MiniCalendarHead";
import MiniCalendarBody from "./MiniCalendarBody";
import TimeSlotFilter from "./TimeSlotFilter";

export default class MiniCalendar extends Component {
  render() {
    const {
      selectedDate,
      selectedFilter,
      updateSlotFilter,
      toggleFullCalendar,
      updateSelectedDate,
    } = this.props;

    return (
      <div>
        <MiniCalendarHead
          selectedDate={selectedDate}
          toggleFullCalendar={toggleFullCalendar}
        />
        <MiniCalendarBody
          selectedDate={selectedDate}
          updateSelectedDate={updateSelectedDate}
        />
        <TimeSlotFilter
          selectedFilter = {selectedFilter}
          updateSlotFilter = {updateSlotFilter}
        />
      </div>
    );
  }
}

MiniCalendar.propTypes = {
  selectedDate: PropTypes.object,
  selectedFilter: PropTypes.number,
  toggleFullCalendar: PropTypes.func,
  updateSlotFilter: PropTypes.func,
  updateSelectedDate: PropTypes.func,
};
