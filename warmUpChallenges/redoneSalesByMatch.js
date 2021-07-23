function sockMerchant(n, ar) {
  // Write your code here
  // create hash map for the color with count of sock
  let colorMap = {};

  for (let i = 0; i < n; i++) {
    let key = ar[i];
    !colorMap[key] ? (colorMap[key] = 1) : (colorMap[key] += 1);
  }

  // div by 2 for counts and add to all color's result

  const socksColor = Object.values(colorMap);
  let result = 0;
  for (let count of socksColor) {
    result += parseInt(count / 2);
  }
  // console.log(result);
  return result;
}
