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
exports.Search = function () {
    var height = hooks_1.useAppSelector(viewportSlice_1.selectHeight);
    var _a = react_1.useDisclosure(), isOpen = _a.isOpen, onToggle = _a.onToggle;
    return (react_2["default"].createElement(react_1.Flex, { className: Header_module_css_1["default"].leftHeaderStack, align: "center", gap: 3, boxShadow: "xl" },
        react_2["default"].createElement(react_1.IconButton
        // colorScheme='blue'
        , { "aria-label": 'Search database', bg: "hopkinsBlue.100", color: "hopkinsBlue.600", icon: react_2["default"].createElement(icons_2.HamburgerIcon, null), onClick: onToggle }),
        react_2["default"].createElement(react_1.Slide, { direction: "left", "in": isOpen, style: {
                minWidth: "410px",
                width: "35%",
                position: "absolute",
                top: "100px",
                left: "0px",
                height: height - 200
            } },
            react_2["default"].createElement(react_1.Box, { bg: 'white', rounded: 'md', shadow: 'md' },
                react_2["default"].createElement(react_1.CloseButton, { size: "md", bgColor: "hopkinsBlue.100", color: "hopkinsBlue.600", onClick: onToggle }),
                react_2["default"].createElement(react_1.Box, { overflowY: "auto", p: '40px', color: 'white', mt: '4', bg: 'white', rounded: 'md', shadow: 'md', height: height - 200 },
                    react_2["default"].createElement(react_1.Image, { src: '/jhu_logo.jpg', alt: 'Dan Abramov' }),
                    react_2["default"].createElement(react_1.Text, { fontSize: 'sm', color: "black", fontWeight: "bold" }, "Johns Hopkins experts in global public health, infectious disease, and emergency preparedness have been at the forefront of the international response to COVID-19."),
                    react_2["default"].createElement("br", null),
                    react_2["default"].createElement(react_1.Text, { fontSize: 'sm', color: "black" }, "This website is a resource to help advance the understanding of the virus, inform the public, and brief policymakers in order to guide a response, improve care, and save lives."),
                    react_2["default"].createElement("br", null),
                    react_2["default"].createElement(react_1.Text, { fontSize: 'sm', color: "black" }, "We value your privacy for any and all information you chose to share through this website. Please see our Terms of Use, and to know how we use your personal data, please see our Privacy Policy"),
                    react_2["default"].createElement("br", null),
                    react_2["default"].createElement(react_1.Text, { fontSize: 'sm', color: "black" },
                        "Privacy Statement ",
                        react_2["default"].createElement("br", null),
                        "JHU.edu Copyright \u00A9 2022 by Johns Hopkins University & Medicine. All rights reserved.")))),
        react_2["default"].createElement(react_1.Box, { flex: 1 },
            react_2["default"].createElement(react_1.Input, { variant: "unstyled", placeholder: "Search for an address", className: Header_module_css_1["default"].search })),
        react_2["default"].createElement(react_1.Box, null,
            react_2["default"].createElement(react_1.IconButton, { "aria-label": "Search address", icon: react_2["default"].createElement(icons_1.Search2Icon, null), borderRadius: "50%", bg: "hopkinsBlue.100", color: "hopkinsBlue.600" }))));
};
