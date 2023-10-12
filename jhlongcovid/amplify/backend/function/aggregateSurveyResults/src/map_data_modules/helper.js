const weeksBetweenDates = (date1, date2) => {
  // Ensure date1 is earlier than date2
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
    SelfReportedLongCovid: 0,
    OverFourWeeks: 0,
    OverTwelveWeeks: 0,
    SelfReportedLongCovidWithCovid: 0,
    SelfReportedLongCovidWithCovid: 0,
    //either SelfReportLongCovidWithCovid OR >4 Weeks Symtomatic
    LongCovid: 0
  };

  // Check to make sure the objects passed in aren't null or undefined
  if (!symptomResults && !covidResults) {
    return longCovidResults;
  }

  // Dates for current cases of long covid
  const lastPositiveDate = Date.parse(covidResults.lastPositive);
  const weeksSinceLastPositive = weeksBetweenDates(
    lastPositiveDate,
    Date.now()
  );

  // For old cases of long covid
  let oldRecoveryDate = null;
  if (recoveryResults && recoveryResults.lengthOfRecovery) {
    oldRecoveryDate = addDaysToDate(
      lastPositiveDate,
      recoveryResults.lengthOfRecovery
    );
  }

  const weeksSinceLastPositiveOld = oldRecoveryDate
    ? weeksBetweenDates(lastPositiveDate, oldRecoveryDate)
    : null;

  const selfReportedLongCovid = symptomResults.hasLongCovid === "yes";
  const selfReportedCovid = covidResults.beenInfected === true;

  const notRecovered = recoveryResults ? !recoveryResults.recovered : false;

  if (selfReportedLongCovid) {
    longCovidResults.SelfReportedLongCovid = 1;
  }

  if (selfReportedLongCovid && (covidResults.beenInfected === true)) {
    longCovidResults.SelfReportedLongCovidWithCovid = 1;
  }

  if (selfReportedLongCovid && (covidResults.beenInfected === false)) {
    longCovidResults.SelfReportedLongCovidWithCovid = 1;
  }

  // Logic for long covid: time since positive date > 4 && not recovered
  if (weeksSinceLastPositive) {
    if (weeksSinceLastPositive > 4 && notRecovered) {
      longCovidResults.OverFourWeeks = 1;
    }

    if (weeksSinceLastPositive > 12 && notRecovered) {
      longCovidResults.OverTwelveWeeks = 1;
    }
  }

  // Logic for an old case of long covid: (time since positive date > 4 && not recovered)
  if (weeksSinceLastPositiveOld) {
    const oldHasLongCovid = weeksSinceLastPositiveOld > 4;
    const oldOverTwelveWeeks = weeksSinceLastPositiveOld > 12;

    if (oldHasLongCovid) {
      longCovidResults.OverFourWeeks = 1;
    }

    if (oldOverTwelveWeeks) {
      longCovidResults.OverTwelveWeeks = 1;
    }
  }

  of (longCovidResults.OverTwelveWeeks === 1 || longCovidResults.OverFourWeeks === 1 || longCovidResults.SelfReportedLongCovidWithCovid === 1) {
    longCovidResults.LongCovid = 1;
  }

  return longCovidResults;
}

const mockCredentials = {
  accessKeyId: "ASIAVJKIAM-AuthRole",
  secretAccessKey: "fake",
};

module.exports = { hasLongCovid };
