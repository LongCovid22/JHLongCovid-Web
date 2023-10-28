import React, { useEffect } from "react";
import {
  calculatePanelOffset,
  calculateRadius,
  markerColor,
  markerHoverColor,
} from "./Map/mapFunctions";
import { useAppDispatch } from "../redux/hooks";
import {
  selectLeftSidePanelPres,
  setLeftSidePanelPres,
} from "../redux/slices/presentationSlice";
import { useAppSelector } from "../redux/hooks";
import { ConsoleLogger } from "@aws-amplify/core";
import { RealOrMock } from "../pages";

interface CircleProps extends google.maps.CircleOptions {
  data: any;
  type: "totalLongCovid" | "totalCovid";
  markerData: any;
  total: number;
  realOrMock: RealOrMock;
  setMarkerData: (data: any) => void;
  setSelectedData: (data: any) => void;
}

function addCommasToNumberString(number: number | undefined): string {
  if (number) {
    const numberString = number.toString();
    // Reverse the input string
    const reversedString = numberString.split("").reverse().join("");

    // Add commas every 3 characters
    const stringWithCommas = reversedString.replace(/(\d{3})(?=\d)/g, "$1,");

    // Reverse the result and return it
    return stringWithCommas.split("").reverse().join("");
  }

  return "0";
}

export const Marker: React.FC<CircleProps> = ({
  data,
  type,
  markerData,
  total,
  realOrMock,
  setMarkerData,
  setSelectedData,
  ...options
}) => {
  const [marker, setMarker] = React.useState<google.maps.Circle>();
  const [infoWindow, setInfowWindow] = React.useState<google.maps.InfoWindow>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!marker) {
      // data.totalFullEntries >= 10 &&
      const markColor = markerColor(type);
      const circle = new google.maps.Circle({
        radius:
          total > 0
            ? calculateRadius(data, total, type, data.level, realOrMock)
            : 50000,
        center: { lat: data.lat, lng: data.long },
        strokeColor: markColor,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: markColor,
        fillOpacity: 0.35,
      });

      setMarker(circle);

      const contentString = createInfoPanelContentString(data);

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        pixelOffset: new google.maps.Size(0, -20),
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
    if (marker) {
      marker.setOptions(options);
      if (infoWindow) {
        if (total && data) {
          let radius: number;
          // if (data.totalFullEntries >= 10) {
          //   radius = calculateRadius(data, total, type, data.level, realOrMock);
          // } else {
          //   radius = 50000;
          // }
          radius = calculateRadius(data, total, type, data.level, realOrMock);

          marker.setRadius(radius);
        }

        if (data) {
          const markColor = markerColor(type);
          marker.setOptions({
            strokeColor: markColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: markColor,
            fillOpacity: 0.35,
          });
        }
        infoWindow.setContent(createInfoPanelContentString(data));
      }

      google.maps.event.addListener(marker, "mouseover", function () {
        const markHoverColor = markerHoverColor(type);
        marker.setOptions({
          // radius: 10000,
          strokeColor: markHoverColor,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: markHoverColor,
          fillOpacity: 0.35,
        });

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

      google.maps.event.addListener(marker, "mouseout", function () {
        const markColor = markerColor(type);
        marker.setOptions({
          // radius: 10000,
          strokeColor: markColor,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: markColor,
          fillOpacity: 0.35,
        });
        if (infoWindow !== undefined) {
          infoWindow.close();
        }
      });

      // Pan to marker on marker click
      google.maps.event.addListener(marker, "click", async function () {
        if (options.map !== null && options.map !== undefined) {
          // if (data.totalFullEntries >= 10) {
          const markerPosition =
            marker.getCenter() ?? new google.maps.LatLng(0.0, 0.0);

          setSelectedData(data);
          dispatch(setLeftSidePanelPres(true));
          const markHoverColor = markerHoverColor(type);
          marker.setOptions({
            // radius: 10000,
            strokeColor: markHoverColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: markHoverColor,
            fillOpacity: 0.35,
          });

          if (data.level == "county") {
            options.map.setZoom(11);
          } else {
            options.map.setZoom(6);
          }

          options.map.panTo(markerPosition);
          options.map.panBy(calculatePanelOffset(options.map), 0);
          // }
        }

        if (infoWindow) {
          infoWindow.setPosition(marker.getCenter());
          infoWindow.open({
            anchor: marker,
            map: options.map,
            shouldFocus: false,
            // pixelOffset: new google.maps.size(250, 150)
          });
          setTimeout(() => {
            if (infoWindow !== undefined) {
              infoWindow.close();
            }
          }, 4000);
        }
      });

      // google.maps.event.addListener(marker, "mouseout", function () {
      //   if (infoWindow !== undefined) {
      //     infoWindow.close();
      //   }
      // });

      let new_marker_data = markerData;

      if (data.level == "county") {
        new_marker_data[data.name + " County, " + data.stateAbbrev + ", USA"] =
          {
            marker: marker,
            data: data,
          };
      } else {
        new_marker_data[data.name] = {
          marker: marker,
          data: data,
        };
      }

      setMarkerData(new_marker_data);
    }
  }, [marker, options, data]);

  return null;
};

