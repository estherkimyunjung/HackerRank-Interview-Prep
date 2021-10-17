function checkMagazine(magazine, note) {
  // Write your code here

  let wordKey = new Set(magazine);
  for (let word of note) {
    if (!wordKey.has(word)) {
      return console.log("No");
    }
    wordKey.delete(word);
  }
  return console.log("Yes");
}

checkMagazine(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "two", "is", "four"]
);
checkMagazine(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "three", "is", "four"]
);
