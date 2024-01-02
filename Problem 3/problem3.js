// Arrow function to convert a character to lower case
let toLowerCase = char => char.toLowerCase();

// Arrow function to convert a given word to lower case using the toLowerCase function
let wordToLowerCase = word => word.split('').map(toLowerCase).join('');

// Arrow function to convert an array of strings to an array of lower case strings
let arrayToLowerCase = array => array.map(wordToLowerCase);

// Sample Input
let inputArray = ["MA", "SA", "I", "SCH", "OOL"];

// Sample Output
let outputArray = arrayToLowerCase(inputArray);
console.log(outputArray); // Output: ["ma", "sa", "i", "sch", "ool"]
