"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var zoomSlice_1 = require("./slices/zoomSlice");
var presentationSlice_1 = require("./slices/presentationSlice");
var viewportSlice_1 = require("./slices/viewportSlice");
var surveySlice_1 = require("./slices/surveySlice");
var store = toolkit_1.configureStore({
    reducer: {
        zoom: zoomSlice_1["default"],
        presentation: presentationSlice_1["default"],
        viewport: viewportSlice_1["default"],
        survey: surveySlice_1["default"]
    }
});
exports["default"] = store;
