// Function to filter out all passing grades from an array
const filterArr = (arr) => {
  const passed = arr.filter((score) => score >= 50)

  return passed
}

console.log(filterArr([45, 56, 78, 35, 56, 98, 72, 39]))
