import React, { Component } from "react";
import PropTypes from "prop-types";
import R from "ramda";
import { Link } from "react-router-dom";
import { getHourTime, isTimeAfter } from "../../utils";
import { TIME_SLOT_MORNING, NO_SLOT_AVAILABLE, IMG_SERVER, ROUTES } from "../../constants";

export default class DoctorPanel extends Component {
  render() {
    const selectedFilter = this.props.selectedFilter || TIME_SLOT_MORNING;
    const { doctorScheduleInfo } = this.props;
    const slotKeys = Object.keys(doctorScheduleInfo.AvailableSlots)
      .filter(slot => isTimeAfter(doctorScheduleInfo.AvailableSlots[slot], selectedFilter));

    return (
      <div className="vensa-theme-doctor-panel__container">
        <div className="vensa-theme-doctor-panel__info">
          <div className="vensa-theme-doctor-panel__avator">
            <Link to={R.replace(/:id/g, doctorScheduleInfo.Id, ROUTES.DOCTOR)}>
              <img
                className="vensa-theme-doctor-panel__avator-img"
                src={ `${IMG_SERVER}${doctorScheduleInfo.PictureURL}` }
              />
            </Link>
          </div>
          <div className="vensa-theme-doctor-panel__intro">
            <Link to={R.replace(/:id/g, doctorScheduleInfo.Id, ROUTES.DOCTOR)}>
              <div className="vensa-theme-doctor-panel__name">
                {doctorScheduleInfo.Name}
              </div>
            </Link>
            <div className="vensa-theme-doctor-panel__title">
              {doctorScheduleInfo.Title}
            </div>
          </div>
        </div>
        <div className="vensa-theme-doctor-panel__slot-list">
          {
            slotKeys.length > 0 && slotKeys.map(key => (
                <div key={key} className="vensa-theme-doctor-panel__slot-item">
                  { getHourTime(doctorScheduleInfo.AvailableSlots[key])}
                </div>
              ))
          }
          {
            slotKeys.length === 0 && (
              <div className="vensa-theme-doctor-panel__slot-noitem">
                {NO_SLOT_AVAILABLE}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

DoctorPanel.propTypes = {
  selectedFilter: PropTypes.number,
  doctorScheduleInfo: PropTypes.object,
};
