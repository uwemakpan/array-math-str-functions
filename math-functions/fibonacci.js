// Function to generate fibonacci series

const fibonacci = (n) => {
  // Create a new array of size 'n'
  let series = new Array(n)

  // Fills all places in array with 0
  series.fill(0)

  // Seed value for 1st element
  series[0] = 0

  // Seed value for 2nd element
  series[1] = 1

  for (let i = 2; i < n; i++) {
    // Apply basic Fibonacci formulae
    series[i] = series[i - 1] + series[i - 2]
  }

  return series
}

// Print the series
console.log(fibonacci(10))
console.log(fibonacci(5))
console.log(fibonacci(20))
