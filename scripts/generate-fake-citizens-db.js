"use strict";

const faker = require("faker");

const inquirer = require("inquirer");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

const { menImagesList, womenImagesList } = require("./fake-resources");
const { removeTimeFromDate, toUnixSeconds, datePlusYears } = require("./utils");
const config = require("./config");

const govDB = new sqlite3.Database(config.GOV_DB_PATH, createCitizenTable);

const CREATE_CITIZEN_TABLE = fs.readFileSync("./sql/create-citizens-table.sql", "utf8");
const INSERT_CITIZEN = fs.readFileSync("./sql/insert-citizen.sql", "utf8");

let bsnList = [];

faker.locale = config.locale;

function createCitizenTable() {
  govDB.run(CREATE_CITIZEN_TABLE);
}

function generateFakeCitizen() {
  const genderValue = faker.random.number(1);
  const issuance = removeTimeFromDate(faker.date.recent(faker.random.number(2)));
  const randomYears = faker.random.number({ min: 18, max: 99 });
  const birthDate = removeTimeFromDate(faker.date.past(randomYears));
  const bsn = String(faker.random.number({ min: 100000000, max: 999999999 }));
  const passportNumber = String(faker.random.number({ min: 100000000, max: 999999999 }));
  bsnList.push(bsn);

  return [
    bsn,
    config.passportCountryCode,
    genderValue ? "Female" : "Male",
    faker.name.firstName(genderValue),
    faker.name.lastName(genderValue),
    faker.address.streetAddress(true) + " " + faker.address.city(),
    config.passportNationality,
    getImageUrl(genderValue),
    toUnixSeconds(birthDate),
    faker.address.streetAddress(true) + " " + faker.address.city(),
    passportNumber,
    toUnixSeconds(issuance),
    toUnixSeconds(datePlusYears(issuance, 10)),
    config.passportIssuer
  ];
}

function getImageUrl(gender) {
  if (gender === 0) {
    return faker.random.arrayElement(menImagesList);
  }
  return faker.random.arrayElement(womenImagesList);
}

const questions = [
  {
    type: "input",
    name: "recordsSize",
    message: `How many records(citizens & companies) would you like to generate?`,
    default: 100
  }
];

inquirer.prompt(questions).then(({ recordsSize }) => {
  // Add citizens
  let stmt = govDB.prepare(INSERT_CITIZEN);
  for (let i = 0; i < recordsSize; i++) {
    try {
      stmt.run(generateFakeCitizen());
    } catch (e) {
      console.log(e);
    }
  }
  stmt.finalize();
  govDB.close();
});
