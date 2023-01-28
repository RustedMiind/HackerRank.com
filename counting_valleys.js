function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0,
    level = 0;
  for (let i in path) {
    level === 0 && path[i] === "D" ? (valleys += 1) : null;
    path[i] === "D" ? (level -= 1) : (level += 1);
  }
  return valleys;
}
console.log("Valleys : ", countingValleys("DDDUUUUUUUDDDUUDUUDUUDDDDUDUUDU"));
