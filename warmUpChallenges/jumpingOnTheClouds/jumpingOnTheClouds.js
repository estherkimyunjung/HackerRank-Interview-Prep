const jumpingOnClouds = (couldsArr) => {
  let result = 0;

  //always start in [0] so check 2jumps then 1jump
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
