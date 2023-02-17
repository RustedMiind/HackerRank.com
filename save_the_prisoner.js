function saveThePrisoner(chairs, candie, start) {
  // Write your code here
  let candies = candie - 1;
  if (start + candies > chairs) {
    if (start + (candies % chairs) > chairs) {
      return start + (candies % chairs) - chairs;
    }
    return start + (candies % chairs);
  }
  return start + candies;
}
