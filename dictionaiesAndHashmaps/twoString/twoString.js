// input 2 string a String vs b string  to find out if they share same chars or substring.
// return YES or NO

// example
// s1 = 'and'
// s2 = 'art'
// share the a - > return YES

// a1 = 'hello'
// a2 = 'world'
// share the l, o -> return YES

// b1 = 'hi'
// b2 = 'world'
// there is no share char => return NO

// first string to split and create hashmap with char - > key
// make hash
const isCharInString = (str1, str2) => {
  const charKey = new Set(str1);
  let resultCount = 0;

  // then loop though the string with each unic char, value will counts of char
  // with key I will compare the string secod to find char is inclue or not
  for (let key of charKey) {
    if (str2.includes(key)) {
      resultCount += 1;
      console.log("Yes");
    }
  }

  // return Y, N
  if (resultCount === 0) {
    return "NO";
  } else {
    return "YES";
  }
};

isCharInString("hello", "yes");
