"use strict";
exports.__esModule = true;
exports.ProfileCheckin = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var Header_module_css_1 = require("../../styles/Header.module.css");
var postCovid_1 = require("../Survey/postCovid");
function Survey() {
    var _a = react_1.useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.Button, { flex: 1, borderRadius: "500px", textColor: "white", colorScheme: "hopkinsBlue", onClick: onOpen }, "Contribute"),
        react_2["default"].createElement(postCovid_1.PostCovid, { isOpen: isOpen, onClose: onClose })));
}
exports.ProfileCheckin = function () {
    // return(<BasicUsage />)
    return (react_2["default"].createElement(react_1.Flex, { className: Header_module_css_1["default"].rightHeaderStack, align: "center", gap: 3, boxShadow: "xl" },
        react_2["default"].createElement(Survey, null),
        react_2["default"].createElement(react_1.Avatar, null)));
};
