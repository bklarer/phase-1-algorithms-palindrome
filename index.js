function isPalindrome(word) {
  // Write your algorithm here
  let originalWord = word.split('')
  let reverseWord = []

  
  for(let i = originalWord.length - 1;i>=0;i--) {
    reverseWord.push(originalWord[i])
  }
  console.log(originalWord)
  console.log(reverseWord)
  
  if (originalWord.toString() == reverseWord.toString()) {
    return true
  } else {return false}
  
  
  }

/* 
  Add your pseudocode here
  - Need to separate letters into an array in reverse and then compare to the orginal
*/

/*
  Add written explanation of your solution here
  I used a for of function to create an array from the original array backwords, 
  I then compared the arrays as strings from the orginal to the reversed to see if the word can read the same backwords
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("mom"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
