"use strict";
exports.__esModule = true;
exports.Search = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var Header_module_css_1 = require("../../styles/Header.module.css");
var icons_1 = require("@chakra-ui/icons");
var icons_2 = require("@chakra-ui/icons");
var viewportSlice_1 = require("../../redux/slices/viewportSlice");
var hooks_1 = require("../../redux/hooks");
var md_1 = require("react-icons/md");
var im_1 = require("react-icons/im");
exports.Search = function () {
    var height = hooks_1.useAppSelector(viewportSlice_1.selectHeight);
    var _a = react_1.useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    // let isOpen = false;
    return (react_2["default"].createElement(react_1.Flex, { className: Header_module_css_1["default"].leftHeaderStack, align: "center", gap: 3, boxShadow: "xl" },
        react_2["default"].createElement(react_1.Menu, { closeOnBlur: false },
            react_2["default"].createElement(react_1.MenuButton, { as: react_1.IconButton, "aria-label": 'Options', icon: react_2["default"].createElement(icons_2.HamburgerIcon, null), variant: 'outline' }),
            react_2["default"].createElement(react_1.MenuList, { style: {
                    minWidth: "250px",
                    width: "15%"
                } },
                react_2["default"].createElement(react_1.Box, { className: Header_module_css_1["default"].Image },
                    react_2["default"].createElement(react_1.Image, { src: '/jhu_logo.jpg' }),
                    react_2["default"].createElement(react_1.Text, { fontSize: 'sm', color: "black" },
                        react_2["default"].createElement("strong", null, "JHU.edu Copyright \u00A9 2022 by Johns Hopkins University & Medicine. All rights reserved."),
                        react_2["default"].createElement("br", null),
                        "Johns Hopkins experts in global public health, infectious disease, and emergency preparedness have been at the forefront of the international response to COVID-19. Privacy has been at the forefront of our work."),
                    react_2["default"].createElement(react_1.Button, { leftIcon: react_2["default"].createElement(react_1.Icon, { as: md_1.MdOutlinePrivacyTip }), variant: "ghost", justifyContent: "flex-start", onClick: onOpen, style: {
                            width: "100%"
                        } }, "Privacy Statement"),
                    react_2["default"].createElement(react_1.Modal, { isOpen: isOpen, onClose: onClose },
                        react_2["default"].createElement(react_1.ModalOverlay, null),
                        react_2["default"].createElement(react_1.ModalContent, null,
                            react_2["default"].createElement(react_1.ModalHeader, null, "Privacy Stuff"),
                            react_2["default"].createElement(react_1.ModalCloseButton, null),
                            react_2["default"].createElement(react_1.ModalBody, null))),
                    react_2["default"].createElement(react_1.Button, { leftIcon: react_2["default"].createElement(react_1.Icon, { as: im_1.ImNewspaper }), variant: "ghost", justifyContent: "flex-start", onClick: onOpen, style: {
                            width: "100%"
                        } }, "Legal Statement"),
                    react_2["default"].createElement(react_1.Modal, { isOpen: isOpen, onClose: onClose },
                        react_2["default"].createElement(react_1.ModalOverlay, null),
                        react_2["default"].createElement(react_1.ModalContent, null,
                            react_2["default"].createElement(react_1.ModalHeader, null, "Legal Stuff"),
                            react_2["default"].createElement(react_1.ModalCloseButton, null),
                            react_2["default"].createElement(react_1.ModalBody, null, "\"Hey\""))),
                    react_2["default"].createElement(react_1.Button, { leftIcon: react_2["default"].createElement(react_1.Icon, { as: md_1.MdChecklist }), variant: "ghost", justifyContent: "flex-start", onClick: onOpen, style: {
                            width: "100%"
                        } }, "Terms of Service"),
                    react_2["default"].createElement(react_1.Modal, { isOpen: isOpen, onClose: onClose },
                        react_2["default"].createElement(react_1.ModalOverlay, null),
                        react_2["default"].createElement(react_1.ModalContent, null,
                            react_2["default"].createElement(react_1.ModalHeader, null, "Terms of Service Stuff"),
                            react_2["default"].createElement(react_1.ModalCloseButton, null),
                            react_2["default"].createElement(react_1.ModalBody, null, "\"Hey\"")))))),
        react_2["default"].createElement(react_1.Box, { flex: 1 },
            react_2["default"].createElement(react_1.Input, { variant: "unstyled", placeholder: "Search for an address", className: Header_module_css_1["default"].search })),
        react_2["default"].createElement(react_1.Box, null,
            react_2["default"].createElement(react_1.IconButton, { "aria-label": "Search address", icon: react_2["default"].createElement(icons_1.Search2Icon, null), borderRadius: "50%", bg: "hopkinsBlue.100", color: "hopkinsBlue.600" }))));
};
