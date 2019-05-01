import React, { Component } from "react";
import PropTypes from "prop-types";
import DoctorPanel from "./DoctorPanel";
import { FETCH_STATUS } from "../../constants";

export default class DoctorList extends Component {
  render() {
    const { selectedFilter, error, fetchStatus } = this.props;
    const scheduleList = this.props.scheduleList || [];
    let result;
    if (error) {
      result = <div className="vensa-theme-appointment-msg"><h5>{error}</h5></div>;
    } else if (fetchStatus === FETCH_STATUS.LOADING) {
      result = <div className="vensa-theme-appointment-msg"><h5>{FETCH_STATUS.LOADING}...</h5></div>;
    } else {
      result = (
      <div className="vensa-theme-doctor-list">
        {
          scheduleList.map(doctorScheduleInfo => (
              <DoctorPanel
                key={doctorScheduleInfo.Id}
                doctorScheduleInfo={doctorScheduleInfo}
                selectedFilter={selectedFilter}
              />
            ))
        }
      </div>);
    }
    return result;
  }
}

DoctorList.propTypes = {
  scheduleList: PropTypes.array,
  selectedFilter: PropTypes.number,
  fetchStatus: PropTypes.string,
  error: PropTypes.string,
};
