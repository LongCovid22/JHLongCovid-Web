import {
  onCreateMapDataCust,
} from "../components/Map/mapFunctions";
import {  API, graphqlOperation } from "aws-amplify";
import { RealOrMock } from "../pages";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { GraphQLSubscription } from "@aws-amplify/api";
import * as subscriptions from "../src/graphql/subscriptions";
import { OnCreateMapDataSubscription } from "../src/API";
import {
  updateCountyData,
  updateStateData,
} from "../redux/slices/mapDataSlice";

export const useOnCreateMapDataSubscription = (
  toggleDisplayDataOnZoom: () => void,
  realOrMock: RealOrMock
): void => {
  const dispatch = useAppDispatch();
  const subscription = API.graphql<
    GraphQLSubscription<typeof subscriptions.onCreateMapData>
  >(graphqlOperation(onCreateMapDataCust));

  useEffect(() => {
    const subscriptionObject = subscription.subscribe({
      next: ({ provider, value }) => {
        const v = value.data as OnCreateMapDataSubscription;
        const newMapData = v.onCreateMapData;
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
