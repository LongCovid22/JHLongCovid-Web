const { checkNotNullAndBoolType } = require("./checkTypes");

const weeksBetweenDates = (date1, date2) => {
  // Ensure date1 is earlier than date2
  if (!date1 || !date2) {
    return null;
  }
  if (date1 > date2) {
    [date1, date2] = [date2, date1];
  }
  // Calculate the difference in milliseconds
  const millisecondsInOneWeek = 1000 * 60 * 60 * 24 * 7;
  const diffInMilliseconds = date2 - date1;
  // Calculate the number of weeks
  const weeks = Math.floor(diffInMilliseconds / millisecondsInOneWeek);
  return weeks;
};

function addDaysToDate(date, days) {
  // Create a new Date object to avoid modifying the original date
  const newDate = new Date(date);

  // Convert the number of days to milliseconds
  const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  const millisecondsToAdd = days * millisecondsInOneDay;

  // Add the milliseconds to the date object
  newDate.setTime(newDate.getTime() + millisecondsToAdd);

  return newDate;
}

function hasLongCovid(symptomResults, covidResults, recoveryResults) {
  let longCovidResults = {
    //question 1 -> do you been infected with COVID?
    hasCovid: 0,
    //question 65 -> do you have Long COVID?
    SelfReportedLongCovid: 0,

    //question 65 vs question 1
    SelfReportedLongCovidWithCovid: 0,
    SelfReportedLongCovidWithoutCovid: 0,


    //length of COVID exposure
    OverFourWeeks: 0,
    OverTwelveWeeks: 0,
    //either SelfReportLongCovidWithCovid OR >4 Weeks Symtomatic
    LongCovid: 0,
  };

  // Check to make sure the objects passed in aren't null or undefined
  if (!symptomResults && !covidResults && !symptomResults) {
    return longCovidResults;
  }

  const selfReportedLongCovid = symptomResults.hasLongCovid === "yes";

  if (
    checkNotNullAndBoolType(covidResults.beenInfected) &&
    covidResults.beenInfected
  ) {
    longCovidResults.hasCovid = 1;
  }

  if (selfReportedLongCovid) {
    longCovidResults.SelfReportedLongCovid = 1;
  }

  if (selfReportedLongCovid && covidResults.beenInfected === true) {
    longCovidResults.SelfReportedLongCovidWithCovid = 1;
  }

  if (selfReportedLongCovid && covidResults.beenInfected === false) {
    longCovidResults.SelfReportedLongCovidWithoutCovid = 1;
  }

  // To determine # of weeks that one has COVID, either:
  // Not recovered, and determine # of weeks from last positive until now

  if (covidResults && covidResults.lastPositive) {
      // Dates for current cases of long covid
    const lastPositiveDate = Date.parse(covidResults.lastPositive);
    const weeksSinceLastPositive = weeksBetweenDates(
      lastPositiveDate,
      Date.now()
    );
    const notRecovered = recoveryResults ? !recoveryResults.recovered : false;
    if (weeksSinceLastPositive) {
      if (weeksSinceLastPositive > 4 && notRecovered) {
        longCovidResults.OverFourWeeks = 1;
      }

      if (weeksSinceLastPositive > 12 && notRecovered) {
        longCovidResults.OverTwelveWeeks = 1;
      }
    }
  }
  

  // Recovered, and determine # of days that it took to recover
  if (recoveryResults && recoveryResults.lengthOfRecovery) {
    if (recoveryResults.lengthOfRecovery > 84) {
      longCovidResults.OverTwelveWeeks = 1;
    }
    if (recoveryResults.lengthOfRecovery > 28) {
      longCovidResults.OverFourWeeks = 1;
    }
  }

  if (
    longCovidResults.OverTwelveWeeks === 1 ||
    longCovidResults.OverFourWeeks === 1 ||
    symptomResults.hasLongCovid === "yes"
  ) {
    longCovidResults.LongCovid = 1;
  }

  return longCovidResults;
}

const mockCredentials = {
  accessKeyId: "ASIAVJKIAM-AuthRole",
  secretAccessKey: "fake",
};

module.exports = { hasLongCovid };
