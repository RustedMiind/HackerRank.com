"use strict";
function nonDivisibleSubset(divisor, numbers) {
    let result = 0;
    function countElements(arr, value) {
        let count = 0;
        for (let i in arr) {
            if (arr[i] === value) {
                count++;
            }
        }
        return count;
    }
    const reminderArr = numbers.map((num) => num % divisor);
    let howMany = [];
    for (let i = 0; i < divisor; i++) {
        howMany.push(countElements(reminderArr, i));
        console.log("item", i, "howmany", howMany[i]);
    }
    console.log(howMany);
    result += howMany[0] ? 1 : 0;
    if (divisor / 2 === Math.floor(divisor / 2)) {
        result += howMany[divisor / 2] === 0 ? 0 : 1;
        console.log("hello");
    }
    for (let i = 1; i < divisor / 2; i++) {
        result += Math.max(howMany[i], howMany[divisor - i]);
        console.log(Math.max(howMany[i], howMany[divisor - i]));
    }
    return result;
}
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
