function numOfDigits(num) {
  return Math.abs(num).toString().length;
}

console.log(numOfDigits(-1000))
console.log(numOfDigits(1000))
console.log(numOfDigits(10))
console.log(numOfDigits(0))