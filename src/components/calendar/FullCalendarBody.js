import React, { Component } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import { WEEKDAY_LETTER_ARRAY } from "../../constants/CalendarConsts";
import { isSameMonth } from "../../utils";


export default class FullCalendarBody extends Component {
  constructor(props) {
    super(props);
    this.renderDayContents = this.renderDayContents.bind(this);
  }

  renderDayContents(day, date) {
    if (isSameMonth(this.props.displayMonth, date)) { return <div className='vensa-theme-calendar-day-inner-div'>{day}</div>; }
    return null;
  }

  render() {
    const { selectedDate, updateSelectedDate, displayMonth } = this.props;

    return (
      <div className='vensa-theme-calendar-container'>
        <div className="vensa-theme-calendar-head">
          {
            WEEKDAY_LETTER_ARRAY.map((day, index) => <div key={index} className="vensa-theme-calendar-head_day">{day}</div>)
          }
        </div>

        <DatePicker
          inline
          selected={selectedDate}
          openToDate={displayMonth}
          onChange={updateSelectedDate}
          calendarClassName="vensa-theme-calendar"
          renderDayContents={this.renderDayContents}
          renderCustomHeader={() => {}}
      />
      </div>
    );
  }
}

FullCalendarBody.propTypes = {
  selectedDate: PropTypes.object,
  displayMonth: PropTypes.object,
  updateSelectedDate: PropTypes.func,
};
