function alternatingCharacters(s) {
  // Write your code here
  // console.log(s.split(""))

  let count = 0;
  const arrPath = s.split("");

  for (let i = 0; i < arrPath.length - 1; i++) {
    if (arrPath[i] === arrPath[i + 1]) {
      //(arrPath[i] === "A" && arrPath[i + 1] === "A") ||
      arrPath[i] === "B" && arrPath[i + 1] === "B";
      ++count;
    }
  }
  return console.log(count);
}

alternatingCharacters("AAAA");
alternatingCharacters("BBBBB");
alternatingCharacters("ABABABA");
alternatingCharacters("BABAB");
alternatingCharacters("AABBAABB");
