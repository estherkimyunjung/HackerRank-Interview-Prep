// n : number of socks
// ar[n] : the colors of each sock
// return : the number of pair
// input n = 7, ar = [1,2,1,2,1,3,2]
// output 2

const sockMerchant = (n, ar) => {
  let numMap = {};

  for (let i = 0; i < n; i++) {
    let key = ar[i];
    if (!numMap[key]) {
      numMap[key] = 1;
    } else {
      numMap[key] += 1;
    }
  }

  const socksColor = Object.values(numMap);

  let result = 0;

  for (let count of socksColor) {
    result += parseInt(count / 2);
  }
  // console.log(result);
  return result;
  
};


// const n = 9
// const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// //ans = 9
// salesByMatch = (n, arr) => {
//     let pairs = 0
//     const map = new Map()
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         if (map.has(num)) {
//             pairs++
//             map.delete(num)
//         } else {
//             map.set(num, 1)
//         }
//     }
//     return pairs
// }
// salesByMatch(n, arr)

module.exports = {
  sockMerchant,
};
