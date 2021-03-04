const countSwaps = (arr) => {
  let isSortArray = false;
  let lastUnsorted = arr.length - 1;
  let count = 0;

  while (!isSortArray) {
    isSortArray = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSortArray = false;
        count += 1;
      }
    }
    lastUnsorted -= 1;
  }

  return `Array is sorted in ${count} swaps., First Element: ${
    arr[0]
  }, Last Element: ${arr[arr.length - 1]}`;
};

// countSwaps([6, 4, 1]);

module.exports = {
  countSwaps,
};
