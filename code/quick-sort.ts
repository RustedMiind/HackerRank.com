function quickSort(arr: number[]): number[] {
  if (arr.length === 0 || arr.length === 1) return arr;
  let pivotIndex = 0;
  const smallerValues: number[] = [];
  const largerValues: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    const pivot = arr[pivotIndex],
      current = arr[i];

    if (current > pivot) {
      largerValues.push(current);
    } else {
      smallerValues.push(current);
    }
  }
  return [
    ...quickSort(smallerValues),
    arr[pivotIndex],
    ...quickSort(largerValues),
  ];
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3, 1, 5, 2, 3, 6, 8]));
