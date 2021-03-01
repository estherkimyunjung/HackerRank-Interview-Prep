const jumpingOnClouds = (couldsArr) => {
  let result = 0;

  for (let i = 1; i < couldsArr.length; i++) {
    if (couldsArr[i + 1] === 0) {
      i += 1;
      result += 1;
    } else if (couldsArr[i] === 0) {
      result += 1;
    }
  }
  // console.log(result);
  return result;
};

module.exports = {
  jumpingOnClouds,
};
