function countTrue(arr) {
  return arr.reduce((acc, val) => (val ? (acc += 1) : acc), 0);
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, true, false]));
console.log(countTrue([]));
