const sumArray = (arr) => {
  let total = 0;
  for (let item of arr) {
    total += item;
  }

  return total;
};

console.log(sumArray([1, 2, 3, 4, 5]));
