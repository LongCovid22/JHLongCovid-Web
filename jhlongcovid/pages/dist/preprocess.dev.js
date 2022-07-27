"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumUpCases = sumUpCases;

function sumUpCases(data) {
  var total = 0;
  data.forEach(function (dat) {
    total += dat.covidSummary.totalLongCovidCases;
  });
  return total;
}