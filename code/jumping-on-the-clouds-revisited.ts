function jumpingOnClouds(jumps: number, clouds: number[]): number {
  // Circular access to array formula [(i % n + n) % n]
  // where i is the index of the loop, n is the length of the array.
  let energy: number = 100;
  const n: number = clouds.length;
  let i: number = 0;
  while (((i % n) + n) % n || energy === 100) {
    if (clouds[((i % n) + n) % n]) energy -= 3;
    else energy--;
    i += jumps;
  }
  return energy;
}
console.log(jumpingOnClouds(2, [0, 0, 1, 0, 0, 1, 1, 0]));
