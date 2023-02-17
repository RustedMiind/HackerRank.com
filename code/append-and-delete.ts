/*
-Get the least number of operations to change the array value:
  L.O. = Arr1.length + arr2.Length - (2 * identical elements)
    ## identical elements must start from index 0 and be sequentional on both arrays ##
-Conditions to return "Yes":
  L.O. = Expexted operations
  if the two arrays are identical
    if the expected operations >= x2 times the array length
    or if the expected operations value is even number
  if initial string included in the desired string And the diff between them <= expected operations
    if expected operations >= Arr1.length + arr2.Length
    or if the diff between them is the same type as expected operations ## odd or even ##
*/
function appendAndDelete(
  inital: string,
  desired: string,
  expected: number
): string {
  let matchesIn: number = 0;
  if (desired.length + inital.length <= expected) return "Yes";
  for (let i: number = 0; i < desired.length; i++) {
    if (inital[i] !== desired[i]) {
      matchesIn = i;
      break;
    }
    if (i === desired.length - 1)
      matchesIn = Math.min(desired.length, inital.length);
  }
  const leastOperations: number =
    inital.length + desired.length - matchesIn * 2;
  if (leastOperations === expected) return "Yes";
  else if (inital === desired) {
    if (expected >= inital.length * 2) {
      return "Yes";
    } else if (expected % 2 === 0) {
      return "Yes";
    }
  } else if (matchesIn === inital.length || matchesIn === desired.length) {
    if (expected >= inital.length + desired.length) return "Yes";
    else if (Math.abs(inital.length - desired.length) % 2 === expected % 2)
      return "Yes";
  }
  return "No";
}

console.log(appendAndDelete("ysaau", "ysa", 6));

("hackerRan");
("hacker");