const createInfoPanelContentString = (data: any): string => {
  const totalEntries = data.totalFullEntries;

  // if (totalEntries >= 10) {
  // Covid counts
  const covidTotal = data.covidCount !== null ? data.covidCount : 0;
  const covidPercent =
    totalEntries > 0
      ? Math.round((covidTotal / data.totalFullEntries) * 100)
      : 0;
  const covidTotalString = addCommasToNumberString(covidTotal);

  // Recovery counts
  const recoveryCount = data.recoveredCount !== null ? data.recoveredCount : 0;
  let recoveryPercent = Math.round((recoveryCount / covidTotal) * 100);
  if (isNaN(recoveryPercent)) {
    recoveryPercent = 0;
  }
  const recoveryCountString = addCommasToNumberString(recoveryCount);

  // Symptoms over 12 weeks
  const symptomsOverTwelve =
    data.longCovidOverTwelveWeeks !== null ? data.longCovidOverTwelveWeeks : 0;
  let symptomsOverTwelvePercent = Math.round(
    (symptomsOverTwelve / covidTotal) * 100
  );
  if (isNaN(symptomsOverTwelvePercent)) {
    symptomsOverTwelvePercent = 0;
  }
  const symptomsOverTwelveString = addCommasToNumberString(symptomsOverTwelve);

  const contentString =
    '<div style="padding: 10px">' +
    `<h1 style = "font-weight: bold; font-size: 18px; font-family: 'Gentona'">${
      data.level === "state" ? data.name : data.name + ", " + data.stateAbbrev
    }</h1>` +
    "<span>" +
    "<h5 style=\"margin-top: 10px; font-weight: 400; font-family: 'Gentona'\"> Total Participant Entries</h5>" +
    `<h5 style="margin-top: 2px; font-weight:500; font-size: 20px; font-family: \'Gentona\'">${addCommasToNumberString(
      totalEntries
    )}</h5>` +
    "</span>" +
    "<span>" +
    "<h5 style=\"margin-top: 10px; font-weight: 400; font-family: 'Gentona'\">COVID History</h5>" +
    `<h5 style="margin-top: 2px; font-weight:500; font-size: 20px; font-family: \'Gentona\'">${covidTotalString} (${covidPercent}%)</h5>` +
    "</span>" +
    "<span>" +
    "<h5 style=\"margin-top: 10px; font-weight: 400; font-family: 'Gentona'\">Recovered</h5>" +
    `<h5 style="margin-top: 2px; font-weight:500; font-size: 20px; font-family: \'Gentona\'">${recoveryCountString} (${recoveryPercent}%)</h5>` +
    "</span>" +
    "<span>" +
    "<h5 style=\"margin-top: 10px; font-weight: 400; font-family: 'Gentona'\">Symptoms for >12 weeks</h5>" +
    `<h5 style="margin-top: 2px; font-weight:500; font-size: 20px; font-family: \'Gentona\'">${symptomsOverTwelveString} (${symptomsOverTwelvePercent}%)</h5>` +
    "</span>" +
    "</div>";
  return contentString;
  // } else {
  //   const contentString =
  //     '<div style="padding: 10px">' +
  //     `<h1 style = "font-weight: bold; font-size: 18px; font-family: 'Gentona'">${
  //       data.level === "state" ? data.name : data.name + ", " + data.stateAbbrev
  //     }</h1>` +
  //     "<span>" +
  //     "<h5 style=\"margin-top: 10px; font-weight: 400; font-size: 16px; font-family: 'Gentona'\"> Waiting on more data for<br>privacy reasons!</h5>";
  //   return contentString;
  // }
};
