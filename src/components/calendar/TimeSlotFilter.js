import React, { Component } from "react";
import PropTypes from "prop-types";
import { TIME_SLOT_FILTERS_NAME } from "../../constants/CalendarConsts";

export default class TimeSlotFilter extends Component {
  render() {
    const { selectedFilter, updateSlotFilter } = this.props;
    const className = "vensa-theme-slot-filter__item";
    const selectedClassName = `${className} vensa-theme-slot-filter__item-selected`;
    return (
      <div className="vensa-theme-slot-filter__container">
        {
          TIME_SLOT_FILTERS_NAME.map((item, index) => (
            <div
              key={index}
              className={
                index === selectedFilter ? selectedClassName : className
              }
              onClick={() => updateSlotFilter(index)}
            >
              <div className="vensa-theme-slot-filter__item-div">
                {item}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

TimeSlotFilter.propTypes = {
  selectedFilter: PropTypes.number,
  updateSlotFilter: PropTypes.func,
};
