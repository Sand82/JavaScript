function matrixDiagonals(matrix) {
  let mainDiagomnalsNumers = [];
  let secondaryDiagonalNumberss = [];

  let colCounter = matrix[0].length - 1;

  for (let row = 0; row < matrix.length; row++) {
    mainDiagomnalsNumers.push(matrix[row][row]);
    secondaryDiagonalNumberss.push(matrix[row][colCounter]);

    colCounter--;
  }

  return secondaryDiagonalNumberss;
}

const matrix = [
  [3, 4, 2, 6],
  [9, 6, 4, 5],
  [4, 6, 3, 5],
  [2, 3, 2, 7],
];

console.log(matrixDiagonals(matrix));
