function mergeSort(arr: number[]): number[] {
  const middleIndex = Math.floor(arr.length / 2);
  const firstPortion = arr.slice(0, middleIndex),
    secondPortion = arr.slice(middleIndex, arr.length);
  console.log(
    "--------------------------------------- \n ---------------------------"
  );

  console.log("arr in", arr);
  if (arr.length <= 2) {
    console.log("direct merge ", firstPortion, secondPortion);
    return mergeTwoSortedArrays(firstPortion, secondPortion);
  } else {
    console.log("recursive merge ", firstPortion, secondPortion);
    return mergeTwoSortedArrays(
      mergeSort(firstPortion),
      mergeSort(secondPortion)
    );
  }

  //  merge(sortedPortion1, sortedPortion2)
}

function mergeTwoSortedArrays(arr1: number[], arr2: number[]) {
  console.log("merging ", arr1, " with ", arr2);
  let newArr: number[] = [];
  if (!(arr1.length && arr2.length)) {
    newArr = [...arr1, ...arr2];
  } else {
    let arr2Pointer = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr2Pointer === arr2.length) {
        newArr.push(...arr1.slice(i));
        break;
      }
      while (arr2Pointer <= arr2.length) {
        if (arr1[i] <= arr2[arr2Pointer] || arr2Pointer === arr2.length) {
          newArr.push(arr1[i]);
          break;
        } else {
          newArr.push(arr2[arr2Pointer]);
        }
        arr2Pointer++;
      }
    }
    newArr.push(...arr2.slice(arr2Pointer));
  }
  console.log("merged this", newArr);
  return newArr;
}

// console.log(mergeTwoSortedArrays([3], [1, 5]));
console.log(mergeSort([3, 5, 1, 23, 5, 2, 1, 3, 6, 784, 4, 23]));
