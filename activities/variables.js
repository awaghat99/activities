// ACTIVITY 1

let firstName = "Aadil";
let age = 23;
let favColor = "Green";

console.log(`My name is ${firstName}. My age is ${age} and my favourite colour is ${favColor}`);

// Change of variables

firstName = "John";
age = 43;
favColor = "Blue";

console.log(`My name is ${firstName}. My age is ${age} and my favourite colour is ${favColor}`);

// ACTIVITY 2 

let breakfast = "Porridge and coffee";
let lunch = "Chicken and rice";
let dinner = "Cottage pie";

console.log(`\nFor breakfast I had ${breakfast}.\nFor Lunch I had ${lunch}.\nFor dinner I had ${dinner}.\n`)

breakfast = "cornflakes";
lunch = "pizza and chips";
dinner = "lasagne";

console.log(`\nTomorrow i will have${breakfast} for breakfast.\nFor Lunch I will have ${lunch}.\nFor dinner I will have ${dinner}.\n`)

// ACTIVITY 3

const today = new Date();
const birthday = new Date(1999, 11, 19);
let timeElapsed = today - birthday;
let days = timeElapsed / (1000 * 60 * 60 * 24);

console.log(Math.floor(days));

// ACTIVITY 4

let space1 = "x";
let space2 = "o";
let space3 = "";
let space4 = "x";
let space5 = "x";
let space6 = "";
let space7 = "o";
let space8 = " ";
let space9 = "";

console.log("\n\n\n   |   |   ")
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   ")
console.log("------------")
console.log("   |   |   ")
console.log(` ${space4} | ${space5} | ${space6} `)
console.log("   |   |   ")
console.log("------------")
console.log("   |   |   ")
console.log(` ${space7} | ${space8} | ${space9} `)
console.log("   |   |   \n\n")


// ACTIVITY4 REFACTORED USING ARRAYS AND LOOPS

let spaces= ["x", "o", " ", "x", "x"," ", "o", " ", " "]

for (let i = 0; i < 3; i++) {
    console.log("   |   |   ")
    console.log(` ${spaces[i * 3]} | ${spaces[(i * 3) + 1]} | ${spaces[(i * 3) + 2]}`)
    console.log("   |   |   ")
    if (i === 2) {
        break
    }
    console.log("------------")
}