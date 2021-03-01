// const repeatedString = (str, charCount) => {
//   let strChar = str.split("");
//   let result = 0;
//   if (str.length === 1 && str === "a") {
//     return (result = charCount);
//   } else {
//     while (charCount > 0) {
//       for (let j = 0; j < str.length; j++) {
//         if (strChar[j] === "a" && charCount > 0) {
//           result += 1;
//         }
//         --charCount;
//       }
//     }
//     console.log(result);
//     return result;
//   }
// };

//'ca' is the remaining 'a' characters,
// while 'c' is the total amount of characters in the given string without the remaining.
// 'r' is the remaining that doesn't fit into the 'n', so ((n - r) / s.length * c) is the amount of characters whitout the remainings of 'a' characters.
// The remaining must be counted only if is not greater than the index (i < r). So the total amount without the remaining + the remaining 'ca' is the result.

function repeatedString(s, n) {
  // let c = 0,
  // ca = 0,
  // r = n % s.length;

  // for (let i = s.length; i-- > 0; ) {
  //   if (s.charAt(i) === "a") {
  //     ++c;

  //     if (i < r) ++ca;
  //   }
  // }

  // return ((n - r) / s.length) * c + ca;

  let count = (s.match(/a/g) || []).length * Math.floor(n / s.length);
  let remainder = n % s.length;
  let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length;

  return count + remainderCount;
}

module.exports = {
  repeatedString,
};
