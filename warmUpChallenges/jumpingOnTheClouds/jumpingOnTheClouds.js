const jumpingOnClouds = (couldCounts, couldType) => {
  couldType = couldType.split("");
  let result = 0;

  for (let i = 0; i < couldCounts; i++) {
    if (couldType[i + 1] === "0") {
      i += 1;
      result += 1;
    } else if (couldType[i] === "0" && i !== 0) {
      result += 1;
    }
  }
  console.log(result);
  return result;
};

module.exports = {
  jumpingOnClouds,
};
