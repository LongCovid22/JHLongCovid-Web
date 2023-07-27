import React, { useEffect } from "react";
import { calculatePanelOffset } from "./Map/mapFunctions";
import { useAppDispatch } from "../redux/hooks";
import {
  selectLeftSidePanelPres,
  setLeftSidePanelPres,
} from "../redux/slices/presentationSlice";
import { medicalConditionsMap } from "./Survey/surveyFunctions";
import { useAppSelector } from "../redux/hooks";

interface CircleProps extends google.maps.CircleOptions {
  data: any;
  markerData: any;
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

  return "";
}

export const Marker: React.FC<CircleProps> = ({
  data,
  markerData,
  setMarkerData,
  setSelectedData,
  ...options
}) => {
  const presentedSideMenu = useAppSelector(selectLeftSidePanelPres);
  const [marker, setMarker] = React.useState<google.maps.Circle>();
  const [infoWindow, setInfowWindow] = React.useState<google.maps.InfoWindow>();
  const dispatch = useAppDispatch();

  console.log("Redrawing");

  useEffect(() => {
    if (!marker) {
      console.log("use effect 1");
      const circle = new google.maps.Circle({
        // radius: 10000,
        strokeColor: "#68ACE5",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#68ACE5",
        fillOpacity: 0.35,
      });

      setMarker(circle);

      const totalEntries = data.totalFullEntries;

      // Covid counts
      const covidTotal = data.covidCount !== null ? data.covidCount : 0;
      const covidPercent =
        totalEntries > 0
          ? Math.round((covidTotal / data.totalFullEntries) * 100)
          : 0;
      const covidTotalString = addCommasToNumberString(covidTotal);

      // Recovery counts
      const recoveryCount =
        data.recoveredCount !== null ? data.recoveredCount : 0;
      const recoveryPercent = Math.round((recoveryCount / covidTotal) * 100);
      const recoveryCountString = addCommasToNumberString(recoveryCount);

      // Symptoms over 12 weeks
      const symptomsOverTwelve =
        data.longCovidOverTwelveWeeks !== null
          ? data.longCovidOverTwelveWeeks
          : 0;
      const symptomsOverTwelvePercent = Math.round(
        (symptomsOverTwelve / covidTotal) * 100
      );
      const symptomsOverTwelveString =
        addCommasToNumberString(symptomsOverTwelve);

      const contentString =
        '<div style="padding: 10px">' +
        `<h1 style = "font-weight: bold; font-size: 18px; font-family: 'Gentona'">${
          data.level === "state"
            ? data.name
            : data.name + ", " + data.stateAbbrev
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

      google.maps.event.addListener(marker, "mouseover", function () {
        marker.setOptions({
          // radius: 10000,
          strokeColor: "#A6192E",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#A6192E",
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
        marker.setOptions({
          // radius: 10000,
          strokeColor: "#68ACE5",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#68ACE5",
          fillOpacity: 0.35,
        });
        if (infoWindow !== undefined) {
          infoWindow.close();
        }
      });

      // Pan to marker on marker click
      google.maps.event.addListener(marker, "click", async function () {
        if (options.map !== null && options.map !== undefined) {
          const markerPosition =
            marker.getCenter() ?? new google.maps.LatLng(0.0, 0.0);

          setSelectedData(data);
          dispatch(setLeftSidePanelPres(true));

          marker.setOptions({
            // radius: 10000,
            strokeColor: "#A6192E",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#A6192E",
            fillOpacity: 0.35,
          });

          if (data.level == "county") {
            options.map.setZoom(11);
          } else {
            options.map.setZoom(6);
          }

          options.map.panTo(markerPosition);
          options.map.panBy(calculatePanelOffset(options.map), 0);
        }

        if (infoWindow !== undefined) {
          infoWindow.setPosition(marker.getCenter());
          infoWindow.open({
            anchor: marker,
            map: options.map,
            shouldFocus: false,
            // pixelOffset: new google.maps.size(250, 150)
          });
        }

        // setTimeout(() => {
        //   if (infoWindow !== undefined) {
        //     infoWindow.close();
        //   }
        // }, 3000);
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
  }, [marker, options]);

  return null;
};
