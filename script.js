function findFirstNonRepeatingChar() {
  const inputString = prompt("Enter a string:");

  const charCount = {};


  for (let char of inputString) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  
  for (let char of inputString) {
    if (charCount[char] === 1) {
      alert(char);
      return;
    }
  }

  alert("No non-repeating character found.");
}
findFirstNonRepeatingChar();


