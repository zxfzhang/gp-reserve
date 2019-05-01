import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import R from "ramda";
import DoctorDetails from "../components/doctor/DoctorDetails";
import * as Actions from "../actions";

class DoctorDetailsContainer extends Component {
  componentDidMount() {
    const doctorId = R.path(["match", "params", "id"], this.props);
    const { fetchDoctorDetails } = this.props;
    fetchDoctorDetails(doctorId);
  }

  render() {
    const { error, fetchStatus, info } = this.props;
    return (
      <div className="vensa-theme-appointment-container">
        <DoctorDetails
          info={info}
          error={error}
          fetchStatus={fetchStatus}
        />
      </div>
    );
  }
}

DoctorDetailsContainer.propTypes = {
  error: PropTypes.string,
  fetchStatus: PropTypes.string,
  info: PropTypes.object,
  fetchDoctorDetails: PropTypes.func,
};

/* istanbul ignore next */
const mapStateToProps = ({ doctor }) => ({ ...doctor });

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetchDoctorDetails(id) {
    dispatch(Actions.fetchDoctorDetails(id));
  },
});

export { DoctorDetailsContainer as DoctorDetailsContainerComp };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoctorDetailsContainer);
