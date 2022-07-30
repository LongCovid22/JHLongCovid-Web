"use strict";
exports.__esModule = true;
exports.Demographics = void 0;
var react_1 = require("@chakra-ui/react");
var hooks_1 = require("../../redux/hooks");
var surveySlice_1 = require("../../redux/slices/surveySlice");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var react_4 = require("react");
exports.Demographics = function (props) {
    var dispatch = hooks_1.useAppDispatch();
    /*
        educ	Please select the highest level of education you have completed.
        height	Please enter your height.
        weight	Please enter your weight.
        race	Please select the race(s) you most identify with.
        hisp	Are you of Hispanic, Latino, or Spanish origin?
        birthday	What year were you born?
    */
    return (react_4["default"].createElement(react_4["default"].Fragment, null,
        react_4["default"].createElement(react_1.ModalContent, { h: '700px' },
            react_4["default"].createElement(react_1.ModalHeader, null, "Demographics"),
            react_4["default"].createElement(react_1.ModalCloseButton, null),
            react_4["default"].createElement(react_1.ModalBody, null,
                react_4["default"].createElement(react_2.FormControl, null,
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "Highest Level of Education"),
                        react_4["default"].createElement(react_1.Select, null,
                            react_4["default"].createElement("option", null, "High School or Below"),
                            react_4["default"].createElement("option", null, "Undergraduate"),
                            react_4["default"].createElement("option", null, "Graduate/Masters"),
                            react_4["default"].createElement("option", null, "Doctoral"))),
                    react_4["default"].createElement(react_3.Flex, null,
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '40%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Height"),
                            react_4["default"].createElement(react_1.Input, null)),
                        react_4["default"].createElement(react_3.Spacer, null),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '40%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Weight"),
                            react_4["default"].createElement(react_1.Input, null))),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "Select the race you most identify with"),
                        react_4["default"].createElement(react_1.Select, null,
                            react_4["default"].createElement("option", null, "White"),
                            react_4["default"].createElement("option", null, "Black or African American"),
                            react_4["default"].createElement("option", null, "Asian"),
                            react_4["default"].createElement("option", null, "American Indian and Alaska Native"),
                            react_4["default"].createElement("option", null, "Native Hawaiian and Other Pacific Islander"),
                            react_4["default"].createElement("option", null, "Other"),
                            react_4["default"].createElement("option", null, "Choose to not identify"))),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "Are you of Hispanic, Latino, or Spanish origin?"),
                        react_4["default"].createElement(react_1.Select, null,
                            react_4["default"].createElement("option", null, "Yes"),
                            react_4["default"].createElement("option", null, "No"),
                            react_4["default"].createElement("option", null, "Choose to not identify"))),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "What year were you born in?"),
                        react_4["default"].createElement(react_1.Input, null)))),
            react_4["default"].createElement(react_1.ModalFooter, null,
                react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3, onClick: function () { return dispatch(surveySlice_1.decrementProgress()); } }, "Prev"),
                react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3, onClick: function () { return dispatch(surveySlice_1.incrementProgress()); } }, "Next")))));
};
