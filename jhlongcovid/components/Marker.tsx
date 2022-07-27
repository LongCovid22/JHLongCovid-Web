import React, { useEffect } from "react";
import { calculatePanelOffset } from "./Map/mapFunctions";
import { useAppDispatch } from "../redux/hooks";
import { setLeftSidePanelPres } from "../redux/slices/presentationSlice";

interface CircleProps extends google.maps.CircleOptions {
  covidSummary: any;
  name: string;
  level: string;
  state: string;
}

export const Marker: React.FC<CircleProps> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Circle>();
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

      const contentString =
        options.level === "state"
          ? '<h1 style = "font-weight: bold">' +
            options.name +
            "</h1>" +
            "<p> Total Long Covid Cases: " +
            options.covidSummary.totalLongCovidCases +
            "</p>" +
            "<p> Percentage of Long Covid Recoveries: " +
            options.covidSummary.perPeopleRecoveredLongCovid +
            "</p>" +
            "<p> Percentage of Reported Long Covid Cases: " +
            options.covidSummary.perReportedLongCovidCase +
            "</p>"
          : '<h1 style = "font-weight: bold">' +
            options.name +
            ", " +
            options.state +
            "</h1>" +
            "<p> Total Long Covid Cases: " +
            options.covidSummary.totalLongCovidCases +
            "</p>" +
            "<p> Percentage of Long Covid Recoveries: " +
            options.covidSummary.perPeopleRecoveredLongCovid +
            "</p>" +
            "<p> Percentage of Reported Long Covid Cases: " +
            options.covidSummary.perReportedLongCovidCase +
            "</p>";

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        pixelOffset: new google.maps.Size(210, 80),
        maxWidth: 300,
        disableAutoPan: true,
      });

      google.maps.event.addListener(marker, "mouseover", function () {
        infowindow.setPosition(marker.getCenter());
        infowindow.open({
          anchor: marker,
          map: options.map,
          shouldFocus: false,
          // pixelOffset: new google.maps.size(250, 150)
        });

        // Pan to marker on marker click
        google.maps.event.addListener(marker, "click", function () {
          if (options.map !== null && options.map !== undefined) {
            const markerPosition =
              marker.getCenter() ?? new google.maps.LatLng(0.0, 0.0);
            options.map.panTo(markerPosition);
            options.map.panBy(calculatePanelOffset(options.map), 0);

            dispatch(setLeftSidePanelPres(true));
          }
        });
      });

      google.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });
    }
  }, [marker, options]);

  return null;
};
