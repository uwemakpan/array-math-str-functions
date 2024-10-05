// Function to sum all elemments of an array
const sumElements = (arr) => {
  const sum = arr.reduce((sum, element) => sum + element, 0)

  return sum
}

console.log(sumElements([1, 2, 3, 4, 2, 5, 6, 7]))
