// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let ways = 0;
  let temp = [];
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      let sum = ar[i] + ar[j];
      if (sum % k == 0) {
        ways++;
        temp.push(ar[i] + "+" + ar[j]);
      }
    }
  }
  return ways;
}
console.log(
  "Number of pairs : ",
  divisibleSumPairs(null, [1, 2, 3, 4, 5, 6], 5)
);
