/* eslint camelcase: 0, max-params: 0 */

"use strict";

const fs = require("fs");
const inquirer = require("inquirer");
const { GOV_DB_PATH } = require("./config");

console.log("Welcome to IDChain Init script: Delete DB");

const questions = [
  {
    type: "confirm",
    name: "Government",
    message: `Delete Government DB?`,
    default: false
  }
];

function getDbPathByName(name) {
  switch (name) {
    case "Government":
      return GOV_DB_PATH;
    default:
      throw new Error("Unknown entity");
  }
}

inquirer.prompt(questions).then(res => {
  Object.keys(res).forEach(entity => {
    if (res[entity]) {
      console.log(`Deleting ${entity} DB`);
      fs.unlink(getDbPathByName(entity), err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully deleted`);
        }
      });
    }
  });
});
