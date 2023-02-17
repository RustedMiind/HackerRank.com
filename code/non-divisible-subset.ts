/*
Rules might help :
(a + b) % X = (a % X + b % X) % X,
N % X = [0 , X-1] Where N belongs to R
the numbers that is divisible by K :
- if the number = 0
- if the number = K

Explain :
[52,65,4,32,12,432,67] K=3
[1, 2, 1, 2, 0, 0, 1] we can use this array instead of the first one using the first rule.
we will take only one number that is divisible by K which has the value 0 in the array,
if the value of K/2 exist we will take only one .
then we will compare the other number with its complimentary numbers and get the larger value:
  if K = 9 , so we have the values [0,1,2,3,4,5,6,7,8]
  we check each element compared how many times its repeated in the main array.
  so we get the larger value between [1,8],[2,7],[3,6],[4,5],
  and here the middle item does not exist so we will not take it
*/

function nonDivisibleSubset(divisor: number, numbers: number[]): number {
  let result: number = 0;
  // function removeDuplicates<T>(arr: T[]): T[] {
  //   return arr.filter((item, index) => arr.indexOf(item) === index);
  // }
  function countElements<T>(arr: T[], value: T): number {
    let count: number = 0;
    for (let i in arr) {
      if (arr[i] === value) {
        count++;
      }
    }
    // console.log("value:", value, ",Count:", count);
    return count;
  }
  const reminderArr: number[] = numbers.map((num) => num % divisor);
  let howMany: number[] = [];
  for (let i = 0; i < divisor; i++) {
    howMany.push(countElements<number>(reminderArr, i));
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
