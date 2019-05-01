import React, { Component } from "react";
import PropTypes from "prop-types";
import FullCalendarBody from "./FullCalendarBody";
import FullCalendarHead from "./FullCalendarHead";
import { getFutureMonthList } from "../../utils";

export default class FullCalendar extends Component {
  render() {
    const {
      toggleFullCalendar, updateSelectedDate, selectedDate,
      startDate, updateDisplayMonth, displayMonth,
    } = this.props;
    const availableMonth = getFutureMonthList(startDate);

    return (
      <div>
        <FullCalendarHead
          displayMonth={displayMonth}
          availableMonth={availableMonth}
          updateDisplayMonth={updateDisplayMonth}
          toggleFullCalendar={toggleFullCalendar}
        />
        <FullCalendarBody
          selectedDate={selectedDate}
          displayMonth={displayMonth}
          updateSelectedDate={updateSelectedDate}
        />
      </div>
    );
  }
}

FullCalendar.propTypes = {
  startDate: PropTypes.object,
  displayMonth: PropTypes.object,
  selectedDate: PropTypes.object,
  toggleFullCalendar: PropTypes.func,
  updateSelectedDate: PropTypes.func,
  updateDisplayMonth: PropTypes.func,
};
