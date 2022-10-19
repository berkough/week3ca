// ---------- WEEK 3 CODING ASSIGNMENT ---------- \\

let sum = 0; // Define this here, we're going to keep reusing it.

// ---------- Step 1: ---------- \\
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Subtracting the first element of the array from the last: "+(ages.slice(-1)-ages.slice(0,1))); // Step 1a
ages.push(45); // Step 1b
console.log("... and after pushing 45 to the end of the array: "+(ages.slice(-1)-ages.slice(0,1)));

// Step 1c:
for (i = 0; i < ages.length; i++){
    sum += ages[i];
}
let averageAge = (sum/ages.length).toFixed(2);
console.log("The average age is: "+averageAge);

// ---------- Step 2: ---------- \\
let names = ['Sam','Tommy','Tim', 'Sally', 'Buck', 'Bob'];

// Step 2a
sum = 0; //Set sum back to zero.
for (i = 0; i < names.length; i++){
    sum += names[i].length;
}
let averageNameLength = (sum/names.length).toFixed(2);
console.log("The average length of the names in our array is: "+averageNameLength);

/* Alternatively, we can use .map() and reduce:
sum = 0; //Set sum back to zero.
let names2 = names.map(function(element){
    return element.length;
});
sum = names2.reduce(function(accumlator, currentValue){
    return accumlator + currentValue;
});
let avNameLength2 = (sum/names.length).toFixed(2);
console.log("The alternative for average name length: "+avNameLength2);
*/

// Step 2b
let superString = '';
for (i = 0; i < names.length; i++){
    superString += names[i] + ' ';
}
console.log("Here is a concatenated string of our names: "+superString);

// ---------- Step 5: ---------- \\
let nameLengths = names.map(function(element){
    return element.length;
});

// ---------- Step 6: ---------- \\
sum = 0;
for (i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}
console.log(sum);

// OR, we can do this:
sum = 0;
sum = nameLengths.reduce(function(accumlator, currentValue){
    return accumlator + currentValue;
});
console.log(sum);

// ---------- Step 7: ---------- \\
function repeatWord(word, n){
    return word.repeat(n);
}
console.log(repeatWord('Hello', 3));
