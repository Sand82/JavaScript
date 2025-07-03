const arr = [1, 2, [1, "a"], "a", "b", "1", [1, 2], ["b", "a"]];

const countNumbers = (array) => {
  return array.flat(Infinity).reduce((count, item) => {
    return typeof item === "number" ? count + 1 : count;
  }, 0);
};

console.log(countNumbers(arr));
