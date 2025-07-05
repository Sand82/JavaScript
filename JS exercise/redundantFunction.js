function redundant(str) {
  return () => str;
}

let funk = redundant("apple");
let funk2 = redundant("banana");

console.log(funk());
console.log(funk2());
