// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
function birthday(s, d, m) {
  // Write your code here
  let ways = 0;
  for (let i = 0; i + m <= s.length; i++) {
    let sum = 0;
    for (let x = 0; x < m; x++) {
      sum += s[i + x];
    }
    if (sum == d) {
      ways++;
    }
  }
  return ways;
}
console.log("Ways : ", birthday([1, 2, 1, 3, 2], 3, 2));
