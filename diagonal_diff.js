function diagonalDifference(arr) {
  // Write your code here
  let rowLength = arr.length - 1,
    rtl = 0,
    ltr = 0;
  for (let i in arr) {
    rtl += arr[i][i];
    ltr += arr[i][rowLength - i];
  }
  let diff = Math.abs(ltr - rtl);
  return diff;
}
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
