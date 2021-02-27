// starting valley, steps, path

const countingValleys = (steps, path) => {
  let currentValley = 1;
  const arrpathh = path.split("");

  for (let i = 0; i < steps; i++) {
    if (arrpathh[i] === "D") {
      currentValley += 1;
    } else {
      currentValley -= 1;
    }
  }

  // console.log(currentValley);
  return currentValley;
};

module.exports = {
  countingValleys,
};
