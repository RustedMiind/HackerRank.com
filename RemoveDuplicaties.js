function removeDuplicates(array) {
  const arrayModified = [];
  for (let i = 0; i < array.length; i++) {
    let indexToCompare = arrayModified.length - 1;
    for (let j = i; j < array.length; j++) {
      if (arrayModified[indexToCompare] === array[j]) {
        i++;
      } else {
        arrayModified.push(array[i]);
        break;
      }
    }
  }

  return arrayModified;
}
let array = [
  1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 9, 10, 10, 10, 11, 12, 12, 12,
  13, 14,
];

console.log(removeDuplicates(array));
