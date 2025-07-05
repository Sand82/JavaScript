function christmasEve(date) {
  return date.getMonth() === 11 && date.getDate() == 24;
}

console.log(christmasEve(new Date(2013, 11, 24)));
console.log(christmasEve(new Date(2013, 10, 24)));
