import { RealOrMock } from "./pages";

export function sumUpCases(data, realOrMock = RealOrMock.MOCK) {
  let total = 0;
  if (realOrMock === RealOrMock.REAL) {
    Object.keys(data).map((key) => {
      total += data[key].longCovid;
    });
  } else {
    if (Array.isArray(data)) {
      data.forEach((dat) => {
        total += dat.longCovid;
      });
    }
  }

  return total;
}
