// Extract the last four characters from the string below;"extravaganza"


const word = " extravaganza";
console.log(word [9]);
console.log(word[10]);
console.log(word[11]);
console.log(word[12]);




// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = 'The quick Fox jumped over the lazy dog';
const string = food.slice(0,4) + " " + "eat" + food.slice(4);
console.log({string});


// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story = 'The quick brown fox jumps over the lazy dog';
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);


// Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = 'The pupils are reading in the library';
console.log({index: string1.indexOf('are')});


const string2 = 'The child was sitting on the table before it fell';
console.log({index: string2.indexOf('sitting')});


// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
 let capital = 'wonderful';
 let uppercasecapital = capital.toUpperCase();
 console.log({uppercasecapital});


 let lower = 'amazing '+ 'UndERneath';
 let lowercaselower = lower.toLowerCase();
 console.log({lowercaselower});

//  let comment = 'A wonderful world';
//  let titlecasecomment =comment.title();
//  console.log({titlecasecomment});









