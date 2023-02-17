function circularArrayRotation(array, rotations, queries) {
  // Write your code here
  let accualRotations = rotations,
    popped = [];
  if (rotations >= array.length) {
    accualRotations = rotations % array.length;
  }
  for (let i = 0; i < accualRotations; i++) {
    popped.push(array.pop());
  }
  popped.reverse();
  array.splice(0, 0, ...popped);
  const result = [];
  for (let i in queries) {
    result.push(array[queries[i]]);
  }
  console.log(result);
}
circularArrayRotation(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  15,
  [0, 1, 2, 3]
);
function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
}
getCountryName(10);
