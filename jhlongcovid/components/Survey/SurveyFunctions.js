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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
exports.medicalConditionsMap = exports.emailReceiptConfirmation = exports.aggregateResults = exports.saveEntries = exports.createSurveyEntry = exports.createSocialDeterminantsEntry = exports.createSymptomEntry = exports.createPatientHealthEntry = exports.createGlobalHealthEntry = exports.createVaccinationEntry = exports.createRecoveryEntry = exports.createCovidEntry = exports.parseHeightIntoInches = exports.getCountyAndStateWithZip = exports.userInfoIsEmpty = exports.updateUserWithInfoFromSurvey = exports.checkEmptyDemoFields = void 0;
var mutations = require("../../src/graphql/mutations");
var aws_amplify_1 = require("aws-amplify");
var API_1 = require("../../src/API");
var axios_1 = require("axios");
var checkEmptyDemoFields = function (answer) {
    var emptyFields = [];
    var demographics = answer;
    if (demographics.zip === "") {
        emptyFields.push("zip code");
    }
    if (demographics.age === "") {
        emptyFields.push("age");
    }
    if (demographics.race === "") {
        emptyFields.push("race");
    }
    if (demographics.sex === "") {
        emptyFields.push("sex");
    }
    if (demographics.height === "") {
        emptyFields.push("height");
    }
    if (demographics.weight === "") {
        emptyFields.push("weight");
    }
    return emptyFields;
};
exports.checkEmptyDemoFields = checkEmptyDemoFields;
var updateUserWithInfoFromSurvey = function (userInfo, user) { return __awaiter(void 0, void 0, void 0, function () {
    var userDetails;
    return __generator(this, function (_a) {
        userDetails = {};
        if (userInfo) {
            userDetails = {
                id: user.id,
                age: userInfo.age,
                race: userInfo.race.toUpperCase(),
                sex: userInfo.sex,
                height: userInfo.height,
                weight: userInfo.weight,
                lastSubmission: new Date()
            };
            try {
                aws_amplify_1.API.graphql({
                    query: mutations.updateUser,
                    variables: { input: userDetails },
                    authMode: "AMAZON_COGNITO_USER_POOLS"
                });
            }
            catch (error) {
                console.log("Error: ", error);
            }
        }
        return [2 /*return*/];
    });
}); };
exports.updateUserWithInfoFromSurvey = updateUserWithInfoFromSurvey;
var userInfoIsEmpty = function (userInfo) {
    if (userInfo.age === "" &&
        userInfo.height === "" &&
        userInfo.weight === "" &&
        userInfo.race === "" &&
        userInfo.sex === "") {
        return true;
    }
    return false;
};
exports.userInfoIsEmpty = userInfoIsEmpty;
var getCountyAndStateWithZip = function (zipCode, apiKey) { return __awaiter(void 0, void 0, void 0, function () {
    var locationData, response, errors_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                locationData = {
                    county: "",
                    state: "",
                    stateAbbrev: "",
                    countyLat: 0.0,
                    countyLong: 0.0,
                    stateLat: 0.0,
                    stateLong: 0.0
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, axios_1["default"].get("https://maps.googleapis.com/maps/api/geocode/json?address=" +
                        zipCode +
                        "&key=".concat(apiKey))];
            case 2:
                response = _a.sent();
                if (!(response.data.results.length > 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, Promise.all(response.data.results[0].address_components.map(function (value) { return __awaiter(void 0, void 0, void 0, function () {
                        var ac, stateResponse, west, east, lng, north, south, lat, countyResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    ac = value;
                                    if (!ac.types.includes("administrative_area_level_1")) return [3 /*break*/, 2];
                                    locationData.state = ac.long_name;
                                    locationData.stateAbbrev = ac.short_name;
                                    return [4 /*yield*/, axios_1["default"].get("https://maps.googleapis.com/maps/api/geocode/json?address=" +
                                            "".concat(ac.long_name, " state") +
                                            "&key=".concat(apiKey))];
                                case 1:
                                    stateResponse = _a.sent();
                                    west = stateResponse.data.results[0].geometry.bounds.southwest.lng;
                                    east = stateResponse.data.results[0].geometry.bounds.northeast.lng;
                                    lng = (west + east) / 2;
                                    north = stateResponse.data.results[0].geometry.bounds.northeast.lat;
                                    south = stateResponse.data.results[0].geometry.bounds.southwest.lat;
                                    lat = (north + south) / 2;
                                    locationData.stateLat = Math.round(lat * 1000000) / 1000000;
                                    locationData.stateLong = Math.round(lng * 1000000) / 1000000;
                                    _a.label = 2;
                                case 2:
                                    if (!ac.types.includes("administrative_area_level_2")) return [3 /*break*/, 4];
                                    return [4 /*yield*/, axios_1["default"].get("https://maps.googleapis.com/maps/api/geocode/json?address=" +
                                            ac.long_name +
                                            "&key=".concat(apiKey))];
                                case 3:
                                    countyResponse = _a.sent();
                                    locationData.countyLat =
                                        Math.round(countyResponse.data.results[0].geometry.location.lat * 1000000) / 1000000;
                                    locationData.countyLong =
                                        Math.round(countyResponse.data.results[0].geometry.location.lng * 1000000) / 1000000;
                                    locationData.county = ac.long_name;
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                errors_1 = _a.sent();
                console.error(errors_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/, locationData];
        }
    });
}); };
exports.getCountyAndStateWithZip = getCountyAndStateWithZip;
var parseHeightIntoInches = function (height) {
    if (height.length === 2) {
        var feet = parseInt(height.split("")[0]);
        var inches = parseInt(height.split("")[1]);
        return (feet * 12 + inches).toString();
    }
    else if (height.length === 1) {
        return (parseInt(height) * 12).toString();
    }
    return "0";
};
exports.parseHeightIntoInches = parseHeightIntoInches;
var createCovidEntry = function (surveyData, locationData) { return __awaiter(void 0, void 0, void 0, function () {
    var details, cEntry, error_1, mutation;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                details = {
                    state: locationData.state,
                    countyState: locationData.county !== ""
                        ? locationData.county + "#" + locationData.stateAbbrev
                        : null,
                    age: parseInt(surveyData.age),
                    race: surveyData.race.toUpperCase(),
                    sex: surveyData.sex,
                    height: (0, exports.parseHeightIntoInches)(surveyData.height),
                    weight: surveyData.weight,
                    beenInfected: (_a = surveyData.beenInfected) !== null && _a !== void 0 ? _a : null,
                    timesPositive: (_b = surveyData.timesPositive) !== null && _b !== void 0 ? _b : null,
                    tested: (_c = surveyData.tested) !== null && _c !== void 0 ? _c : null,
                    positiveTest: (_d = surveyData.positiveTest) !== null && _d !== void 0 ? _d : null,
                    testMethod: (_e = surveyData.testMethod) !== null && _e !== void 0 ? _e : null,
                    hospitalized: (_f = surveyData.hospitalized) !== null && _f !== void 0 ? _f : null,
                    timesHospitalized: (_g = surveyData.timesHospitalized) !== null && _g !== void 0 ? _g : null,
                    symptomatic: (_h = surveyData.symptomatic) !== null && _h !== void 0 ? _h : null,
                    medicationsPrescribed: (_j = surveyData.medicationsPrescribed) !== null && _j !== void 0 ? _j : null,
                    medicationsTaken: (_k = surveyData.medicationsTaken) !== null && _k !== void 0 ? _k : null
                };
                _l.label = 1;
            case 1:
                _l.trys.push([1, 3, , 4]);
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createCovidEntry,
                        variables: { input: details }
                    })];
            case 2:
                cEntry = (_l.sent());
                if (cEntry.data && cEntry.data.createCovidEntry) {
                    return [2 /*return*/, cEntry.data.createCovidEntry.id];
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _l.sent();
                mutation = error_1;
                if (mutation.data && mutation.data.createCovidEntry) {
                    return [2 /*return*/, mutation.data.createCovidEntry.id];
                }
                else {
                    console.log("Error creating COVID Entry: ", mutation.errors);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createCovidEntry = createCovidEntry;
var createRecoveryEntry = function (surveyData, locationData) { return __awaiter(void 0, void 0, void 0, function () {
    var details, rEntry, error_2, mutation;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                details = {
                    state: locationData.state,
                    countyState: locationData.county !== ""
                        ? locationData.county + "#" + locationData.stateAbbrev
                        : null,
                    age: parseInt(surveyData.age),
                    race: surveyData.race.toUpperCase(),
                    sex: surveyData.sex,
                    height: (0, exports.parseHeightIntoInches)(surveyData.height),
                    weight: surveyData.weight,
                    recovered: (_a = surveyData.recovered) !== null && _a !== void 0 ? _a : null,
                    lengthOfRecovery: (_b = surveyData.lengthOfRecovery) !== null && _b !== void 0 ? _b : null
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createRecoveryEntry,
                        variables: { input: details }
                    })];
            case 2:
                rEntry = (_c.sent());
                if (rEntry.createRecoveryEntry) {
                    return [2 /*return*/, rEntry.createRecoveryEntry.id];
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                mutation = error_2;
                if (mutation.data && mutation.data.createRecoveryEntry) {
                    return [2 /*return*/, mutation.data.createRecoveryEntry.id];
                }
                else {
                    console.log("Error creating Recovery Entry: ", mutation.errors);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createRecoveryEntry = createRecoveryEntry;
var createVaccinationEntry = function (surveyData, locationData) { return __awaiter(void 0, void 0, void 0, function () {
    var details, vEntry, error_3, mutation;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                details = {
                    state: locationData.state,
                    countyState: locationData.county !== ""
                        ? locationData.county + "#" + locationData.stateAbbrev
                        : null,
                    age: parseInt(surveyData.age),
                    race: surveyData.race.toUpperCase(),
                    sex: surveyData.sex,
                    height: (0, exports.parseHeightIntoInches)(surveyData.height),
                    weight: surveyData.weight,
                    totalVaccineShots: (_a = surveyData.totalVaccineShots) !== null && _a !== void 0 ? _a : null,
                    vaccinated: (_b = surveyData.vaccinated) !== null && _b !== void 0 ? _b : null,
                    dateOfLastVaccine: (_c = surveyData.dateOfLastVaccine) !== null && _c !== void 0 ? _c : null
                };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createVaccinationEntry,
                        variables: { input: details }
                    })];
            case 2:
                vEntry = (_d.sent());
                if (vEntry.createVaccinationEntry) {
                    return [2 /*return*/, vEntry.createVaccinationEntry.id];
                }
                return [3 /*break*/, 4];
            case 3:
                error_3 = _d.sent();
                mutation = error_3;
                if (mutation.data && mutation.data.createVaccinationEntry) {
                    return [2 /*return*/, mutation.data.createVaccinationEntry.id];
                }
                else {
                    console.log("Error creating Vaccination Entry: ", mutation.errors);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createVaccinationEntry = createVaccinationEntry;
var createGlobalHealthEntry = function (surveyData, locationData) { return __awaiter(void 0, void 0, void 0, function () {
    var details, ghEntry, error_4, mutation;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                details = {
                    state: locationData.state,
                    countyState: locationData.county !== ""
                        ? locationData.county + "#" + locationData.stateAbbrev
                        : null,
                    age: parseInt(surveyData.age),
                    race: surveyData.race.toUpperCase(),
                    sex: surveyData.sex,
                    height: (0, exports.parseHeightIntoInches)(surveyData.height),
                    weight: surveyData.weight,
                    healthRank: (_a = surveyData.healthRank) !== null && _a !== void 0 ? _a : null,
                    physicalHealthRank: (_b = surveyData.physicalHealthRank) !== null && _b !== void 0 ? _b : null,
                    carryPhysicalActivities: (_c = surveyData.carryOutSocialActivitiesRank) !== null && _c !== void 0 ? _c : null,
                    fatigueRank: (_d = surveyData.fatigueRank) !== null && _d !== void 0 ? _d : null,
                    painLevel: (_e = surveyData.painLevel) !== null && _e !== void 0 ? _e : null
                };
                _f.label = 1;
            case 1:
                _f.trys.push([1, 3, , 4]);
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createGlobalHealthEntry,
                        variables: { input: details }
                    })];
            case 2:
                ghEntry = (_f.sent());
                if (ghEntry.createGlobalHealthEntry) {
                    return [2 /*return*/, ghEntry.createGlobalHealthEntry.id];
                }
                return [3 /*break*/, 4];
            case 3:
                error_4 = _f.sent();
                mutation = error_4;
                if (mutation.data && mutation.data.createGlobalHealthEntry) {
                    return [2 /*return*/, mutation.data.createGlobalHealthEntry.id];
                }
                else {
                    console.log("Error creating Global Health Entry: ", mutation.errors);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createGlobalHealthEntry = createGlobalHealthEntry;
var createPatientHealthEntry = function (surveyData, locationData) { return __awaiter(void 0, void 0, void 0, function () {
    var details, phEntry, error_5, mutation;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                details = {
                    state: locationData.state,
                    countyState: locationData.county !== ""
                        ? locationData.county + "#" + locationData.stateAbbrev
                        : null,
                    age: parseInt(surveyData.age),
                    race: surveyData.race.toUpperCase(),
                    sex: surveyData.sex,
                    height: (0, exports.parseHeightIntoInches)(surveyData.height),
                    weight: surveyData.weight,
                    generalHealthResults: (_a = JSON.stringify(surveyData.generalHealthResults)) !== null && _a !== void 0 ? _a : null,
                    totalScore: (_b = surveyData.totalScore) !== null && _b !== void 0 ? _b : null
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createPatientHealthEntry,
                        variables: { input: details }
                    })];
            case 2:
                phEntry = (_c.sent());
                if (phEntry.createPatientHealthEntry) {
                    return [2 /*return*/, phEntry.createPatientHealthEntry.id];
                }
                return [3 /*break*/, 4];
            case 3:
                error_5 = _c.sent();
                mutation = error_5;
                if (mutation.data && mutation.data.createPatientHealthEntry) {
                    return [2 /*return*/, mutation.data.createPatientHealthEntry.id];
                }
                else {
                    console.log("Error creating Patient Health Entry: ", mutation.errors);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createPatientHealthEntry = createPatientHealthEntry;
var createSymptomEntry = function (surveyData, locationData) { return __awaiter(void 0, void 0, void 0, function () {
    var details, sEntry, error_6, mutation;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                details = {
                    state: locationData.state,
                    countyState: locationData.county !== ""
                        ? locationData.county + "#" + locationData.stateAbbrev
                        : null,
                    age: parseInt(surveyData.age),
                    race: surveyData.race.toUpperCase(),
                    sex: surveyData.sex,
                    height: (0, exports.parseHeightIntoInches)(surveyData.height),
                    weight: surveyData.weight,
                    symptoms: (_a = surveyData.symptoms) !== null && _a !== void 0 ? _a : null,
                    carryOutSocialActivitiesRank: (_b = surveyData.carryOutSocialActivitiesRank) !== null && _b !== void 0 ? _b : null,
                    anxietyInPastWeekRank: (_c = surveyData.anxietyInPastWeekRank) !== null && _c !== void 0 ? _c : null,
                    medicalConditions: (_d = surveyData.medicalConditions) !== null && _d !== void 0 ? _d : null,
                    hasLongCovid: (_e = surveyData.hasLongCovid) !== null && _e !== void 0 ? _e : null
                };
                _f.label = 1;
            case 1:
                _f.trys.push([1, 3, , 4]);
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createSymptomEntry,
                        variables: { input: details }
                    })];
            case 2:
                sEntry = (_f.sent());
                if (sEntry.createSymptomEntry) {
                    return [2 /*return*/, sEntry.createSymptomEntry.id];
                }
                return [3 /*break*/, 4];
            case 3:
                error_6 = _f.sent();
                mutation = error_6;
                if (mutation.data && mutation.data.createSymptomEntry) {
                    return [2 /*return*/, mutation.data.createSymptomEntry.id];
                }
                else {
                    console.log("Error creating Symptom Entry: ", mutation.errors);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createSymptomEntry = createSymptomEntry;
var createSocialDeterminantsEntry = function (surveyData, locationData) { return __awaiter(void 0, void 0, void 0, function () {
    var details, sdEntry, error_7, mutation;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                details = {
                    state: locationData.state,
                    countyState: locationData.county !== ""
                        ? locationData.county + "#" + locationData.stateAbbrev
                        : null,
                    age: parseInt(surveyData.age),
                    race: surveyData.race.toUpperCase(),
                    sex: surveyData.sex,
                    height: (0, exports.parseHeightIntoInches)(surveyData.height),
                    weight: surveyData.weight,
                    hasMedicalInsurance: (_a = surveyData.hasMedicalInsurance) !== null && _a !== void 0 ? _a : null,
                    difficultCoveringExpenses: (_b = surveyData.difficultCoveringExpenses) !== null && _b !== void 0 ? _b : null,
                    currentWorkSituation: (_c = surveyData.currentWorkSituation) !== null && _c !== void 0 ? _c : null
                };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createSocialDeterminantsEntry,
                        variables: { input: details }
                    })];
            case 2:
                sdEntry = (_d.sent());
                if (sdEntry.data && sdEntry.data.createSocialDeterminantsEntry) {
                    return [2 /*return*/, sdEntry.data.createSocialDeterminantsEntry.id];
                }
                return [3 /*break*/, 4];
            case 3:
                error_7 = _d.sent();
                mutation = error_7;
                if (mutation.data && mutation.data.createSocialDeterminantsEntry) {
                    return [2 /*return*/, mutation.data.createSocialDeterminantsEntry.id];
                }
                else {
                    console.log("Error creating Symptom Entry: ", mutation.errors);
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createSocialDeterminantsEntry = createSocialDeterminantsEntry;
var createSurveyEntry = function (ids, userInfo, user) { return __awaiter(void 0, void 0, void 0, function () {
    var race, surveyDetails, sEntry, error_8, mutation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                race = void 0;
                if (userInfo.race.toUpperCase() === "WHITE") {
                    race = API_1.Race.WHITE;
                }
                else if (userInfo.race.toUpperCase() === "BLACK") {
                    race = API_1.Race.BLACK;
                }
                else if (userInfo.race.toUpperCase() === "ASIAN") {
                    race = API_1.Race.ASIAN;
                }
                else if (userInfo.race.toUpperCase() === "HISPANIC") {
                    race = API_1.Race.HISPANIC;
                }
                else if (userInfo.race.toUpperCase() === "NATIVE") {
                    race = API_1.Race.NATIVE;
                }
                else if (userInfo.race.toUpperCase() === "OTHER") {
                    race = API_1.Race.OTHER;
                }
                else {
                    race = API_1.Race.NONE;
                }
                surveyDetails = {
                    surveyVersion: 1,
                    surveyType: API_1.SurveyType.GUEST,
                    email: user ? user.email : null,
                    age: parseInt(userInfo.age),
                    race: race,
                    sex: userInfo.sex,
                    height: (0, exports.parseHeightIntoInches)(userInfo.height),
                    weight: userInfo.weight,
                    surveyEntryCovidEntryId: ids.CovidEntry ? ids.CovidEntry : null,
                    surveyEntryVaccinationEntryId: ids.VaccinationEntry
                        ? ids.VaccinationEntry
                        : null,
                    surveyEntrySocialDeterminantsEntryId: ids.SocialDeterminantsEntry
                        ? ids.SocialDeterminantsEntry
                        : null,
                    surveyEntryRecoveryEntryId: ids.RecoveryEntry ? ids.RecoveryEntry : null,
                    surveyEntryGlobalHealthEntryId: ids.GlobalHealthEntry
                        ? ids.GlobalHealthEntry
                        : null,
                    surveyEntryPatientHealthEntryId: ids.PatientHealthEntry
                        ? ids.PatientHealthEntry
                        : null,
                    surveyEntrySymptomsEntryId: ids.SymptomEntry ? ids.SymptomEntry : null,
                    surveyEntryMonthlyEntryId: ids.MonthlyEntry ? ids.MonthlyEntry : null
                };
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.createSurveyEntry,
                        variables: { input: surveyDetails }
                    })];
            case 1:
                sEntry = (_a.sent());
                if (sEntry.data && sEntry.data.createSurveyEntry) {
                    return [2 /*return*/, sEntry.data.createSurveyEntry.id];
                }
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                mutation = error_8;
                if (mutation.data && mutation.data.createSurveyEntry) {
                    return [2 /*return*/, mutation.data.createSurveyEntry.id];
                }
                else {
                    console.log("Error creating Survey Entry: ", mutation.errors);
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createSurveyEntry = createSurveyEntry;
var saveEntries = function (locationData, surveyData, userInfo, user) { return __awaiter(void 0, void 0, void 0, function () {
    var ids, _a, _b, value, _c, covidEntryid, recoveryEntryId, vaccinationEntryId, patientHealthEntryId, globalHealthEntryId, SymptomEntryId, socialDeterminantsEntryId, e_1_1, _d, _e, error_9;
    var e_1, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 29, , 30]);
                ids = {};
                _g.label = 1;
            case 1:
                _g.trys.push([1, 21, 22, 27]);
                _a = __asyncValues(Object.keys(surveyData));
                _g.label = 2;
            case 2: return [4 /*yield*/, _a.next()];
            case 3:
                if (!(_b = _g.sent(), !_b.done)) return [3 /*break*/, 20];
                value = _b.value;
                _c = value;
                switch (_c) {
                    case "CovidEntry": return [3 /*break*/, 4];
                    case "RecoveryEntry": return [3 /*break*/, 6];
                    case "VaccinationEntry": return [3 /*break*/, 8];
                    case "PatientHealthEntry": return [3 /*break*/, 10];
                    case "GlobalHealthEntry": return [3 /*break*/, 12];
                    case "SymptomEntry": return [3 /*break*/, 14];
                    case "SocialDeterminantsEntry": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 4: return [4 /*yield*/, (0, exports.createCovidEntry)(surveyData[value], locationData)];
            case 5:
                covidEntryid = _g.sent();
                ids[value] = covidEntryid;
                return [3 /*break*/, 19];
            case 6: return [4 /*yield*/, (0, exports.createRecoveryEntry)(surveyData[value], locationData)];
            case 7:
                recoveryEntryId = _g.sent();
                ids[value] = recoveryEntryId;
                return [3 /*break*/, 19];
            case 8: return [4 /*yield*/, (0, exports.createVaccinationEntry)(surveyData[value], locationData)];
            case 9:
                vaccinationEntryId = _g.sent();
                ids[value] = vaccinationEntryId;
                return [3 /*break*/, 19];
            case 10: return [4 /*yield*/, (0, exports.createPatientHealthEntry)(surveyData[value], locationData)];
            case 11:
                patientHealthEntryId = _g.sent();
                ids[value] = patientHealthEntryId;
                return [3 /*break*/, 19];
            case 12: return [4 /*yield*/, (0, exports.createGlobalHealthEntry)(surveyData[value], locationData)];
            case 13:
                globalHealthEntryId = _g.sent();
                ids[value] = globalHealthEntryId;
                return [3 /*break*/, 19];
            case 14: return [4 /*yield*/, (0, exports.createSymptomEntry)(surveyData[value], locationData)];
            case 15:
                SymptomEntryId = _g.sent();
                ids[value] = SymptomEntryId;
                return [3 /*break*/, 19];
            case 16: return [4 /*yield*/, (0, exports.createSocialDeterminantsEntry)(surveyData[value], locationData)];
            case 17:
                socialDeterminantsEntryId = _g.sent();
                ids[value] = socialDeterminantsEntryId;
                return [3 /*break*/, 19];
            case 18: return [3 /*break*/, 19];
            case 19: return [3 /*break*/, 2];
            case 20: return [3 /*break*/, 27];
            case 21:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 27];
            case 22:
                _g.trys.push([22, , 25, 26]);
                if (!(_b && !_b.done && (_f = _a["return"]))) return [3 /*break*/, 24];
                return [4 /*yield*/, _f.call(_a)];
            case 23:
                _g.sent();
                _g.label = 24;
            case 24: return [3 /*break*/, 26];
            case 25:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 26: return [7 /*endfinally*/];
            case 27:
                _d = ids;
                _e = "SurveyEntry";
                return [4 /*yield*/, (0, exports.createSurveyEntry)(ids, userInfo, user)];
            case 28:
                _d[_e] = _g.sent();
                return [2 /*return*/, ids];
            case 29:
                error_9 = _g.sent();
                console.log("Saving entries: ", error_9);
                return [3 /*break*/, 30];
            case 30: return [2 /*return*/];
        }
    });
}); };
exports.saveEntries = saveEntries;
var aggregateResults = function (entries, ids, userInfo, location, user) { return __awaiter(void 0, void 0, void 0, function () {
    var aggregateDetails, variables, aggregateResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                aggregateDetails = {
                    id: ids["SurveyEntry"],
                    email: user ? user.email : "",
                    surveyVersion: 1,
                    surveyType: API_1.SurveyType.GUEST,
                    age: userInfo.age,
                    race: userInfo.race,
                    sex: userInfo.sex,
                    location: location,
                    covidResults: ids["CovidEntry"]
                        ? __assign({ id: ids["CovidEntry"] }, entries["CovidEntry"]) : null,
                    recoveryResults: ids["RecoveryEntry"]
                        ? __assign({ id: ids["RecoveryEntry"] }, entries["RecoveryEntry"]) : null,
                    vaccinationResults: ids["VaccinationEntry"]
                        ? __assign({ id: ids["VaccinationEntry"] }, entries["VaccinationEntry"]) : null,
                    globalHealthResults: ids["GlobalHealthEntry"]
                        ? __assign({ id: ids["GlobalHealthEntry"] }, entries["GlobalHealthEntry"]) : null,
                    patientHealthResults: ids["PatientHealthEntry"]
                        ? __assign({ id: ids["PatientHealthEntry"] }, entries["PatientHealthEntry"]) : null,
                    symptomResults: ids["SymptomEntry"]
                        ? __assign({ id: ids["SymptomEntry"] }, entries["SymptomEntry"]) : null,
                    socialDeterminantsResults: ids["SocialDeterminantsEntry"]
                        ? __assign({ id: ids["SocialDeterminantsEntry"] }, entries["SocialDeterminantsEntry"]) : null,
                    healthRelatedResults: {
                        weight: userInfo.weight,
                        height: userInfo.height
                    }
                };
                variables = {
                    results: JSON.stringify(aggregateDetails)
                };
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.aggregateSurveyResults,
                        variables: variables
                    })];
            case 1:
                aggregateResult = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.aggregateResults = aggregateResults;
var emailReceiptConfirmation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var variables, emailReceipt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                variables = {
                    "questions": [
                        [
                            {
                                "title": "",
                                "questionNum": 0,
                                "question": "Welcome to the Johns Hopkins Long COVID Dashboard!",
                                "options": [
                                    "The COVID-19 pandemic has caused unprecedented health and social challenges worldwide. To better understand the long-term consequences of this disease, a team of researchers from Johns Hopkins University and other institutions has developed this dashboard to amplify the voices of Long-COVID sufferers and raise awareness of their challenges and needs.",
                                    "Your feedback on COVID-19 is important to us. We want to know how the pandemic has impacted your well-being, lifestyle, work, or social connections. Please fill out our survey questionnaire to share your experiences with us."
                                ],
                                "answerFormat": "welcome",
                                "answer": null,
                                "branching": null
                            },
                            {
                                "title": "Consent",
                                "questionNum": 1,
                                "question": "The following information will be collected to better understand your experience with COVID-19.",
                                "options": [
                                    "COVID-19 Experience",
                                    "COVID-19 Recovery (if applicable)",
                                    "Vaccination History",
                                    "General Health",
                                    "Medical Conditions",
                                    "Symptoms",
                                    "Social Determinants"
                                ],
                                "answerFormat": "consent",
                                "answer": null,
                                "branching": null
                            },
                            {
                                "title": "Demographics",
                                "questionNum": 2,
                                "question": "Please enter the following demographic information:",
                                "options": [],
                                "answerFormat": "demographics",
                                "answer": null,
                                "branching": null
                            }
                        ],
                        [
                            {
                                "title": "COVID",
                                "questionNum": 3,
                                "question": "Have you ever been infected with COVID-19?",
                                "options": ["Yes", "No"],
                                "answerFormat": ["choice", "choice"],
                                "answer": null,
                                "branching": {
                                    "predicate": "No",
                                    "goto": {
                                        "section": 3,
                                        "question": 0
                                    }
                                },
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "beenInfected",
                                    "type": "Boolean"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 4,
                                "question": "In total, since the beginning of the COVID-19 pandemic in the US (March 2020), how many times do you think you have been infected with COVID‐19? (please estimate even if you are not sure)",
                                "options": [
                                    "1 infection (only once)",
                                    "2 infections (reinfected once)",
                                    "3 infections (reinfected twice)",
                                    {
                                        "title": "More than 3 infections: (please enter number)",
                                        "type": "text",
                                        "placeholder": "Enter number of infections",
                                        "validation": {
                                            "regex": "^[0-9]+$",
                                            "errorText": "Please enter a valid number"
                                        }
                                    },
                                    "Do not know"
                                ],
                                "answerFormat": ["choice", "choice", "choice", "input", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "timesPositive",
                                    "type": "Int"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 5,
                                "question": "Have you every been hospitalized for COVID-19?",
                                "options": ["Yes", "No"],
                                "answerFormat": ["choice", "choice"],
                                "answer": null,
                                "branching": {
                                    "predicate": "No",
                                    "goto": {
                                        "section": 1,
                                        "question": 4
                                    }
                                },
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "hospitalized",
                                    "type": "Boolean"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 6,
                                "question": "How many times have you been hospitalized for COVID-19?",
                                "options": [
                                    "1 COVID hospitalization",
                                    "2 COVID hospitalizations",
                                    "3 COVID hospitalizations",
                                    {
                                        "title": "More than 3 hospitalizations: (please enter number)",
                                        "type": "text",
                                        "placeholder": "Enter number of infections",
                                        "validation": {
                                            "regex": "^[0-9]+$",
                                            "errorText": "Please enter a valid number"
                                        }
                                    },
                                    "Do not know"
                                ],
                                "answerFormat": ["choice", "choice", "choice", "input", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "timesHospitalized",
                                    "type": "Int"
                                }
                            },
                            {
                                "instructions": "The following questions refer to your most recent COVID-19 infection",
                                "title": "COVID",
                                "questionNum": 7,
                                "question": "When do you know or think you had COVID-19?",
                                "options": {
                                    "title": "Date:",
                                    "type": "date",
                                    "placeholder": "Enter date"
                                },
                                "answerFormat": "input",
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "lastPositive",
                                    "type": "AWSDateTime"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 8,
                                "question": "Did you take a COVID test at that time?",
                                "options": ["Yes", "No"],
                                "answerFormat": ["choice", "choice"],
                                "answer": null,
                                "branching": {
                                    "predicate": "No",
                                    "goto": {
                                        "section": 1,
                                        "question": 7
                                    }
                                },
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "tested",
                                    "type": "Boolean"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 9,
                                "question": "Did you have a positive test result? “Positive” means the test showed COVID-19.",
                                "options": ["Yes", "No", "Do not know"],
                                "answerFormat": ["choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "positiveTest",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 10,
                                "question": "Did you have any COVID19 symptoms, such as fever, cough, sore throat, or other symptoms?",
                                "options": ["Yes", "No"],
                                "answerFormat": ["choice", "choice"],
                                "answer": null,
                                "branching": {
                                    "predicate": "No",
                                    "goto": {
                                        "section": 1,
                                        "question": 9
                                    }
                                },
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "symptomatic",
                                    "type": "Boolean"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 11,
                                "question": "When your symptoms were at their worst, did they prevent you from going about your daily activities?",
                                "options": [
                                    "Not at all",
                                    "A little bit",
                                    "Somewhat",
                                    "Quite a bit",
                                    "Very much"
                                ],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "symptomsPreventScale",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 12,
                                "question": "Did a doctor or other health care professional prescribe any medications for you to take when you had COVID-19?",
                                "options": ["Yes", "No", "Do not know"],
                                "answerFormat": ["choice", "choice", "choice"],
                                "answer": null,
                                "branching": {
                                    "predicate": ["No", "Do not know"],
                                    "goto": {
                                        "section": 2,
                                        "question": 0
                                    }
                                },
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "medicationsPrescribed",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "COVID",
                                "questionNum": 13,
                                "question": "Did the doctor or other health care professional prescribe any of the following medications for COVID-19? Check all that apply.",
                                "options": [
                                    "Antiviral pill, such as Paxlovid",
                                    "Oral steroids, such as dexamethasone, prednisone, or prednisolone",
                                    "Antibiotics, such as a \"Z-pak\"",
                                    {
                                        "title": "Other",
                                        "type": "text",
                                        "placeholder": "Enter medication",
                                        "validation": {
                                            "regex": "^[0-9]+$",
                                            "errorText": "Please enter a valid number"
                                        }
                                    },
                                    "Do not know"
                                ],
                                "answerFormat": [
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "input",
                                    "multichoice"
                                ],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "CovidEntry",
                                    "field": "medicationsTaken",
                                    "type": "[String]"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Recovery",
                                "questionNum": 14,
                                "question": "Would you say that you are completely recovered from COVID-19 now?",
                                "options": ["Yes", "No"],
                                "answerFormat": ["choice", "choice"],
                                "answer": null,
                                "branching": {
                                    "predicate": "No",
                                    "goto": {
                                        "section": 3,
                                        "question": 0
                                    }
                                },
                                "schemaInfo": {
                                    "tableName": "RecoveryEntry",
                                    "field": "recovered",
                                    "type": "Boolean"
                                }
                            },
                            {
                                "title": "Recovery",
                                "questionNum": 15,
                                "question": "How long did it take for you to recover from your most recent infection?",
                                "options": {
                                    "type": "text",
                                    "title": "Days: ",
                                    "placeholder": "Enter number of days",
                                    "validation": {
                                        "regex": "^[0-9]+$",
                                        "errorText": "Please enter a valid number"
                                    }
                                },
                                "answerFormat": "input",
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "RecoveryEntry",
                                    "field": "lengthOfRecovery",
                                    "type": "Int"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Vaccination",
                                "questionNum": 16,
                                "question": "Have you ever been vaccinated against COVID-19?",
                                "options": ["No", "Yes", "Do not know"],
                                "answerFormat": ["choice", "choice", "choice"],
                                "answer": null,
                                "branching": {
                                    "predicate": "No",
                                    "goto": {
                                        "section": 5,
                                        "question": 0
                                    }
                                },
                                "schemaInfo": {
                                    "tableName": "VaccinationEntry",
                                    "field": "vaccinated",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Vaccination",
                                "questionNum": 17,
                                "question": "In total, how many COVID-19 vaccine shots have you received?",
                                "options": [
                                    {
                                        "type": "dropdown",
                                        "title": "Number of shots: ",
                                        "placeholder": "Enter number of shots",
                                        "validation": {
                                            "regex": "^[0-9]+$",
                                            "errorText": "Please enter a valid number"
                                        }
                                    },
                                    "Do not know"
                                ],
                                "answerFormat": ["input", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "VaccinationEntry",
                                    "field": "totalVaccineShots",
                                    "type": "Int"
                                }
                            },
                            {
                                "title": "Vaccination",
                                "questionNum": 18,
                                "question": "When was your most recent COVID shot?",
                                "options": [
                                    {
                                        "type": "date",
                                        "title": "Date of shot: ",
                                        "placeholder": "Enter date of shot"
                                    },
                                    "Unsure",
                                    "Decline to answer"
                                ],
                                "answerFormat": ["input", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "VaccinationEntry",
                                    "field": "dateOfLastVaccine",
                                    "type": "AWSDateTime"
                                }
                            },
                            {
                                "title": "Vaccination",
                                "questionNum": 19,
                                "question": "Which type of COVID vaccine was your last shot?",
                                "options": [
                                    "Pfizer",
                                    "Moderna",
                                    "Janssen",
                                    "Novavax",
                                    {
                                        "type": "text",
                                        "title": "Other",
                                        "placeholder": "Enter vaccine type"
                                    },
                                    "Do not know"
                                ],
                                "answerFormat": [
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "input",
                                    "choice"
                                ],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "VaccinationEntry",
                                    "field": "vaccineType",
                                    "type": "String"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Your Global Health",
                                "questionNum": 20,
                                "question": "In general, would you say your health is:",
                                "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "GlobalHealthEntry",
                                    "field": "healthRank",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Your Global Health",
                                "questionNum": 21,
                                "question": "In general, how would you rate your physical health?",
                                "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "GlobalHealthEntry",
                                    "field": "physicalHealthRank",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Your Global Health",
                                "questionNum": 22,
                                "question": "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
                                "options": [
                                    "Completely",
                                    "Mostly",
                                    "Moderately",
                                    "A little",
                                    "Not at all"
                                ],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "GlobalHealthEntry",
                                    "field": "carryPhysicalActivities",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Your Global Health",
                                "questionNum": 23,
                                "question": "In the <timeframe>, how would you rate you fatigue (extreme tiredness resulting from mental or physical exertion or illness) on average?",
                                "timeframe": "past 7 days",
                                "options": ["None", "Mild", "Moderate", "Severe", "Very Severe"],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "GlobalHealthEntry",
                                    "field": "fatigueRank",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Your Global Health",
                                "questionNum": 24,
                                "question": "In the <timeframe>, how would you rate your pain on average? Please provide a number from 1 (no pain) to 10 (worst imagineable pain): ",
                                "timeframe": "past 7 days",
                                "options": {
                                    "title": "Enter pain level (1-10)",
                                    "type": "slider",
                                    "placeholder": "Enter pain level",
                                    "sliderProps": {
                                        "min": 1,
                                        "max": 10,
                                        "default": 5,
                                        "step": 1
                                    },
                                    "sliderMarks": [
                                        {
                                            "value": 1,
                                            "secondaryLabel": "No pain"
                                        },
                                        {
                                            "value": 2,
                                            "secondaryLabel": ""
                                        },
                                        {
                                            "value": 3,
                                            "secondaryLabel": ""
                                        },
                                        {
                                            "value": 4,
                                            "secondaryLabel": ""
                                        },
                                        {
                                            "value": 5,
                                            "secondaryLabel": "Moderate pain"
                                        },
                                        {
                                            "value": 6,
                                            "secondaryLabel": ""
                                        },
                                        {
                                            "value": 7,
                                            "secondaryLabel": ""
                                        },
                                        {
                                            "value": 8,
                                            "secondaryLabel": ""
                                        },
                                        {
                                            "value": 9,
                                            "secondaryLabel": ""
                                        },
                                        {
                                            "value": 10,
                                            "secondaryLabel": "Unimaginable pain"
                                        }
                                    ]
                                },
                                "answerFormat": "input",
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "GlobalHealthEntry",
                                    "field": "painLevel",
                                    "type": "Int"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Symptoms",
                                "questionNum": 25,
                                "question": "During the <timeframe>, have you had any of the following symptoms? Check all that apply.",
                                "timeframe": "past month",
                                "answerFormat": [
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice"
                                ],
                                "options": [
                                    "Headache",
                                    "Body or muscle aches",
                                    "Fever, chills, sweats or flushing",
                                    "Feeling faint, dizzy, “goofy”; difficulty thinking soon after standing up from a sitting or lying position",
                                    "Feeling sick after you exert yourself physically or mentally (“post-exertional malaise”)",
                                    "Weakness in arms or legs",
                                    "Shortness of breath (trouble breathing)",
                                    "Cough",
                                    "Palpitations, racing heart, arrhythmia, or skipped beats",
                                    "Swelling of your legs",
                                    "Indigestion, nausea, feeling uncomfortably full or vomiting after eating, diarrhea, or constipation",
                                    "Bladder problems including incontinence, trouble passing urine or emptying bladder",
                                    "Nerve problems including tremor, shaking, numbness, tingling, or burning",
                                    "Problems thinking or concentrating (“brain fog”)",
                                    "Problems with anxiety, depression, stress or trauma-related symptoms like nightmares or grief",
                                    "Difficulty falling asleep, difficulty staying asleep, or early morning awakenings, 3 or more times per week",
                                    "Feeling sleepy, trouble staying awake during the daytime, or falling asleep during the day when you do not intend to, 3 or more times per week",
                                    "Loud snoring, stopping breathing, or gasping during sleep, 3 or more times per week",
                                    "Uncomfortable feelings in your legs (creepy, crawling feeling) that make you want to move your legs, that are worse at night and improved with movement",
                                    "Skin rash",
                                    "Loss of or change in smell or taste",
                                    "Excessive thirst",
                                    "Excessively dry mouth",
                                    "Vision problems (blurry, light sensitivity, difficult reading or focusing, floaters, flashing lights, “snow”)",
                                    "Problems with hearing (hearing loss, ringing in ears)",
                                    "Problems with fertility, changes in your menstrual cycle, changes in menopause symptoms"
                                ],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SymptomEntry",
                                    "field": "symptoms",
                                    "type": "[String]"
                                }
                            },
                            {
                                "title": "Symptoms",
                                "questionNum": 26,
                                "question": "In general, over the <timeframe>, how would you rate your mental health, including your mood and your ability to think?",
                                "timeframe": "last 2 weeks",
                                "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SymptomEntry",
                                    "field": "mentalHealthRank",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Symptoms",
                                "questionNum": 27,
                                "question": "In general, over the <timeframe>, how would you rate your satisfaction with your social activities and relationships?",
                                "timeframe": "last 2 weeks",
                                "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SymptomEntry",
                                    "field": "socialSatisfactionRank",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Symptoms",
                                "questionNum": 28,
                                "question": "In general, over the <timeframe>, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, employee, friend, etc.)",
                                "timeframe": "last 2 weeks",
                                "options": ["Excellent", "Very good", "Good", "Fair", "Poor"],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SymptomEntry",
                                    "field": "carryOutSocialActivitiesRank",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Symptoms",
                                "questionNum": 29,
                                "question": "In the <timeframe>, how often have you been bothered by emotional problems such as feeling anxious, depressed or irritable?",
                                "timeframe": "past 7 days",
                                "options": ["Never", "Rarely", "Sometimes", "Often", "Always"],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SymptomEntry",
                                    "field": "anxietyInPastWeekRank",
                                    "type": "String"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Patient Health",
                                "questionNum": 30,
                                "question": "Over the <timeframe>, how often have you been bothered by the following problems?",
                                "timeframe": "last 2 weeks",
                                "scale": [
                                    "Not at all",
                                    "Several days",
                                    "More than half the days",
                                    "Nearly every day"
                                ],
                                "answerFormat": "scale",
                                "options": [
                                    "Little interest or pleasure in doing things?",
                                    "Feeling down, depressed, or hopeless?",
                                    "Trouble falling or staying asleep, or sleeping too much?",
                                    "Feeling tired or having little energy?",
                                    "Poor appetite or overeating?",
                                    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
                                    "Trouble concentrating on things, such as reading the newspaper or watching television?",
                                    "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"
                                ],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "PatientHealthEntry",
                                    "field": "generalHealthResults",
                                    "type": "AWSJSON"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Medical Conditions",
                                "questionNum": 31,
                                "question": "Since the <timeframe>, has a health care provider given you a new diagnosis of any of the following conditions? Check all that apply.",
                                "timeframe": "beginning of 2020",
                                "options": [
                                    "Heart problems, such as heart failure or arrhythmia (e.g., “atrial fibrillation”)",
                                    "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease",
                                    "Blood clots in the lung (“pulmonary embolism”), leg or arm (“deep vein thrombosis”)",
                                    "Sleep apnea or insomnia",
                                    "Memory or cognitive impairment or dementia ",
                                    "Migraine or other headache disorder",
                                    "Stroke",
                                    "Seizure or epilepsy",
                                    "Kidney problems or kidney disease",
                                    "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome",
                                    "Psychological problems or psychiatric problems, like depression or anxiety or psychosis",
                                    "Diabetes",
                                    "Autoimmune diseases (such as systemic lupus, thyroid disease)",
                                    "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)",
                                    {
                                        "type": "text",
                                        "title": "Other",
                                        "placeholder": "Enter condition"
                                    },
                                    "Not sure",
                                    "No new diagnoses since the beginning of 2020"
                                ],
                                "answerFormat": [
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "multichoice",
                                    "input",
                                    "multichoice",
                                    "multichoice"
                                ],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SymptomEntry",
                                    "field": "medicalConditions",
                                    "type": "[String]"
                                }
                            },
                            {
                                "title": "Medical Conditions",
                                "questionNum": 32,
                                "question": "Do you think that you are experiencing, or have ever experienced, what has been called “long COVID,” or symptoms related to COVID at least a month after your infection?",
                                "options": ["Yes", "No", "Do not know"],
                                "answerFormat": ["choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SymptomEntry",
                                    "field": "hasLongCovid",
                                    "type": "String"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Your Social Determinants",
                                "questionNum": 33,
                                "question": "Do you currently have some form of health insurance to help pay for medical bills?",
                                "options": ["Yes", "No"],
                                "answerFormat": ["choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SocialDeterminantsEntry",
                                    "field": "hasMedicalInsurance",
                                    "type": "Boolean"
                                }
                            },
                            {
                                "title": "Your Social Determinants",
                                "questionNum": 34,
                                "question": "In the <timeframe>, how difficult has it been to pay for the things you need (or you and your family needs)?",
                                "timeframe": "past month",
                                "options": [
                                    "Very difficult",
                                    "Somewhat difficult",
                                    "Not at all difficult",
                                    "Do not know",
                                    "Prefer not to answer"
                                ],
                                "answerFormat": ["choice", "choice", "choice", "choice", "choice"],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SocialDeterminantsEntry",
                                    "field": "difficultCoveringExpenses",
                                    "type": "String"
                                }
                            },
                            {
                                "title": "Your Social Determinants",
                                "questionNum": 35,
                                "question": "What is your current work situation?",
                                "options": [
                                    "Working outside of the home",
                                    "Working outside the home as well as working remotely from home (“hybrid” work)",
                                    "Working remotely from home",
                                    "Working at home to provide childcare, eldercare and/or to maintain the home",
                                    "On leave from a job working outside the home (e.g, sick leave, family leave, maternity leave)",
                                    "Looking for work, unemployed",
                                    "Retired",
                                    "Disabled, permanently or temporarily",
                                    "Student",
                                    "Don't know",
                                    "Prefer not to answer"
                                ],
                                "answerFormat": [
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice",
                                    "choice"
                                ],
                                "answer": null,
                                "branching": null,
                                "schemaInfo": {
                                    "tableName": "SocialDeterminantsEntry",
                                    "field": "currentWorkSituation",
                                    "type": "String"
                                }
                            }
                        ],
                        [
                            {
                                "title": "Create Account",
                                "questionNum": 36,
                                "question": "In order to better understand Long COVID, we would like to check in to see how your COVID experience changes over time. To participate, enter your desired password to continue creating your account.\n\nIf you would like to skip creating an account and continue submitting your survey response, just click the skip button!",
                                "options": null,
                                "answer": null,
                                "answerFormat": "account",
                                "branching": {
                                    "predicate": "skip",
                                    "goto": {
                                        "section": 9,
                                        "question": 1
                                    }
                                }
                            },
                            {
                                "title": "Thank You",
                                "questionNum": 37,
                                "question": "Thank you for participating in our Long COVID survey. You will be emailed with a receipt of your survey entry shortly!",
                                "options": null,
                                "answer": null,
                                "answerFormat": "thankYou",
                                "branching": null
                            }
                        ]
                    ],
                    "questionStack": [{ "section": 0, "question": 0 }, { "section": 0, "question": 1 }, { "section": 0, "question": 2 }],
                    "answerStack": ["true", "2", { "zip": "10019", "age": "19", "race": "asian", "sex": "Male", "height": "100lbs", "weight": "50kg" }]
                };
                return [4 /*yield*/, aws_amplify_1.API.graphql({
                        query: mutations.emailReceiptConfirmation,
                        variables: variables
                    })];
            case 1:
                emailReceipt = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.emailReceiptConfirmation = emailReceiptConfirmation;
exports.medicalConditionsMap = {
    noNewDiagnosis: "None",
    heartProblems: "Heart problems, such as heart failure or arrhythmia (e.g., “atrial fibrillation”)",
    lungProblems: "Lung problems, such as asthma, COPD, fibrosis or interstitial lung disease",
    bloodClotLung: "Blood clots in the lung (“pulmonary embolism”), leg or arm (“deep vein thrombosis”)",
    sleepApnea: "Sleep apnea or insomnia",
    memory: "Memory or cognitive impairment or dementia",
    migraine: "Migraine or other headache disorder",
    stroke: "Stroke",
    seizure: "Seizure or epilepsy",
    kidneyProblems: "Kidney problems or kidney disease",
    stomachProblems: "Stomach problems or gastrointestinal disease, like stomach ulcer or irritable bowel syndrome",
    psychologicalProblems: "Psychological problems or psychiatric problems, like depression or anxiety or psychosis",
    diabetes: "Diabetes",
    autoImmuneDiseases: "Autoimmune diseases (such as systemic lupus, thyroid disease)",
    mecfs: "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome (ME-CFS), Postural Orthostatic Tachycardia Syndrome (POTS) or dysautonomia, or Ehlers Danlos Syndrome (EDS)",
    notSure: "Not Sure"
};
