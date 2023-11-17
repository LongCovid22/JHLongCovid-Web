import { API, graphqlOperation } from "aws-amplify";
import { listMapData, listMapAggregations } from "../../src/graphql/queries";
import { ListMapDataQuery, ListMapAggregationsQuery } from "../../src/API";
import { RealOrMock } from "../../pages";
/**
 * Calculates the amount of pixels needed to offset the pan from the center. On
 * display of the left side panel, the markers need to be centered within the remaining
 * space on the map. This allows us to calculate how many pixels are needed to offset
 * the marker.
 * @param map map to perform functions on
 * @returns amount of pixels that need to be offset
 */
export const calculatePanelOffset = (map: google.maps.Map): number => {
  const scale = Math.pow(2, map.getZoom()!);
  const bounds = map.getBounds();
  if (bounds !== null && bounds !== undefined && scale !== undefined) {
    // get northwest point to determine world coordinates for marker
    const nw = new google.maps.LatLng(
      bounds.getNorthEast().lat(),
      bounds.getSouthWest().lng()
    );

    // get map projection to convert lat/lngs into x/y points
    const projection = map.getProjection();
    if (projection !== null && projection !== undefined) {
      const nwPoint = projection.fromLatLngToPoint(nw);
      const centerPoint = projection.fromLatLngToPoint(map.getCenter()!);
      if (nwPoint !== null && centerPoint !== null) {
        // get center world coords
        const center = new google.maps.Point(
          Math.floor((centerPoint.x - nwPoint.x) * scale),
          Math.floor((centerPoint.y - nwPoint.y) * scale)
        );

        let viewportWidth = map.getDiv().offsetWidth;

        // get left panel offset
        let panelOffset = 0.0;
        // if the 35% of the viewports width is over 410 then the panel offset width is 430
        if (viewportWidth * 0.5 >= 410) {
          panelOffset = viewportWidth * 0.5 + 20;
        } else {
          // even though I know this is not the panel offset, setting it to the remaining map
          // width outside the panel works.
          panelOffset = viewportWidth - 430;
        }

        // calculate offset
        let offsetMapWidth = viewportWidth - panelOffset;
        let offsetCenterX = offsetMapWidth / 2.0;
        let offsetBetweenRealCenter = offsetCenterX - center.x;

        // when the maps center is behind the left side panel
        if (center.x <= 430) {
          // after a lot of trial and error, this works but I cannot explain the math behind this
          return offsetBetweenRealCenter - (430 - center.x);
        } else {
          return offsetBetweenRealCenter;
        }
      }
    }
  }

  // in case any optionals are null return 0.0 so that the map pans to the normal center
  return 0.0;
};

export const getAllMapData = async (nextToken: string | null): Promise<any> => {
  const result = (await API.graphql({
    query: listMapAggregations,
    variables: { limit: 1000, nextToken },
    authMode: "API_KEY",
  })) as { data?: ListMapAggregationsQuery; errors: any[] };

  if (result.data && result.data !== null && result.data.listMapAggregations) {
    let mapData = result.data.listMapAggregations.items;
    if (result.data.listMapAggregations.nextToken) {
      return mapData.concat(
        await getAllMapData(result.data.listMapAggregations.nextToken)
      );
    } else {
      return mapData;
    }
  }
};

export const objectifyMapData = (mapData: any[]) => {
  const mapDataObject: { [key: string]: any } = {
    county: {},
    state: {},
  };
  mapData.map((data) => {
    if (data.level === "county") {
      mapDataObject.county[`${data.level}#${data.lat}#${data.long}`] = data;
    } else {
      mapDataObject.state[`${data.level}#${data.lat}#${data.long}`] = data;
    }
  });

  return mapDataObject;
};

export const calculateRadius = (
  data: any,
  total: number,
  type: "totalLongCovid" | "totalCovid",
  stateOrCounty: string,
  realOrMock: RealOrMock
): number | null => {
  let ratio: number;
  if (total > 0) {
    if (type == "totalLongCovid") {
      ratio = data.longCovid / total;
    } else {
      ratio = data.covidCount / total;
    }
  } else {
    return null;
  }
  if (ratio == 0) {
    return null;
  }

  if (stateOrCounty === "state") {
    const minRadius = 40000;
    const maxRadius = 100000;
    return realOrMock === RealOrMock.MOCK
      ? ratio * maxRadius * 10
      : minRadius + ratio * (maxRadius - minRadius);
  } else {
    const minRadius = 10000;
    const maxRadius = 30000;
    return realOrMock === RealOrMock.MOCK
      ? ratio * maxRadius * 120
      :minRadius + ratio * (maxRadius - minRadius);
  }
};

export const markerColor = (type: "totalCovid" | "totalLongCovid") => {
  switch (type) {
    case "totalCovid":
      return "#38A169";
    case "totalLongCovid":
      return "#68ACE5";
  }
};

export const markerHoverColor = (type: "totalCovid" | "totalLongCovid") => {
  switch (type) {
    case "totalCovid":
      return "#276749";
    case "totalLongCovid":
      return "#227bc5";
  }
};

export const onUpdateMapDataCust = /* GraphQL */ `
  subscription OnUpdateMapAggregation($filter: ModelSubscriptionMapAggregationFilterInput) {
    onUpdateMapAggregation(filter: $filter) {
      id
      level
      name
      stateAbbrev
      lat
      long
      aggregationType
      covidCount
      longCovid
      phq8AboveTen
      recoveredCount
      selfReportedLongCovid
      longCovidOverFourWeeks
      longCovidOverTwelveWeeks
      topMedicalCondition
      totalFullEntries
    }
  }
`;

export const onCreateMapDataCust = /* GraphQL */ `
  subscription OnCreateMapAggregation($filter: ModelSubscriptionMapAggregationFilterInput) {
    onCreateMapAggregation(filter: $filter) {
      id
      level
      name
      stateAbbrev
      lat
      long
      aggregationType
      covidCount
      longCovid
      phq8AboveTen
      recoveredCount
      selfReportedLongCovid
      longCovidOverFourWeeks
      longCovidOverTwelveWeeks
      topMedicalCondition
      totalFullEntries
    }
  }
`;
