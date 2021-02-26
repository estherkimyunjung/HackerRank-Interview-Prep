function getIndex(char) {
  return isLetter(char) ? char.toUpperCase().charCodeAt(0) - 65 : 26;
}

function isLetter(char) {
  return char.toLowerCase() != char || char.toUpperCase() != char;
}

module.exports = {
  getIndex,
};
