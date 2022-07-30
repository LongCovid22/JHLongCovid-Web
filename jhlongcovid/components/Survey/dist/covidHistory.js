"use strict";
exports.__esModule = true;
exports.CovidHistory = void 0;
var react_1 = require("@chakra-ui/react");
var hooks_1 = require("../../redux/hooks");
var surveySlice_1 = require("../../redux/slices/surveySlice");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var react_4 = require("react");
exports.CovidHistory = function (props) {
    /*
        educ	Please select the highest level of education you have completed.
        height	Please enter your height.
        weight	Please enter your weight.
        race	Please select the race(s) you most identify with.
        hisp	Are you of Hispanic, Latino, or Spanish origin?
        birthday	What year were you born?
    */
    var dispatch = hooks_1.useAppDispatch();
    return (react_4["default"].createElement(react_4["default"].Fragment, null,
        react_4["default"].createElement(react_1.ModalContent, { h: '1000px' },
            react_4["default"].createElement(react_1.ModalHeader, null, "History of COVID-19"),
            react_4["default"].createElement(react_1.ModalCloseButton, null),
            react_4["default"].createElement(react_1.ModalBody, null,
                react_4["default"].createElement(react_2.FormControl, null,
                    "These questions will ask you about your exposure to COVID-19. Please answer them to the best of your ability.",
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "Have you tested postive for COVID - 19?"),
                        react_4["default"].createElement(react_1.Select, null,
                            react_4["default"].createElement("option", null, "Yes"),
                            react_4["default"].createElement("option", null, "No"))),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "How many time have you tested positive for COVID-19?"),
                        react_4["default"].createElement(react_1.Input, null)),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "When was the last time you tested positive for COVID-19?"),
                        react_4["default"].createElement(react_1.Input, null)),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "What symptoms did you have at all exposures?"),
                        react_4["default"].createElement(react_1.Input, null)),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "Did you ever require any treatment from a doctor to help you breathe, such as supplemental oxygen via a face mask, through your nose, or through a breathing tube?"),
                        react_4["default"].createElement(react_1.Select, null,
                            react_4["default"].createElement("option", null, "Yes"),
                            react_4["default"].createElement("option", null, "No"))),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "Did you take any antiviral medicines for COVID-19?"),
                        react_4["default"].createElement(react_1.Select, null,
                            react_4["default"].createElement("option", null, "Yes"),
                            react_4["default"].createElement("option", null, "No"))))),
            react_4["default"].createElement(react_1.ModalFooter, null,
                react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3, onClick: function () { return dispatch(surveySlice_1.decrementProgress()); } }, "Prev"),
                react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3, onClick: function () { return dispatch(surveySlice_1.incrementProgress()); } }, "Next")))));
};
