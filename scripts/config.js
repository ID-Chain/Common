/* eslint camelcase: 0 */
const path = require("path");

const appRootPath = path.dirname(require.main.filename || process.mainModule.filename);
const GOV_DB_PATH = "./government.db";
const locale = "nl";
const passportCountryCode = "NLD";
const passportNationality = "Nederlandse";
const passportIssuer = "Gemeente Amsterdam";

module.exports = {
  appRootPath,
  GOV_DB_PATH,
  locale,
  passportCountryCode,
  passportNationality,
  passportIssuer
};
