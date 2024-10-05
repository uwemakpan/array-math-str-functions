// String reversal

function reverseString(str) {
  const splitString = str.split('')
  const reverseArray = splitString.reverse()
  const joinArray = reverseArray.join('')

  return joinArray
}
console.log(reverseString('best'))
