"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var mapStyle_1 = require("../theme/mapStyle");
var hooks_1 = require("../redux/hooks");
var zoomSlice_1 = require("../features/zoom/zoomSlice");
var mockDataTwo_1 = require("../util/mockDataTwo");
var readXlsxFile = require('read-excel-file/node');
var Map = function (_a) {
    var children = _a.children, style = _a.style, options = __rest(_a, ["children", "style"]);
    var mapRef = react_1.useRef(null);
    var _b = react_1.useState(), map = _b[0], setMap = _b[1];
    var _c = react_1.useState([]), markers = _c[0], setMarkers = _c[1];
    var dispatch = hooks_1.useAppDispatch();
    var zoomNum = hooks_1.useAppSelector(zoomSlice_1.selectZoom);
    var citymap = {
        chicago: {
            center: { lat: 41.878, lng: -87.629 },
            population: 2714856
        },
        newyork: {
            center: { lat: 40.714, lng: -74.005 },
            population: 8405837
        },
        losangeles: {
            center: { lat: 34.052, lng: -118.243 },
            population: 3857799
        },
        vancouver: {
            center: { lat: 49.25, lng: -123.1 },
            population: 603502
        }
    };
    react_1.useEffect(function () {
        var _a;
        // console.log(read());
        var county_data, state_data;
        _a = mockDataTwo_1.read(), county_data = _a[0], state_data = _a[1];
        setMarkers(county_data);
        if (mapRef.current && !map) {
            var newMap_1 = new window.google.maps.Map(mapRef.current, {
                center: { lat: 39.8283, lng: -98.5795 },
                zoom: zoomNum,
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                fullscreenControl: false,
                styles: mapStyle_1.mapStyle,
                disableDefaultUI: true
            });
            setMap(newMap_1);
            var uluru = { lat: -25.363, lng: 131.044 };
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                '<div id="bodyContent">' +
                "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
                "sandstone rock formation in the southern part of the " +
                "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
                "south west of the nearest large town, Alice Springs; 450&#160;km " +
                "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
                "features of the Uluru - Kata Tjuta National Park. Uluru is " +
                "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
                "Aboriginal people of the area. It has many springs, waterholes, " +
                "rock caves and ancient paintings. Uluru is listed as a World " +
                "Heritage Site.</p>" +
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
                "(last visited June 22, 2009).</p>" +
                "</div>" +
                "</div>";
            var infowindow_1 = new google.maps.InfoWindow({
                content: contentString,
                //6 -> 210, 7 -> 250
                pixelOffset: new google.maps.Size(210, 150),
                maxWidth: 300
            });
            var marker_1 = new google.maps.Circle({
                center: uluru,
                map: newMap_1,
                radius: 100000
                // title: "Uluru (Ayers Rock)",
            });
            google.maps.event.addListener(marker_1, 'mouseover', function () {
                infowindow_1.setPosition(marker_1.getCenter());
                infowindow_1.open({
                    anchor: marker_1,
                    map: newMap_1,
                    shouldFocus: false
                });
            });
            google.maps.event.addListener(marker_1, 'mouseout', function () {
                infowindow_1.close();
            });
            newMap_1.addListener("center_changed", function () {
                // 3 seconds after the center of the map has changed, pan back to the
                // marker.
                // console.log(newMap.getCenter()?.lat());
                // console.log(newMap.getCenter()?.lng());
            });
            newMap_1.addListener("zoom_changed", function () {
                dispatch(zoomSlice_1.setByAmount(Number(newMap_1.getZoom())));
                // console.log(zoomNum);
            });
        }
    }, [mapRef, map]);
    return (React.createElement("div", { id: "map", ref: mapRef, style: style }, react_1.Children.map(children, function (child) {
        if (react_1.isValidElement(child)) {
            // set the map prop on the child component
            return react_1.cloneElement(child, { map: map });
        }
    })));
};
exports["default"] = Map;
