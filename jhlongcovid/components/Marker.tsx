import React, { useEffect } from "react";

export const Marker: React.FC<google.maps.CircleOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Circle>();

  
  
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

      const contentString = (options.level === 'state') ?

      '<h1 style = "font-weight: bold">'+  options.name + '</h1>' +
      '<p> Total Long Covid Cases: ' + options.covidSummary.totalLongCovidCases + '</p>' + 
      
      '<p> Percentage of Long Covid Recoveries: ' +options.covidSummary.perPeopleRecoveredLongCovid+ '</p>' + 
      '<p> Percentage of Reported Long Covid Cases: ' +options.covidSummary.perReportedLongCovidCase + '</p>' :

      '<h1 style = "font-weight: bold">'+  options.name + ', ' +  options.state + '</h1>' +
      '<p> Total Long Covid Cases: ' + options.covidSummary.totalLongCovidCases + '</p>' + 
      
      '<p> Percentage of Long Covid Recoveries: ' +options.covidSummary.perPeopleRecoveredLongCovid+ '</p>' + 
      '<p> Percentage of Reported Long Covid Cases: ' +options.covidSummary.perReportedLongCovidCase + '</p>';

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        pixelOffset: new google.maps.Size(210, 80),
        maxWidth: 300
      });

      google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.setPosition(marker.getCenter());
        infowindow.open({
          anchor: marker,
          map: options.map,
          shouldFocus: false,
          // pixelOffset: new google.maps.size(250, 150)
        });
      })
  
      google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
      })

      
    }
  }, [marker, options]);

  return null;
};
