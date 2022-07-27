"use strict";
exports.__esModule = true;
exports.selectZoom = exports.setByAmount = exports.zoomSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: 5
};
exports.zoomSlice = toolkit_1.createSlice({
    name: 'zoom',
    initialState: initialState,
    reducers: {
        setByAmount: function (state, action) {
            state.value = action.payload;
            console.log(state.value);
        }
    }
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
exports.setByAmount = exports.zoomSlice.actions.setByAmount;
// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
exports.selectZoom = function (state) { return state.zoom.value; };
// exporting the reducer here, as we need to add this to the store
exports["default"] = exports.zoomSlice.reducer;
