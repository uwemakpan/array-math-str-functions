// Function to calculate the factorial of a number
const factorial = (num) => {
  let result = 1
  while (num > 1) {
    result *= num
    num -= 1
  }

  return result
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))
