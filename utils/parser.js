import _ from "lodash";

export function parseNumbers(input) {
    input = _.map(input, (str) => parseFloat(str))
    return _.compact(input);
}

export function isValidOperation(operation) {
  return {/*write code here*/}
}

