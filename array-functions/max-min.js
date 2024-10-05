// Finding the maximum and minimum of an array of numbers

const maxMin = (arr) => {
  // const maxNum = arr[0]
  const maxNum = arr.reduce(
    (highest, element) => (element > highest ? element : highest),
    arr[0]
  )

  const minNum = arr.reduce(
    (lowest, element) => (element < lowest ? element : lowest),
    arr[0]
  )

  return { lowest: minNum, higest: maxNum }
}

console.log(maxMin([5, 7, 2, 3, 5, 45, 6]))
console.log(maxMin([55, 67, 82, 33, 55, 65, 8]))
console.log(maxMin([553, 670, 829, 337, 556, 645, 83]))
