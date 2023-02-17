"use strict";
function repeatedString(s, n) {
    function countElements(arr, value) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                count++;
            }
        }
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
console.log(repeatedString("kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm", 736778906400));
