// Problem 1 : Reverse a String: Write a program to reverse a given string. For example, if the
// input is "hello," the output should be "olleh."

var string = "hello";
var newString = "";

for (let i = string.length - 1; i >= 0; i--) {
  newString += string[i];
}
console.log(newString);
console.log("-----------------------------------------------");

// Problem 2: Count Vowels and Consonants: Write a program to count the number of
// vowels and consonants in a given string.

var str = "Hello World";
var vowels = "aeiouAEIOU";
var consonents = "bcdfghjklmnpqsrtvwxyzBCDFGHJKLMNPQRSTVWXYZ";
var countVowel = 0;
var countConsonent = 0;

for (var i = 0; i < str.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (str[i] === vowels[j]) {
      countVowel++;
    }
  }
  for (var k = 0; k < consonents.length; k++) {
    if (str[i] === consonents[k]) {
      countConsonent++;
    }
  }
}
console.log("vowels", countVowel);
console.log("Consonent", countConsonent);
console.log("-----------------------------------------------");

// Problem 3: Check Palindrome: Write a program to check if a given string is a palindrome
// (reads the same forwards and backwards). For example, "racecar" is a
// palindrome.

var str2 = "racecar";
var newStr2 = "";

for (let i = str2.length - 1; i >= 0; i--) {
  newStr2 += str2[i];
}

if (newStr2 === str2) {
  console.log("It's palindrome");
} else {
  console.log("it's not a palindrome");
}
console.log("-----------------------------------------------");

// Problem 4 : Write a program to convert the first character of each
// word in a sentence to uppercase and the rest to lowercase.

var string = " hello my name is pawan";
var small = "abcdefghijklmnopqrstuvwxyz";
var captial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var strArr = [];
var newStr = "";

for (let i = 0; i < string.length; i++) {
  strArr[i] = string[i];
}

for (let j = 0; j < strArr.length; j++) {
  for (let k = 0; k < small.length; k++) {
    if (strArr[j] === " " && strArr[j + 1] === small[k]) {
      strArr[j + 1] = captial[k];
    }
  }
}
string = "";
for (let l = 0; l < strArr.length; l++) {
  string += strArr[l];
}

console.log(string);
console.log("-----------------------------------------------");

// Problem 5 : Remove Duplicates: Write a program to remove duplicate characters from a
// string while maintaining the original order. For example, "hello" becomes "helo."

var name = "pawan";
var array = [];

for (let i = 0; i < name.length; i++) {
  array[i] = name[i];
}
console.log(array);

for (let j = 0; j < array.length; j++) {}
console.log("-----------------------------------------------");

// Problem 6 : Write a JavaScript program that removes all occurrences of the character 'a' from a given string.

var string = "javascript";
var result = "";

for (let i = 0; i < string.length; i++) {
  var char = string[i];

  if (char !== "a" && char !== "A") {
    result += char;
  }
}
console.log(result);
console.log("-----------------------------------------------");

// Problem 7 : You are given an array of names containing a list of names. Your task is to count
// the number of names that start with either 'N' or 'n'.

var names = ["Nathan", "John", "Alice", "Nancy", "Bob", "neema"];
var nameNcount = 0;

for (let i = 0; i < names.length; i++) {
  if (names[i][0] === "N" || names[i][0] === "n") {
    ++nameNcount;
  }
}
console.log("Name of N name is ", nameNcount);
console.log("-----------------------------------------------");

// Problem 8 :
// You are given a lowercase string input . Your task is to convert this string to
// uppercase without using any built-in string methods.
// Input : input = "hello"
var inputString = "hello";
var uppercaseString = "";
for (var i = 0; i < inputString.length; i++) {
  var char = inputString[i];
  var asciiValue = inputString.charCodeAt(i);
  if (asciiValue >= 97 && asciiValue <= 122) {
    // 'a' to 'z'
    let uppercaseChar = String.fromCharCode(asciiValue - 32);
    uppercaseString += uppercaseChar;
  } else {
    uppercaseString += char;
  }
}

// Example usage:
console.log(uppercaseString); // Output: HELLO WORLD
console.log("-----------------------------------------------");
