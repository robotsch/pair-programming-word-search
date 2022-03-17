const wordSearch = (letters, word) => {
  // Pair Programmed
  // @law86, robotsch

  // Convert each array to a string
  const horizontalJoin = letters.map((ls) => ls.join(""));
  // Loop through each string
  for (const l of horizontalJoin) {
    // Return true if word is included in string
    if (l.includes(word)) return true;
  }
  // Loop through entire array
  for (let i = 0; i < letters[0].length; i++) {
    const newColumn = [];
    // Loop through columns
    for (let j = 0; j < letters.length; j++) {
      // Add each letter to new array
      newColumn.push(letters[j][i]);
    }
    // Return true if stringified array includes given word
    if (newColumn.join("").includes(word)) return true;
  }
  // Return false after all checks
  return false;
};

module.exports = wordSearch;