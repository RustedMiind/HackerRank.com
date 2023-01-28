function binarySearchDesc(
  array,
  search,
  startIndex = 0,
  endIndex = array.length - 1
) {
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  if (array[middleIndex] == search) return middleIndex;
  if (startIndex > endIndex) return middleIndex + 1;
  if (array[middleIndex] < search) {
    return binarySearchDesc(array, search, startIndex, middleIndex - 1);
  } else if (array[middleIndex] > search) {
    return binarySearchDesc(array, search, middleIndex + 1, endIndex);
  }
}
let arrayData = [
  20, 19, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

console.log("Index : ", binarySearchDesc(arrayData, 18.5));
console.log("Steps : ", 0);
console.log("Array Length : ", arrayData.length);
