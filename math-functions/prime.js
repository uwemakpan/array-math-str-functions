// Function to check if a number is prime or not
const isPrime = (num) => {
  let result = ''
  let begin = num - 1

  while (begin > 1) {
    result = num % begin === 0 ? false : true
    if (result === false) break
    begin -= 1
  }

  return result === false ? 'Number is not Prime' : 'Number is prime'
}

console.log(isPrime(29))
console.log(isPrime(19))
console.log(isPrime(36))
