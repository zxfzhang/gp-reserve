import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FETCH_STATUS, DOCTOR_LANG_SPOKEN, DOCTOR_EDUCATION, IMG_SERVER, DOCTOR_BOOK_APPOINTMENT, ROUTES } from "../../constants";
import CloseButton from "../../resources/svg/close-btn.svg";

export default class DoctorDetails extends Component {
  render() {
    const { error, fetchStatus, info } = this.props;
    if (!info.Id) return <div></div>;

    let result;
    if (error) {
      result = <div className="vensa-theme-appointment-msg"><h5>{error}</h5></div>;
    } else if (fetchStatus === FETCH_STATUS.LOADING) {
      result = <div className="vensa-theme-appointment-msg"><h5>{FETCH_STATUS.LOADING}...</h5></div>;
    } else {
      result = (
        <div className="vensa-theme-doctor-details__container">
          <div className="vensa-theme-doctor-details__info">
            <div className="vensa-theme-doctor-details__avator">
              <img
                className="vensa-theme-doctor-details__avator-img"
                src={ `${IMG_SERVER}${info.PictureURL}` }
              />
            </div>
            <div className="vensa-theme-doctor-details__name">
              {info.Name}
            </div>
            <div className="vensa-theme-doctor-details__title">
              {info.Title}
            </div>
            <div className="vensa-theme-doctor-details__bookbutton-div">
              <Link to={ROUTES.HOME}>
                <div className="vensa-theme-doctor-details__bookbutton">
                  {DOCTOR_BOOK_APPOINTMENT}
                </div>
              </Link>
            </div>
            <div className="vensa-theme-doctor-details__desc">
              {info.Description}
            </div>
            <div className="vensa-theme-doctor-details__lang">
              <div className="vensa-theme-doctor-details__lang-title">
                {DOCTOR_LANG_SPOKEN}
              </div>
              <div className="vensa-theme-doctor-details__lang-itemlist">
                {info.Languages.map((lang, key) => <div key={key} className="vensa-theme-doctor-details__lang-item">{lang}</div>)}
              </div>
            </div>
            <div className="vensa-theme-doctor-details__degree">
              <div className="vensa-theme-doctor-details__degree-title">
                {DOCTOR_EDUCATION}
              </div>
              <div className="vensa-theme-doctor-details__degree-itemlist">
                {info.Degrees.map((degree, key) => <div key={key} className="vensa-theme-doctor-details__degree-item">{degree}</div>)}
              </div>
            </div>
          </div>
          <div className="vensa-theme-doctor-details__close-btndiv">
            <Link to={ROUTES.HOME}>
              <CloseButton className="vensa-theme-doctor-details__close-btn"/>
            </Link>
          </div>
        </div>
      );
    }

    return result;
  }
}

DoctorDetails.propTypes = {
  error: PropTypes.string,
  fetchStatus: PropTypes.string,
  info: PropTypes.object,
};
