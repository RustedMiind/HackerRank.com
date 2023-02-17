function repeatedString(s: string, n: number): number {
  // Write your code here
  function countElements(arr: string, value: string): number {
    let count: number = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        count++;
      }
    }
    // console.log("value:", value, ",Count:", count);
    return count;
  }
  const COUNT = countElements(s, "a");
  const RATIO = COUNT / s.length;
  let result = (n - (n % s.length)) * RATIO;
  for (let i = 0; i < n - (n - (n % s.length)); i++) {
    if (s[i] == "a") {
      result += 1;
    }
  }
  return Math.floor(result);
}
console.log(
  repeatedString(
    "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
    736778906400
  )
);
