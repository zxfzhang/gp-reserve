import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FullCalendar from "../components/calendar/FullCalendar";
import MiniCalendar from "../components/calendar/MiniCalendar";
import DoctorList from "../components/doctor/DoctorList";
import * as Actions from "../actions";

class AppointmentContainer extends Component {
  componentDidMount() {
    const { fetchSchedules, selectedDate } = this.props;
    fetchSchedules(selectedDate);
  }

  render() {
    const {
      fullCalendarOpen,
      selectedDate,
      startDate,
      displayMonth,
      selectedFilter,
      list,
      toggleFullCalendar,
      updateSlotFilter,
      updateSelectedDate,
      updateDisplayMonth,
      error,
      fetchStatus,
    } = this.props;

    return (
      <div className="vensa-theme-appointment-container">
        {
          fullCalendarOpen && (
            <FullCalendar
              startDate={startDate}
              toggleFullCalendar={toggleFullCalendar}
              selectedDate={selectedDate}
              displayMonth={displayMonth}
              updateSelectedDate={updateSelectedDate}
              updateDisplayMonth={updateDisplayMonth}
            />
          )
        }
        {
          !fullCalendarOpen && (
            <MiniCalendar
              selectedDate={selectedDate}
              selectedFilter={selectedFilter}
              toggleFullCalendar={toggleFullCalendar}
              updateSlotFilter={updateSlotFilter}
              updateSelectedDate={updateSelectedDate}
            />
          )
        }
        <DoctorList
          scheduleList={list}
          selectedFilter={selectedFilter}
          error={error}
          fetchStatus={fetchStatus}
        />
      </div>
    );
  }
}

AppointmentContainer.propTypes = {
  error: PropTypes.string,
  fetchStatus: PropTypes.string,
  list: PropTypes.array,
  fetchSchedules: PropTypes.func,
  toggleFullCalendar: PropTypes.func,
  updateSlotFilter: PropTypes.func,
  updateSelectedDate: PropTypes.func,
  fullCalendarOpen: PropTypes.bool,
  selectedDate: PropTypes.object,
  selectedFilter: PropTypes.number,
  startDate: PropTypes.object,
  displayMonth: PropTypes.object,
  updateDisplayMonth: PropTypes.func,
};

/* istanbul ignore next */
const mapStateToProps = ({ schedules, calendar }) => ({ ...schedules, ...calendar });

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetchSchedules(selectedDate) {
    dispatch(Actions.fetchSchedules(selectedDate));
  },
  toggleFullCalendar() {
    dispatch(Actions.toggleFullCalendar());
  },
  updateSlotFilter(newFilter) {
    dispatch(Actions.updateSlotFilter(newFilter));
  },
  updateSelectedDate(newDate) {
    dispatch(Actions.updateSelectedDate(newDate));
  },
  updateDisplayMonth(newMonth) {
    dispatch(Actions.updateDisplayMonth(newMonth));
  },

});

export { AppointmentContainer as AppointmentContainerComp };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppointmentContainer);
