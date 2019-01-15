/* eslint camelcase: 0, max-params: 0 */

"use strict";

const yearInMillis = 365 * 24 * 60 * 60 * 1000;

function toUnixSeconds(date) {
  return Math.floor(date.getTime() / 1000);
}

function datePlusYears(date, years) {
  const dateInMillis = new Date(date).getTime();
  return new Date(dateInMillis + years * yearInMillis);
}

function removeTimeFromDate(date) {
  date = new Date(date.setUTCHours(0));
  date = new Date(date.setUTCMinutes(0));
  date = new Date(date.setUTCSeconds(0));
  return new Date(date.setUTCMilliseconds(0));
}

module.exports = {
  toUnixSeconds,
  datePlusYears,
  removeTimeFromDate
};
