function generateArray(length: number): number[][] {
  return Array.from({ length }, () => []);
}

function radixSort(
  arr: number[],
  powOf10: number = 0,
  maxLength?: number
): number[] {
  const columns = generateArray(10);
  arr.forEach((n) => {
    const digit = getDigit(n, powOf10);
    columns[digit].push(n);
  });
  const semiSorted = columns.flat(2);
  if (powOf10 === maxLength) return semiSorted;
  return radixSort(
    semiSorted,
    powOf10 + 1,
    maxLength || getDigitCount(Math.max(...semiSorted))
  );
}

function getDigit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getDigitCount(num: number): number {
  return Math.abs(num).toString().length;
}

console.log(radixSort([5, 2, 1, 8, 4, 7, 6, 3, 1, 5, 2, 3, 6, 8]));
