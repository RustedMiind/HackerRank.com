function pageCount(n, p) {
  let pagesFromLeft = Math.floor(p / 2);
  let pagesFromRight = n % 2 ? Math.floor((n - p) / 2) : Math.ceil((n - p) / 2);
  return Math.min(pagesFromLeft, pagesFromRight);
}
console.log("Minimun number of turns : ", pageCount(20, 4));
