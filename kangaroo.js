// How to know if the two kangaroes will meet at a point ??
/*
  Rules we use :
  X => Position Vector
  X = X0 + S
  S => Displacment Vector
  S = V0 * t
  ----------------
  We make equation X1 = X2
  if t is negative that means that they will not meet .
  if t has decimals That means the same
  ----------------
  The rule to calculate t
  t = (X01 - X02)/(V2 - V1)
   */
function kangaroo(x1, v1, x2, v2) {
  let t = (x1 - x2) / (v2 - v1);
  if (t == Math.floor(t) && t > 0) {
    return "YES";
  }
  return "NO";
}
console.log("Will they meet at a point ? ", kangaroo(0, 3, 4, 2));
