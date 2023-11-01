const isObject = (variable) => {
    //https://bobbyhadz.com/blog/javascript-check-if-value-is-object
    return (
      typeof variable === "object" &&
      variable !== null &&
      !Array.isArray(variable)
    );
  };
  
  const parse = (object) => {
    for (let property in object) {
      if (isObject(object[property])) {
        for (prop in object[property]) {
          if (isObject(object[property][prop])) {
            for (p in object[property][prop]) {
              object[property][prop][p] = JSON.parse(object[property][prop][p]);
            }
          } else {
            object[property][prop] = JSON.parse(object[property][prop]);
          }
        }
      }
    }
  };
  
  const stringify = (object) => {
    for (let property in object) {
      if (isObject(object[property])) {
        if ("race" in object[property]) {
          object[property] = JSON.stringify(object[property]);
        } else {
          stringify(object[property]);
        }
      }
    }
  };
  
  const findMatchingIndex = (element, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].toLowerCase() === element.toLowerCase()) {
        return i;
      }
    }
    return -1;
  };
  
  const findHardCodedAgeRangeIndex = (age) => {
    if (age <= 13) {
      return 0;
    } else if (age <= 25) {
      return 1;
    } else if (age <= 60) {
      return 2;
    } else {
      return 3;
    }
  };

module.exports = { isObject, parse, stringify, findMatchingIndex, findHardCodedAgeRangeIndex}