/*
A spoonerism is a spoken phrase in which the first 
letters of two of the words are swapped around, 
often with amusing results.

In its most basic form, 
a spoonerism is a two word phrase in which 
only the first letters of each word are swapped:
  "not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: 
words and returns a spoonerism of those words in a string, as in the above example. 

A "word" in the context of this challenge can contain any of the letters 
A through Z in upper or lower case, and the numbers 0 to 9. 

NOTE: 
  All input strings will contain only two words. 
  Spoonerisms can be more complex. For example, 
  three-word phrases in which the first letters of the first and last words are swapped - 
  "pack of lies" --> "lack of pies" or more than one letter from a word is swapped -
  "flat battery --> "bat flattery" 
  You are NOT expected to account for these, or any other nuances involved in spoonerisms.
*/


// Solution

function spoonerize(words) {
  let word = words.split(' ')
  return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
}

// or

function spoonerize(words) {
  let arr = words.split(' '),
      sub1 = arr[0].substr(0,1),
      sub2 = arr[1].substr(0,1);

  return arr[0].replace(sub1, sub2) + ' ' + arr[1].replace(sub2, sub1);
}