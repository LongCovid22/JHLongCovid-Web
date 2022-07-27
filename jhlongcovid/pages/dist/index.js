"use strict";
exports.__esModule = true;
var Home_module_css_1 = require("../styles/Home.module.css");
var Map_1 = require("../components/Map");
var Header_1 = require("../components/Header/Header");
var Marker_1 = require("../components/Marker");
var hooks_1 = require("../redux/hooks");
var zoomSlice_1 = require("../features/zoom/zoomSlice");
var mockDataTwo_1 = require("../util/mockDataTwo");
var preprocess_1 = require("./preprocess");
var Home = function () {
    var _a;
    var county_data, state_data;
    _a = mockDataTwo_1.read(), county_data = _a[0], state_data = _a[1];
    var zoomNum = hooks_1.useAppSelector(zoomSlice_1.selectZoom);
    //preprocess county vs state data
    //assumption: total of state data = total of county data
    var totalLongCovidCases = preprocess_1.sumUpCases(state_data);
    var markers = county_data;
    if (zoomNum >= 6) {
        markers = county_data;
    }
    else {
        markers = state_data;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: Home_module_css_1["default"].main },
            React.createElement(Map_1["default"], { style: { flexGrow: "1", height: "100vh", width: "100%" } }, markers.map(function (mark) { return (React.createElement(Marker_1.Marker, { center: { lat: mark.lat, lng: mark.long }, radius: (mark.level === 'state') ?
                    (mark.covidSummary.totalLongCovidCases / totalLongCovidCases) * 5000000 :
                    (mark.covidSummary.totalLongCovidCases / totalLongCovidCases) * 10000000, covidSummary: mark.covidSummary, name: mark.name, level: mark.level, state: mark.stateName })); })),
            React.createElement(Header_1.Header, null))));
};
exports["default"] = Home;
