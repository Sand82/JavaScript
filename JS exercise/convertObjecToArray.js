function toArray(obb) {
  return Object.entries(obb);
}

let obb = { a: 1, b: 2 };
console.log(JSON.stringify(toArray(obb)));
