export const API_HOST = "http://localhost:3000";
export const IMG_SERVER = "https://frontendchallenge2019.azurewebsites.net";
export const APIS = {
  GET_SCHEDULES: `${API_HOST}/api/Schedule/:date`,
  GET_PROVIDER_DETAIL: `${API_HOST}/api/Provider/:id`,
  GET_PROVIDER_AVARTOR: `${API_HOST}/api/Picture/:id`,
};

export const ROUTES = {
  HOME: "/",
  DOCTOR: "/:id",
};

export const FETCH_STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
};

export const CUSTOMER_STATUS = [
  { label: "Prospective", value: 1 },
  { label: "Current", value: 2 },
  { label: "Non-active", value: 3 },
];

export const SORT_FIELD_ID = "id";
export const SORT_FIELD_NAME = "name";
export const SORT_FIELD_EMAIL = "email";

export const FUTURE_MONTH_NUM = 3;
export const MINI_CALENDAR_SHOW_DAYS = 5;
export const TIME_SLOT_MORNING = 0;
export const TIME_SLOT_AFTERNOON = 1;
export const TIME_SLOT_EVENING = 2;
export const NO_SLOT_AVAILABLE = "No appointment available for this date.";
export const DOCTOR_LANG_SPOKEN = "Language Spoken";
export const DOCTOR_EDUCATION = "Education";
export const DOCTOR_BOOK_APPOINTMENT = "Book an Appointment";


export const DATE_FORMAT = "DD-MM-YYYY, H:mm:ss";
