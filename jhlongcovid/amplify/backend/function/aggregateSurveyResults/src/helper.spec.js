const { hasLongCovid } = require("./helper");

describe("Testing has long covid function", () => {
  it("Testing recovered, over four weeks, under twelve weeks, responded no to having covid", () => {
    const expectation = {
      OverFourWeeks: 1,
      OverTwelveWeeks: 0,
    };

    const symptomResults = {
      hasLongCovid: "no",
    };

    const covidResults = {
      lastPositive: "2022-01-19T00:00:00.000Z",
    };

    const recoveryResults = {
      recovered: true,
      lengthOfRecovery: 45,
    };

    const result = hasLongCovid(symptomResults, covidResults, recoveryResults);

    expect(result).toEqual(expectation);
  });

  it("Testing recovered, over four weeks, under twelve weeks, responded yes to having covid", () => {
    const expectation = {
      OverFourWeeks: 1,
      OverTwelveWeeks: 1,
    };

    const symptomResults = {
      hasLongCovid: "yes",
    };

    const covidResults = {
      lastPositive: "2022-01-19T00:00:00.000Z",
    };

    const recoveryResults = {
      recovered: true,
      lengthOfRecovery: 45,
    };

    const result = hasLongCovid(symptomResults, covidResults, recoveryResults);

    expect(result).toEqual(expectation);
  });

  it("Testing not recovered, under four weeks, responded no to having covid", () => {
    const expectation = {
      OverFourWeeks: 0,
      OverTwelveWeeks: 0,
    };

    const symptomResults = {
      hasLongCovid: "no",
    };

    const covidResults = {
      lastPositive: "2023-03-07T00:00:00.000Z",
    };

    const recoveryResults = {
      recovered: false,
    };

    const result = hasLongCovid(symptomResults, covidResults, recoveryResults);

    expect(result).toEqual(expectation);
  });
});
