// const rotLeft = (a, d) => {
//   // Write your code here
//   let result = a;
//   for (let i = 0; i < d; i++) {
//     result.push(result[0]);
//     result.shift();
//   }
//   return console.log(result);
// };

const rotLeft = (a, d) => {
  // Write your code here
  const newIndex = d % a.length;
  const newArr = a.splice(0, newIndex);
  a.push(...newArr);
  return console.log(a);
};

rotLeft([1, 2, 3, 4, 5], 4);
