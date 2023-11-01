import React, { useState, useEffect } from "react";
import mockResult from "../../../../mockResult.json";
import { getTotalCovidCases, percent } from "../COVID/covidVisualizationFunctions";
import { YesNo, MedicationsAvailable } from "../answerTypes";

import {
  createMedicationsTakenConfig,
  createRecoveryConfig,

} from "./covidVisualizationFunctions";
import { RealOrMock } from "../../../../pages";

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

export default function useGetRecoverySummary(realData: any, realOrMock: RealOrMock) {
  const [recovery_data, setData] = useState<RecoverySummary | null>(null);
  const [loading, setLoadisng] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let data: RecoverySummary;

    if (realOrMock === RealOrMock.REAL) {
      const {
        recoverySummary: {
          hospitalized: { yes: { total: hospitalizationTotal } },
          medicationsPrescribed: { yes: { total: medicationsTotal } },
          medicationsTakenCount,
          recovered
        },
        covidSummary: {
          beenInfected: { yes: { total: beenInfectedTotal } }
        }
      } = realData;
      
      data = {
        hospitalization: hospitalizationTotal,
        hospitalizationPercentage: percent(hospitalizationTotal, beenInfectedTotal),
        medications: medicationsTotal,
        medicationsPercentage: percent(medicationsTotal, beenInfectedTotal),
        medicationsTakenAmongstParticpantsGraph: createMedicationsTakenConfig(medicationsTakenCount as MedicationsAvailable),
        fullyRecoveredVsNotRecoveredGraph: createRecoveryConfig(recovered as YesNo),
      };
      setData(data);

    } else if (realOrMock === RealOrMock.MOCK) {
      const {
        recoverySummary: {
          hospitalized: { yes: { total: hospitalizationTotal } },
          medicationsPrescribed: { yes: { total: medicationsTotal } },
          medicationsTakenCount,
          recovered
        },
        covidSummary: {
          beenInfected: { yes: { total: beenInfectedTotal } }
        }
      } = mockResult.county;
      
      data = {
        hospitalization: hospitalizationTotal,
        hospitalizationPercentage: percent(hospitalizationTotal, beenInfectedTotal),
        medications: medicationsTotal,
        medicationsPercentage: percent(medicationsTotal, beenInfectedTotal),
        medicationsTakenAmongstParticpantsGraph: createMedicationsTakenConfig(medicationsTakenCount as MedicationsAvailable),
        fullyRecoveredVsNotRecoveredGraph: createRecoveryConfig(recovered as YesNo),
      };
      setData(data);
    }
    

    
  }, [realOrMock, realData]);

  return { recovery_data, error };
}
