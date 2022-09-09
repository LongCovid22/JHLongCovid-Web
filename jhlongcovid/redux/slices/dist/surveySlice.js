"use strict";
var _a;
exports.__esModule = true;
exports.selectProgress = exports.decrementProgress = exports.incrementProgress = exports.surveySlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    progress: 0
};
exports.surveySlice = toolkit_1.createSlice({
    name: "survey",
    initialState: initialState,
    reducers: {
        incrementProgress: function (state) {
            state.progress = state.progress + 1;
        },
        decrementProgress: function (state) {
            state.progress = state.progress - 1;
        }
    }
});
exports.incrementProgress = (_a = exports.surveySlice.actions, _a.incrementProgress), exports.decrementProgress = _a.decrementProgress;
exports.selectProgress = function (state) { return state.survey.progress; };
exports["default"] = exports.surveySlice.reducer;
