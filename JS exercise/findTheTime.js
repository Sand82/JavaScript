function fintTheTime(text) {
  const regex = /(?<!\d)\d{2}:\d{2}(?!\d)/g;
  const matches = [...text.matchAll(regex)];
  return matches.map((m) => m[0]);
}

let text = "Breakfast at 09:00 and again at 10:30 in room 123:456.";
console.log(fintTheTime(text));
