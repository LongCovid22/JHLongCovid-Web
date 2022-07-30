"use strict";
exports.__esModule = true;
exports.Identifiers = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var hooks_1 = require("../../redux/hooks");
var surveySlice_1 = require("../../redux/slices/surveySlice");
var react_3 = require("@chakra-ui/react");
var react_4 = require("react");
exports.Identifiers = function (props) {
    var dispatch = hooks_1.useAppDispatch();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (react_4["default"].createElement(react_4["default"].Fragment, null,
        react_4["default"].createElement(react_1.ModalContent, { h: '700px' },
            react_4["default"].createElement(react_1.ModalHeader, null, "Profile"),
            react_4["default"].createElement(react_1.ModalCloseButton, null),
            react_4["default"].createElement(react_1.ModalBody, null,
                react_4["default"].createElement(react_2.FormControl, null,
                    react_4["default"].createElement(react_3.Flex, null,
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '40%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "First Name"),
                            react_4["default"].createElement(react_1.Input, null)),
                        react_4["default"].createElement(react_3.Spacer, null),
                        react_4["default"].createElement(react_3.Box, { p: '1', w: '40%' },
                            react_4["default"].createElement(react_2.FormLabel, null, "Last Name"),
                            react_4["default"].createElement(react_1.Input, null))),
                    react_4["default"].createElement(react_3.Box, { p: '1', w: '40%' },
                        react_4["default"].createElement(react_2.FormLabel, null, "Zip Code"),
                        react_4["default"].createElement(react_1.Input, null)))),
            react_4["default"].createElement(react_1.ModalFooter, null,
                react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3, onClick: function () { return dispatch(surveySlice_1.decrementProgress()); } }, "Prev"),
                react_4["default"].createElement(react_1.Button, { colorScheme: 'blue', mr: 3, onClick: function () { return dispatch(surveySlice_1.incrementProgress()); } }, "Next")))));
};
