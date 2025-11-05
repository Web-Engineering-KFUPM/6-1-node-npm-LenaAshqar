export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
}

export function subtract(numbers) {
    let result = numbers[0]
    for (let i = 1 ; i < numbers.length ; i++) {
      result = result - numbers[i]
  }
    return result
}

export function multiply(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length ; i++) {
        product = product * numbers[i]
    }
    return product
}

export function divide(numbers) {
    let result = numbers[0]
    for (let i = 1 ; i < numbers.length ; i++) {
        if (numbers[i] === 0) {
            return "Division by Sero error"
        }
        else {
            result = result / numbers[i]
        }
    }
    return result
}

