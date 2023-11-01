import { onUpdateMapDataCust } from "../components/Map/mapFunctions";
import { API, graphqlOperation } from "aws-amplify";
import { RealOrMock } from "../pages";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { GraphQLSubscription } from "@aws-amplify/api";
import * as subscriptions from "../src/graphql/subscriptions";
import { OnUpdateMapDataSubscription } from "../src/API";
import {
  updateCountyData,
  updateStateData,
} from "../redux/slices/mapDataSlice";

export const useOnUpdateMapDataSubscription = (
  toggleDisplayDataOnZoom: () => void,
  realOrMock: RealOrMock
): void => {
  const dispatch = useAppDispatch();
  const subscription = API.graphql<
    GraphQLSubscription<typeof subscriptions.onUpdateMapData>
  >(graphqlOperation(onUpdateMapDataCust));

  useEffect(() => {
    const subscriptionObject = subscription.subscribe({
      next: ({ provider, value }) => {
        const v = value.data as OnUpdateMapDataSubscription;
        const newMapData = v.onUpdateMapData;
        console.log(newMapData);
        if (newMapData) {
          if (newMapData.level === "county") {
            if (realOrMock == RealOrMock.REAL) {
              dispatch(updateCountyData(newMapData));
            }
          } else {
            if (realOrMock == RealOrMock.REAL) {
              dispatch(updateStateData(newMapData));
            }
          }
          toggleDisplayDataOnZoom();
        } else {
          console.log("New map data is null");
        }
      },
      error: (error) => {},
    });
    return () => {
      subscriptionObject.unsubscribe();
    };
  }, []);
};
