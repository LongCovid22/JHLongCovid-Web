import { RealOrMock } from "./pages";

export function sumUpTotals(data, type, realOrMock = RealOrMock.MOCK) {
  let total = 0;
  if (realOrMock === RealOrMock.REAL) {
    if (type === "totalLongCovid") {
      Object.keys(data).map((key) => {
        total += data[key].longCovid;
      });
    } else {
      Object.keys(data).map((key) => {
        total += data[key].covidCount;
      });
    }
  } else {
    if (Array.isArray(data)) {
      if (type === "totalLongCovid") {
        data.forEach((dat) => {
          total += dat.longCovid;
        });
      } else {
        data.forEach((dat) => {
          total += dat.covidCount;
        });
      }
    }
  }

  return total;
}
