import React, { Component } from "react";
import PropTypes from "prop-types";
import { getMiniCalendarDayArry, getDateToString } from "../../utils";
import { WEEKDAY_NAME_ARRAY } from "../../constants/CalendarConsts";

export default class MiniCalendarBody extends Component {
  render() {
    const { selectedDate, updateSelectedDate } = this.props;
    const dayArry = getMiniCalendarDayArry(selectedDate);
    const className = "vensa-theme-minicalendar-day";
    const selectedClassName = `${className} vensa-theme-minicalendar-day-selected`;
    return (
      <div className='vensa-theme-minicalendar-container'>
        {
          dayArry.map(date => (
              <div
                key={getDateToString(date)}
                className={
                  date.getDate() === selectedDate.getDate() ? selectedClassName : className
                }
              >
                <div
                  className="vensa-theme-minicalendar-day-inner-div"
                  onClick={() => updateSelectedDate(date)}
                >
                  <div className="vensa-theme-minicalendar-day-inner-date">
                    {date.getDate()}
                  </div>
                  <div className="vensa-theme-minicalendar-day-inner-weekday">
                    {WEEKDAY_NAME_ARRAY[date.getDay()]}
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    );
  }
}

MiniCalendarBody.propTypes = {
  selectedDate: PropTypes.object,
  updateSelectedDate: PropTypes.func,
};
