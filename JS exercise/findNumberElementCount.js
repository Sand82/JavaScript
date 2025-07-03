function findNumberElementCount(arr) {
  let valueArray = [];

  for (let i = 0; i < arr.length; i++) {
    var currElement = arr[i];

    if (typeof arr[i] === "object") {
      valueArray = [...valueArray, ...currElement];
    } else {
      valueArray.push(currElement);
    }
  }

  let count = 0;

  for (let j = 0; j < valueArray.length; j++) {
    const element = valueArray[j];

    if (typeof element === "number") {
      count++;
    }
  }

  return count;
}

let array = [1, 2, [1, "a"], "a", "b", "1", [1, 2], ["b", "a"]];
console.log(findCount(array));
