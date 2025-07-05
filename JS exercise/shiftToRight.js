function shiftToRight(a, b) {
  return Math.floor(a / Math.pow(2, b));
}

console.log(shiftToRight(80, 3));
console.log(shiftToRight(4666, 6));
