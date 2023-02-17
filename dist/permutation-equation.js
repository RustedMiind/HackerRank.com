"use strict";
function permutationEquation(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const X = i + 1;
        const FX = arr.indexOf(X) + 1;
        const FFX = arr.indexOf(FX) + 1;
        if (FFX >= 0) {
            result.push(FFX);
        }
    }
    return result;
}
console.log(permutationEquation([5, 2, 1, 3, 4]));
