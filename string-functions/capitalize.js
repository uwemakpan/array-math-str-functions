// Function to capitalize each first letter of every word in a sentence
function capitalize(str) {
  const splitString = str.split(' ')

  const joined = splitString.map((el) => el.split(' ').join(''))

  const capEachWord = joined.map((el) =>
    el
      .split('')
      .map((word, index) => (index === 0 ? word.toUpperCase() : word))
      .join('')
  )

  const finalSentence = capEachWord.join(' ')
  return finalSentence
}

// Test the function
console.log(capitalize('this is awesome code'))
console.log(capitalize('he that dwelleth in the secret place of the most high'))
console.log(capitalize('the only way out is through'))
