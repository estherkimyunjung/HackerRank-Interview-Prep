// starting valley, steps, path

const countingValleys = (steps, path) => {
  let result = 0;
  let currentValley = 1;
  const arrpath = path.split("");

  for (let i = 0; i < steps; i++) {
    if (arrpath[i] === "U") {
      currentValley += 1;
    } else {
      currentValley -= 1;
    }

    if (currentValley === 0 && arrpath[i] === "D") {
      ++result;
    }
  }
  console.log(result);
  return result;
};

module.exports = {
  countingValleys,
};
