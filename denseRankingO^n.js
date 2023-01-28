function climbingLeaderboard(ranked, player) {
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
  let output = [];
  let noDuplicates = removeDuplicates(ranked);
  for (let i in player)
    output.push(binarySearchDesc(noDuplicates, player[i]) + 1);
  console.log(noDuplicates);
  return output;
}
console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
