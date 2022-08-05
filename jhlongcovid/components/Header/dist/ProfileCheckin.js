"use strict";
exports.__esModule = true;
exports.ProfileCheckin = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var Header_module_css_1 = require("../../styles/Header.module.css");
var Intro_1 = require("../Survey/Intro");
var Demographics_1 = require("../Survey/Demographics");
var Identifiers_1 = require("../Survey/Identifiers");
var covidHistory_1 = require("../Survey/covidHistory");
var Recovery_1 = require("../Survey/Recovery");
var PostCovid_1 = require("../Survey/PostCovid");
var VaccinationHistory_1 = require("../Survey/VaccinationHistory");
var ThankYou_1 = require("../Survey/ThankYou");
var hooks_1 = require("../../redux/hooks");
var surveySlice_1 = require("../../redux/slices/surveySlice");
function Survey() {
    var _a = react_1.useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var dispatch = hooks_1.useAppDispatch();
    var number = hooks_1.useAppSelector(surveySlice_1.selectProgress);
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.Button, { flex: 1, borderRadius: "500px", textColor: "white", colorScheme: "hopkinsBlue", onClick: onOpen }, "Contribute"),
        react_2["default"].createElement(react_1.Modal, { isOpen: isOpen, onClose: onClose, isCentered: true, size: "xl" },
            react_2["default"].createElement(react_1.ModalOverlay, null),
            react_2["default"].createElement("div", { style: { display: number === 0 ? "inline" : "none" } },
                react_2["default"].createElement(Intro_1.Intro, null)),
            react_2["default"].createElement("div", { style: { display: number === 1 ? "inline" : "none" } },
                react_2["default"].createElement(Identifiers_1.Identifiers, null)),
            react_2["default"].createElement("div", { style: { display: number === 2 ? "inline" : "none" } },
                react_2["default"].createElement(Demographics_1.Demographics, null)),
            react_2["default"].createElement("div", { style: { display: number === 3 ? "inline" : "none" } },
                react_2["default"].createElement(covidHistory_1.CovidHistory, null)),
            react_2["default"].createElement("div", { style: { display: number === 4 ? "inline" : "none" } },
                react_2["default"].createElement(PostCovid_1.PostCovid, null)),
            react_2["default"].createElement("div", { style: { display: number === 5 ? "inline" : "none" } },
                react_2["default"].createElement(Recovery_1.Recovery, null)),
            react_2["default"].createElement("div", { style: { display: number === 6 ? "inline" : "none" } },
                react_2["default"].createElement(VaccinationHistory_1.VaccinationHistory, null)),
            react_2["default"].createElement("div", { style: { display: number === 7 ? "inline" : "none" } },
                react_2["default"].createElement(ThankYou_1.ThankYou, null)))));
}
exports.ProfileCheckin = function () {
    // return(<BasicUsage />)
    return (react_2["default"].createElement(react_1.Flex, { className: Header_module_css_1["default"].rightHeaderStack, align: "center", gap: 3, boxShadow: "xl" },
        react_2["default"].createElement(Survey, null),
        react_2["default"].createElement(react_1.Avatar, null)));
};
