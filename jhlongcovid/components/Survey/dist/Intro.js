"use strict";
exports.__esModule = true;
exports.Intro = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var hooks_1 = require("../../redux/hooks");
var surveySlice_1 = require("../../redux/slices/surveySlice");
exports.Intro = function (props) {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    var dispatch = hooks_1.useAppDispatch();
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.ModalContent, { h: '700px' },
            react_2["default"].createElement(react_1.ModalHeader, null, "Johns Hopkins Long Covid Study"),
            react_2["default"].createElement(react_1.ModalCloseButton, null),
            react_2["default"].createElement(react_1.ModalBody, null, "Welcome to the Johns Hopkins Bloomberg School of Public Health Long-COVID questionnaire. This questionnaire asks you about your exposure to COVID-19 and how that has affected your life beyond your infection. Please know that participation in this survey is optional, and that while responses will be shared on the aggregate, individual responses will be free of all personal identifiers. With any questions, please email the study administrators at ahassoo1@jhu.edu or call (XXX) XXX-XXXX."),
            react_2["default"].createElement(react_1.ModalFooter, null,
                react_2["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3, onClick: function () { return dispatch(surveySlice_1.incrementProgress()); } }, "Next")))));
};
