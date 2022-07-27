"use strict";
exports.__esModule = true;
exports.Marker = void 0;
var react_1 = require("react");
exports.Marker = function (options) {
    var _a = react_1["default"].useState(), marker = _a[0], setMarker = _a[1];
    react_1.useEffect(function () {
        if (!marker) {
            var circle = new google.maps.Circle({
                // radius: 10000,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
            });
            setMarker(circle);
        }
        return function () {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);
    react_1.useEffect(function () {
        // console.log(options);
        if (marker) {
            marker.setOptions(options);
            var contentString = (options.level === 'state') ?
                '<h1 style = "font-weight: bold">' + options.name + '</h1>' +
                    '<p> Total Long Covid Cases: ' + options.covidSummary.totalLongCovidCases + '</p>' +
                    '<p> Percentage of Long Covid Recoveries: ' + options.covidSummary.perPeopleRecoveredLongCovid + '</p>' +
                    '<p> Percentage of Reported Long Covid Cases: ' + options.covidSummary.perReportedLongCovidCase + '</p>' :
                '<h1 style = "font-weight: bold">' + options.name + ', ' + options.state + '</h1>' +
                    '<p> Total Long Covid Cases: ' + options.covidSummary.totalLongCovidCases + '</p>' +
                    '<p> Percentage of Long Covid Recoveries: ' + options.covidSummary.perPeopleRecoveredLongCovid + '</p>' +
                    '<p> Percentage of Reported Long Covid Cases: ' + options.covidSummary.perReportedLongCovidCase + '</p>';
            var infowindow_1 = new google.maps.InfoWindow({
                content: contentString,
                pixelOffset: new google.maps.Size(210, 80),
                maxWidth: 300
            });
            google.maps.event.addListener(marker, 'mouseover', function () {
                infowindow_1.setPosition(marker.getCenter());
                infowindow_1.open({
                    anchor: marker,
                    map: options.map,
                    shouldFocus: false
                });
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
                infowindow_1.close();
            });
        }
    }, [marker, options]);
    return null;
};
