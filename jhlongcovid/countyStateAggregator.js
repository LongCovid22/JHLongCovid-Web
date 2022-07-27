export default function countyStateAggregator(countyInfo) {

    let result = {};
    countyInfo.forEach((x, i) => {
        if (x.stateName in result) {
            // console.log(result[x.stateName])
            result[x.stateName] = {
                long : x.long + result[x.stateName].long,
                lat : x.lat + result[x.stateName].lat,
                count : 1 + result[x.stateName].count,
                magnitude: x.magnitude + result[x.stateName].magnitude,
            }
        } else {
            result[x.stateName] = {
                long : x.long,
                lat : x.lat,
                count : 1,
                magnitude: x.magnitude,
            }
        }
    })

    Object.keys(result).forEach(res => {
        result[res].long /= result[res].count;
        result[res].lat /= result[res].count;
        result[res].magnitude /= 10;
    })

    let result_array = [];

    Object.keys(result).forEach(res => 
        result_array.push(result[res])
    );
    return result_array;
}
