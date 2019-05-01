import R from "ramda";
import { createAction } from "redux-actions";
import { APIS } from "../constants";
import * as ACTION_TYPES from "../constants/ActionTypes";
import { getDateToString } from "../utils";

export const fetchingSchedules = createAction(ACTION_TYPES.SCHEDULE_FETCHING);

export const setSchedules = createAction(ACTION_TYPES.SCHEDULE_SET);

export const fetchSchedules = selectedDate => (dispatch) => {
  dispatch(fetchingSchedules());
  const fetchUrl = R.replace(/:date/g, getDateToString(selectedDate), APIS.GET_SCHEDULES);
  return fetch(fetchUrl)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(
      (json) => {
        dispatch(setSchedules({ list: json }));
      },
      (res) => {
        dispatch(setSchedules({ error: res.message }));
      },
    );
};

export const toggleFullCalendar = createAction(ACTION_TYPES.TOGGLE_FULL_CALENDAR);

export const updateSlotFilter = createAction(ACTION_TYPES.UPDATE_SLOT_FILTER);

export const updatingSelectedDate = createAction(ACTION_TYPES.UPDATE_SELECTED_DATE);

export const updateSelectedDate = selectedDate => (dispatch) => {
  dispatch(updatingSelectedDate(selectedDate));
  return fetchSchedules(selectedDate)(dispatch);
};

export const updateDisplayMonth = createAction(ACTION_TYPES.UPDATE_DISPLAY_MONTH);

export const fetchingDoctorDetails = createAction(ACTION_TYPES.DOCTOR_DETAILS_FETCHING);

export const setDoctorDetails = createAction(ACTION_TYPES.DOCTOR_DETAILS_SET);

export const fetchDoctorDetails = id => (dispatch) => {
  dispatch(fetchingDoctorDetails());
  const fetchUrl = R.replace(/:id/g, id, APIS.GET_PROVIDER_DETAIL);
  return fetch(fetchUrl)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(
      (json) => {
        dispatch(setDoctorDetails({ info: json }));
      },
      (res) => {
        dispatch(setDoctorDetails({ error: res.message }));
      },
    );
};
