import React, { useEffect } from "react";
import { calculatePanelOffset } from "./Map/mapFunctions";
import { useAppDispatch } from "../redux/hooks";
import { setLeftSidePanelPres } from "../redux/slices/presentationSlice";
import { InfoPanelMetrics } from "./Metrics/InfoPanelMetrics";
import { Box } from "@chakra-ui/react";

interface CircleProps extends google.maps.CircleOptions {
  data: any;
  setSelectedData: (data: any) => void;
}

export const Marker: React.FC<CircleProps> = ({
  data,
  setSelectedData,
  ...options
}) => {
  const [marker, setMarker] = React.useState<google.maps.Circle>();
  const [infoWindow, setInfowWindow] = React.useState<google.maps.InfoWindow>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!marker) {
      const circle = new google.maps.Circle({
        // radius: 10000,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });

      setMarker(circle);

      const contentString =
        data.level === "state"
          ? '<h1 style = "font-weight: bold">' +
            data.name +
            "</h1>" +
            "<p> Total Long Covid Cases: " +
            data.covidSummary.totalLongCovidCases +
            "</p>" +
            "<p> Percentage of Long Covid Recoveries: " +
            data.covidSummary.perPeopleRecoveredLongCovid +
            "</p>" +
            "<p> Percentage of Reported Long Covid Cases: " +
            data.covidSummary.perReportedLongCovidCase +
            "</p>"
          : '<h1 style = "font-weight: bold">' +
            data.name +
            ", " +
            data.stateAbbrev +
            "</h1>" +
            "<p> Total Long Covid Cases: " +
            data.covidSummary.totalLongCovidCases +
            "</p>" +
            "<p> Percentage of Long Covid Recoveries: " +
            data.covidSummary.perPeopleRecoveredLongCovid +
            "</p>" +
            "<p> Percentage of Reported Long Covid Cases: " +
            data.covidSummary.perReportedLongCovidCase +
            "</p>";

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        pixelOffset: new google.maps.Size(0, 180),
        maxWidth: 300,
        disableAutoPan: true,
      });

      setInfowWindow(infowindow);
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    // console.log(options);
    if (marker) {
      marker.setOptions(options);

      google.maps.event.addListener(marker, "mouseover", function () {
        if (infoWindow !== undefined) {
          infoWindow.setPosition(marker.getCenter());
          infoWindow.open({
            anchor: marker,
            map: options.map,
            shouldFocus: false,
            // pixelOffset: new google.maps.size(250, 150)
          });
        }
      });

      // Pan to marker on marker click
      google.maps.event.addListener(marker, "click", function () {
        if (options.map !== null && options.map !== undefined) {
          const markerPosition =
            marker.getCenter() ?? new google.maps.LatLng(0.0, 0.0);

          setSelectedData(data);
          dispatch(setLeftSidePanelPres(true));
          options.map.panTo(markerPosition);
          options.map.panBy(calculatePanelOffset(options.map), 0);
        }
      });

      google.maps.event.addListener(marker, "mouseout", function () {
        if (infoWindow !== undefined) {
          infoWindow.close();
        }
      });
    }
  }, [marker, options]);

  return null;
};
