import React, { useState, useEffect } from "react";
import mockResult from "../../../../mockResult.json";
import { getTotalCovidCases, percent } from "./covidVisualizationFunctions";

interface CovidSummary {
  totalCovid: number;
  covidPercentage: number;
  covidAndLongCovid: number;
  covidAndLongCovidPercentage: number;
  noCovidButLongCovid: number;
  noCovidButLongCovidPercentage: number;
  longCovidOverFourWeeks: number;
  longCovidOverFourWeeksPercentage: number;
  longCovidOverTwelveWeeks: number;
  longCovidOverTwelveWeeksPercentage: number;
  covidAndLongCovidOrLongCovidOver4Weeks: number;
  covidAndLongCovidOrLongCovidOver4WeeksPercentage: number;
}

export default function useGetCovidSummary() {
  const [covid_data, setData] = useState<CovidSummary | null>(null);
  const [loading, setLoadisng] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  //setup realOrMock Capability

  useEffect(() => {
    const { covidSummary, totalFullEntries } = mockResult.county;

    const data: CovidSummary = {
      totalCovid: covidSummary.beenInfected.yes.total,
      covidPercentage: percent(
        covidSummary.beenInfected.yes.total,
        totalFullEntries
      ),
      covidAndLongCovid: covidSummary.hasCovidAndLongCovid.total,
      covidAndLongCovidPercentage: percent(
        covidSummary.hasCovidAndLongCovid.total,
        totalFullEntries
      ),
      noCovidButLongCovid: covidSummary.noCovidButHasLongCovid.total,
      noCovidButLongCovidPercentage: percent(
        covidSummary.noCovidButHasLongCovid.total,
        totalFullEntries
      ),
      longCovidOverFourWeeks: covidSummary.longCovidOverFourWeeks.total,
      longCovidOverFourWeeksPercentage: percent(
        covidSummary.longCovidOverFourWeeks.total,
        covidSummary.beenInfected.yes.total
      ),
      longCovidOverTwelveWeeks: covidSummary.longCovidOverTwelveWeeks.total,
      longCovidOverTwelveWeeksPercentage: percent(
        covidSummary.longCovidOverTwelveWeeks.total,
        covidSummary.beenInfected.yes.total
      ),
      covidAndLongCovidOrLongCovidOver4Weeks:
        covidSummary.covidAndLongCovidOrLongCovidOver4Weeks.total,
      covidAndLongCovidOrLongCovidOver4WeeksPercentage: percent(
        covidSummary.covidAndLongCovidOrLongCovidOver4Weeks.total,
        totalFullEntries
      ),
    };

    setData(data);
  }, []);

  // useEffect(() => {

  // })

  return { covid_data, error };
}
