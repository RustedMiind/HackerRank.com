function permutationEquation(arr: number[]): number[] {
  let result: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    const X: number = i + 1;
    const FX: number = arr.indexOf(X) + 1;
    const FFX: number = arr.indexOf(FX) + 1;
    if (FFX >= 0) {
      result.push(FFX);
    }
  }
  return result;
}
console.log(permutationEquation([5, 2, 1, 3, 4]));
