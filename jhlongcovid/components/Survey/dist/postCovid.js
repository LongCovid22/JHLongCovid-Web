"use strict";
exports.__esModule = true;
exports.PostCovid = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var react_4 = require("react");
exports.PostCovid = function (props) {
    /*
        educ	Please select the highest level of education you have completed.
        height	Please enter your height.
        weight	Please enter your weight.
        race	Please select the race(s) you most identify with.
        hisp	Are you of Hispanic, Latino, or Spanish origin?
        birthday	What year were you born?
    */
    return (react_4["default"].createElement(react_4["default"].Fragment, null,
        react_4["default"].createElement(react_1.Modal, { isOpen: props.isOpen, onClose: props.onClose },
            react_4["default"].createElement(react_1.ModalOverlay, null),
            react_4["default"].createElement(react_1.ModalContent, null,
                react_4["default"].createElement(react_1.ModalHeader, null, "Post-Covid Symptoms"),
                react_4["default"].createElement(react_1.ModalCloseButton, null),
                react_4["default"].createElement(react_1.ModalBody, null,
                    react_4["default"].createElement(react_2.FormControl, null,
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Did you experience any symptoms relating to your COVID Infection after you tested negative for COVID?"),
                            react_4["default"].createElement(react_1.Select, null,
                                react_4["default"].createElement("option", null, "Yes"),
                                react_4["default"].createElement("option", null, "No"))),
                        react_4["default"].createElement(react_2.FormLabel, null, "Which of the following symptoms did you experinece after you recovery from COVID-19 and as a result of your COVID-19?"),
                        react_4["default"].createElement(react_1.Checkbox, null, "General Symptoms"),
                        react_4["default"].createElement(react_1.Checkbox, null, "Respiratory and heart symptoms"),
                        react_4["default"].createElement(react_1.Checkbox, null, "Neurological symptoms"),
                        react_4["default"].createElement(react_1.Checkbox, null, "Digestive symptoms"),
                        react_4["default"].createElement(react_1.Checkbox, null, "Other Post-COVID symptoms"))),
                react_4["default"].createElement(react_1.ModalFooter, null,
                    react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3 }, "Next"))))));
};
