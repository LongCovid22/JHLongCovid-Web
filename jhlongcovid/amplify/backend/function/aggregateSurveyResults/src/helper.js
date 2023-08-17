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
    OverFourWeeks: 0,
    OverTwelveWeeks: 0,
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

  const hasLongCovid = symptomResults.hasLongCovid === "yes";
  const notRecovered = recoveryResults ? !recoveryResults.recovered : false;

  if (!weeksSinceLastPositive && !weeksSinceLastPositiveOld && hasLongCovid) {
    longCovidResults.OverFourWeeks = 1;
    longCovidResults.OverTwelveWeeks = 1;
  }
  // Logic for long covid: time since positive date > 4 && (not recovered || said yes to having long covid)
  if (weeksSinceLastPositive) {
    if (weeksSinceLastPositive > 4 && (hasLongCovid || notRecovered)) {
      longCovidResults.OverFourWeeks = 1;
    }

    if (weeksSinceLastPositive > 12 && (hasLongCovid || notRecovered)) {
      if (symptomResults.hasLongCovid === "yes" || !recoveryResults.recovered) {
        longCovidResults.OverTwelveWeeks = 1;
      }
    }
  }

  // Logic for an old case of long covid: (time since positive date > 4 && not recovered) || said yes to having long covid
  if (weeksSinceLastPositiveOld) {
    const oldHasLongCovid = weeksSinceLastPositiveOld > 4 || hasLongCovid;
    const oldOverTwelveWeeks = weeksSinceLastPositiveOld > 12 || hasLongCovid;

    if (oldHasLongCovid) {
      longCovidResults.OverFourWeeks = 1;
    }

    if (oldOverTwelveWeeks) {
      longCovidResults.OverTwelveWeeks = 1;
    }
  }

  return longCovidResults;
}

module.exports = { hasLongCovid };
