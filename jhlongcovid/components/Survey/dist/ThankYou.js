"use strict";
exports.__esModule = true;
exports.ThankYou = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
exports.ThankYou = function (props) {
    /*
        educ	Please select the highest level of education you have completed.
        height	Please enter your height.
        weight	Please enter your weight.
        race	Please select the race(s) you most identify with.
        hisp	Are you of Hispanic, Latino, or Spanish origin?
        birthday	What year were you born?
    */
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.Modal, { isOpen: props.isOpen, onClose: props.onClose },
            react_2["default"].createElement(react_1.ModalOverlay, null),
            react_2["default"].createElement(react_1.ModalContent, null,
                react_2["default"].createElement(react_1.ModalHeader, null, "Thank you for your response!"),
                react_2["default"].createElement(react_1.ModalCloseButton, null),
                react_2["default"].createElement(react_1.ModalBody, null, "For any questions on this questionnaire, please contact the study team at ahassoo1@jhu.edu or (XXX) XXX-XXXX. \\n This study also involves optional follow-ups regarding your past exposure with COVID-19. If you choose to participate in this part of the study, you will be able to cancel your participation at any time."),
                react_2["default"].createElement(react_1.ModalFooter, null,
                    "Would you like to follow up?",
                    react_2["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3 }, "Yes"),
                    react_2["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3 }, "No"))))));
};
