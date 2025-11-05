import _ from "lodash";

export function parseNumbers(input) {
    input = _.map(input, (str) => parseFloat(str))
    return _.compact(input);
}

export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return _.includes(validOps, operation);
}

