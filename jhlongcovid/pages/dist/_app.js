"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/globals.css");
var store_1 = require("../redux/store");
var react_redux_1 = require("react-redux");
var react_1 = require("@chakra-ui/react");
var react_wrapper_1 = require("@googlemaps/react-wrapper");
var styles_1 = require("../theme/styles");
require("./styles.css");
var googleAPIKey = process.env.GOOGLEMAPS_API_KEY;
var theme = react_1.extendTheme({
    colors: {
        hopkinsBlue: styles_1.hopkinsBlue
    }
});
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var render = function (status) {
        return React.createElement("h1", null, status);
    };
    return (React.createElement(react_redux_1.Provider, { store: store_1["default"] },
        React.createElement(react_1.ChakraProvider, { theme: theme },
            React.createElement(react_wrapper_1.Wrapper, { apiKey: googleAPIKey, render: render },
                React.createElement(Component, __assign({}, pageProps))))));
}
exports["default"] = MyApp;
