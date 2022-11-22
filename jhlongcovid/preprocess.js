export function sumUpCases(data) {
    let total = 0;
    data.forEach(dat => {
        total += dat.covidSummary.totalLongCovidCases;
    })

    return total;
}