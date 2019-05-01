import React, { Component } from "react";
import PropTypes from "prop-types";
import { MONTH_NAME_ARRAY } from "../../constants/CalendarConsts";
import CalendarIcon from "../../resources/svg/calendar-icon.svg";
import { isSameMonth } from "../../utils";

export default class FullCalendarHead extends Component {
  render() {
    const {
      displayMonth, availableMonth, updateDisplayMonth, toggleFullCalendar,
    } = this.props;
    return (
      <div className="vensa-theme-calendar-tab-header__container">
        <div className="vensa-theme-calendar-tab-header">
          {
            availableMonth.map((monthDate, monthIndex) => {
              const className = "vensa-theme-calendar-tab-header__tab";
              const selectedClassName = `${className} vensa-theme-calendar-tab-header__tab-selected`;
              return (
                <div
                  key={monthIndex}
                  className={
                    isSameMonth(monthDate, displayMonth) ? selectedClassName : className
                  }
                  onClick={() => updateDisplayMonth(monthDate)}
                >
                  {MONTH_NAME_ARRAY[monthDate.getMonth()]}
                </div>
              );
            })
          }
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

FullCalendarHead.propTypes = {
  displayMonth: PropTypes.object,
  availableMonth: PropTypes.array,
  updateDisplayMonth: PropTypes.func,
  toggleFullCalendar: PropTypes.func,
};
