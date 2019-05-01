import R from "ramda";
import { handleActions } from "redux-actions";
import * as ACTION_TYPES from "../constants/ActionTypes";
import { FETCH_STATUS, TIME_SLOT_MORNING } from "../constants";
import { getFutureMonth } from "../utils";

export const INITIAL_STATE = {
  calendar: {
    fullCalendarOpen: false,
    startDate: new Date(),
    selectedDate: new Date(),
    selectedFilter: TIME_SLOT_MORNING,
    displayMonth: getFutureMonth(new Date(), 0),
  },
  schedules: {
    fetchStatus: "",
    error: "",
    list: [],
  },
  doctor: {
    fetchStatus: "",
    error: "",
    info: {},
  },
};
export const reducers = {
  [ACTION_TYPES.SCHEDULE_FETCHING]: state =>
    R.mergeDeepRight(state, {
      schedules: {
        fetchStatus: FETCH_STATUS.LOADING,
        list: [],
        error: "",
      },
    }),
  [ACTION_TYPES.SCHEDULE_SET]: (state, action) =>
    R.mergeDeepRight(state, {
      schedules: {
        fetchStatus: FETCH_STATUS.LOADED,
        list: action.payload.list || [],
        error: action.payload.error || "",
      },
    }),
  [ACTION_TYPES.TOGGLE_FULL_CALENDAR]: state =>
    R.mergeDeepRight(state, {
      calendar: {
        fullCalendarOpen: !state.calendar.fullCalendarOpen,
      },
    }),
  [ACTION_TYPES.UPDATE_SLOT_FILTER]: (state, action) =>
    R.mergeDeepRight(state, {
      calendar: {
        selectedFilter: action.payload,
      },
    }),
  [ACTION_TYPES.UPDATE_SELECTED_DATE]: (state, action) =>
    R.mergeDeepRight(state, {
      calendar: {
        selectedDate: action.payload,
        fullCalendarOpen: false,
      },
    }),
  [ACTION_TYPES.UPDATE_DISPLAY_MONTH]: (state, action) =>
    R.mergeDeepRight(state, {
      calendar: {
        displayMonth: action.payload,
      },
    }),
  [ACTION_TYPES.DOCTOR_DETAILS_FETCHING]: state =>
    R.mergeDeepRight(state, {
      doctor: {
        fetchStatus: FETCH_STATUS.LOADING,
        info: {},
        error: "",
      },
    }),
  [ACTION_TYPES.DOCTOR_DETAILS_SET]: (state, action) =>
    R.mergeDeepRight(state, {
      doctor: {
        fetchStatus: FETCH_STATUS.LOADED,
        info: action.payload.info || {},
        error: action.payload.error || "",
      },
    }),
};
export default handleActions(reducers, INITIAL_STATE);
