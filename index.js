// Week 3 Coding Assignment
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Subtracting the first element of the array from the last: "+(ages.slice(-1)-ages.slice(0,1)));
ages.push(45);
console.log("... and after pushing 45 to the end of the array: "+(ages.slice(-1)-ages.slice(0,1)));

// A variable to hold the sum of our ages.
let sum = 0;

// Now to Loop through the array and add the values. 
for (i = 0; i < ages.length; i++){
    sum += ages[i];
}
// Define the average as the total divided by the number of ages.
let averageAge = (sum/ages.length).toFixed(2);
console.log("The average age is: "+averageAge);

//Our Array of names.
let names = ['Sam','Tommy','Tim', 'Sally', 'Buck', 'Bob'];

//We can re-use the sum variable, just set it back to zero.
sum = 0;

//Let's loop through each of the names and count lengths
for (i = 0; i < names.length; i++){
    sum += names[i].length;
}

//Let's defind out average name length.
let avNameLength = (sum/names.length).toFixed(2);
console.log("The average length of the names in our array is: "+avNameLength);

//We need a variable to hold the concatenation of our names from the names array.
let superString = '';

//Time to loop through the names and dump them to our superString variable.
for (i = 0; i < names.length; i++){
    superString += names[i] + ' ';
}

//Now we want to output the contents of superString.
console.log("Here is a concatenated string of our names: "+superString);