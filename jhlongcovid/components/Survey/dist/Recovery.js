"use strict";
exports.__esModule = true;
exports.Recovery = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var react_4 = require("react");
exports.Recovery = function (props) {
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
                react_4["default"].createElement(react_1.ModalHeader, null, "COVID or Post-COVID Recovery"),
                react_4["default"].createElement(react_1.ModalCloseButton, null),
                react_4["default"].createElement(react_1.ModalBody, null,
                    "These questions will ask you about your recovery from COVID-19 or the residual effects of your infection.",
                    react_4["default"].createElement(react_2.FormControl, null,
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Since you were infected with COVID - 19, do you think you have returned to your usual state of health?"),
                            react_4["default"].createElement(react_1.Select, null,
                                react_4["default"].createElement("option", null, "Yes"),
                                react_4["default"].createElement("option", null, "No"))),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "At this time, do you think you are still having symptoms that are related to your infection with COVID-19?"),
                            react_4["default"].createElement(react_1.Select, null,
                                react_4["default"].createElement("option", null, "Yes"),
                                react_4["default"].createElement("option", null, "No"))),
                        react_4["default"].createElement(react_1.ModalHeader, null, "Work and Social Adjustment Scale"),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Because of my COVID infection, my ability to work is impaired."),
                            react_4["default"].createElement(react_1.Input, null)),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Because of my COVID infection, my home management (cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired."),
                            react_4["default"].createElement(react_1.Input, null)),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Because of my COVID infection, my social leisure activities (with other people, such as parties, bars, clubs, outings, visits, dating, home entertainment) are impaired."),
                            react_4["default"].createElement(react_1.Input, null)),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Because of my COVID infection, my private leisure activities (done alone, such as reading, gardening, collecting, sewing, walking alone) are impaired."),
                            react_4["default"].createElement(react_1.Input, null)),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '80%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Because of my COVID infection, my ability to form and maintain close relationships with others, including those I live with, is impaired."),
                            react_4["default"].createElement(react_1.Input, null)))),
                react_4["default"].createElement(react_1.ModalFooter, null,
                    react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3 }, "Next"))))));
};
