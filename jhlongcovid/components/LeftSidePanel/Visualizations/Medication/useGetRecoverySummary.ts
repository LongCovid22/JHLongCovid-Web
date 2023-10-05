import React, { useState, useEffect } from "react";
import mockResult from "../../../../mockResult.json";
import { getTotalCovidCases, percent } from "../COVID/covidVisualizationFunctions";
import { YesNo, MedicationsAvailable } from "../answerTypes";

import {
  createMedicationsTakenConfig,
  createRecoveryConfig,

} from "./covidVisualizationFunctions";

interface GraphInterface {
  labels: string[];
  options: any;
  data: any;
}

interface RecoverySummary {
  hospitalization: number;
  hospitalizationPercentage: number;
  medications: number;
  medicationsPercentage: number;
  medicationsTakenAmongstParticpantsGraph: GraphInterface;
  fullyRecoveredVsNotRecoveredGraph: GraphInterface;
}

export default function useGetRecoverySummary() {
  const [recovery_data, setData] = useState<RecoverySummary | null>(null);
  const [loading, setLoadisng] = useState<boolean>(false);
  const [error, setError] = useState<string>("");


  useEffect(() => {
    const { covidSummary, totalFullEntries } = mockResult.county;
    const testGraphInterface = {
      labels: [],
      options: {},
      data: { labels: [], datasets: [] },
    };

    const totalCovidInfections = mockResult.county.covidSummary.beenInfected.yes.total;
    const recoveryConfig = createRecoveryConfig(mockResult.county.recoverySummary.recovered as YesNo)
    const medTakenConfig = createMedicationsTakenConfig(
      mockResult.county.recoverySummary.medicationsTakenCount as MedicationsAvailable
          );
    const data: RecoverySummary = {
      hospitalization: mockResult.county.recoverySummary.hospitalized.yes.total,
      hospitalizationPercentage: percent(mockResult.county.recoverySummary.hospitalized.yes.total, totalCovidInfections),
      medications: mockResult.county.recoverySummary.medicationsPrescribed.yes.total,
      medicationsPercentage: percent(mockResult.county.recoverySummary.medicationsPrescribed.yes.total, totalCovidInfections),
      medicationsTakenAmongstParticpantsGraph: medTakenConfig,
      fullyRecoveredVsNotRecoveredGraph: recoveryConfig,
    };

    setData(data);
  }, []);

  return { recovery_data, error };
}
