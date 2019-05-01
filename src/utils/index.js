import moment from "moment";
import * as CONSTANTS from "../constants";

export const getFutureMonth = (startDate, incNum) => {
  const futureDate = new Date();
  futureDate.setFullYear(startDate.getFullYear(), startDate.getMonth() + incNum, 1);
  return futureDate;
};

export const getFutureMonthList = (startDate) => {
  const monthArry = [];
  for (let i = 0; i < CONSTANTS.FUTURE_MONTH_NUM; i += 1) {
    monthArry.push(getFutureMonth(startDate, i));
  }
  return monthArry;
};

export const isSameMonth = (d1, d2) => {
  if (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()) {
    return true;
  }
  return false;
};

export const getDateToString = date => moment(date).format("YYYY-MM-DD");

export const getMiniCalendarDayArry = (selectedDate) => {
  const dayArry = [];
  const loop = CONSTANTS.MINI_CALENDAR_SHOW_DAYS;
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();

  for (let i = 0; i < loop; i += 1) {
    const preDate = new Date(selectedYear, selectedMonth, selectedDay + i);
    if (isSameMonth(preDate, selectedDate)) dayArry.push(preDate);
    if (dayArry.length === loop) break;
    if (i > 0) {
      const aftDate = new Date(selectedYear, selectedMonth, selectedDay - i);
      if (isSameMonth(aftDate, selectedDate)) dayArry.push(aftDate);
      if (dayArry.length === loop) break;
    }
  }

  dayArry.sort((d1, d2) => d1.getDate() - d2.getDate());
  return dayArry;
};

export const getHourTime = dateStr => moment(dateStr).format("H:mm");

export const isTimeAfter = (dateStr, filter) => {
  const hour = moment(dateStr).format("H");
  if (filter === CONSTANTS.TIME_SLOT_MORNING) return true;
  if (filter === CONSTANTS.TIME_SLOT_AFTERNOON && hour >= 12) return true;
  if (filter === CONSTANTS.TIME_SLOT_EVENING && hour >= 18) return true;
  return false;
};
