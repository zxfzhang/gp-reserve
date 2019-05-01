import React, { Component } from "react";
import PropTypes from "prop-types";
import { MONTH_NAME_ARRAY } from "../../constants/CalendarConsts";
import CalendarIcon from "../../resources/svg/calendar-icon.svg";

export default class MiniCalendarHead extends Component {
  render() {
    const { selectedDate, toggleFullCalendar } = this.props;
    return (
      <div className="vensa-theme-calendar-tab-header__container">
        <div className="vensa-theme-calendar-tab-header">
          <div className="vensa-theme-calendar-tab-header__mini">
            {MONTH_NAME_ARRAY[selectedDate.getMonth()]}
          </div>
        </div>
        <div className="vensa-theme-calendar-tab-header__claendar-icon-div">
          <CalendarIcon
            className="vensa-theme-calendar-tab-header__claendar-icon"
            onClick={toggleFullCalendar}
          />
        </div>
      </div>
    );
  }
}

MiniCalendarHead.propTypes = {
  selectedDate: PropTypes.object,
  toggleFullCalendar: PropTypes.func,
};
