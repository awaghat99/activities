// ACTIVITY 1

let age = 20;

if (age > 17) {
    console.log("Yes, I can serve you")
} else {
    console.log("You are not old enough")
}

// ACTIVITY 1 STRETCH
let country = "USA"

if (age >= 21 && country == "USA" ) {
    console.log("Yes, I can serve you")
} else if (age >= 18 && country == "UK") {
    console.log("Yes, I can serve you")
} else {
    console.log("Sorry, you are not old enough in your country")
}

// ACTIVITY 2
console.log("\n")
let pizzaTopping = "pineapple"

switch (pizzaTopping) {
    case "pepperoni":
        console.log(`${pizzaTopping} is a good choice on a pizza`)
        break;
    case "sweetcorn":
        console.log(`I like ${pizzaTopping} on my pizza`)
        break;
    case "peppers":
        console.log(`putting ${pizzaTopping} on your pizza is acceptable`)
        break;
    case "pineapple":
        console.log(`${pizzaTopping} does not belong on pizza! You deserve jail time`)
        break;
    default:
        console.log(`No toppings on pizza is fine too`)
}   

// ACTIVITY 3
console.log("\n")
let password = "34 hO4w ma7ny";
const regex = /[A-Za-z]/g;
const lettersArray = password.match(regex);

if (lettersArray.length < 8) {
    console.log("Not enough letters in this password")
} else {
    console.log(`${password} has enough letter. Strong password!`)
}

// ACTIVITY 4
console.log("\n")
let num = 75;

switch(true) {
    case num % 5 === 0 && num % 3 === 0:
        console.log("Fizz Buzz")
        break;
    case num % 5 === 0:
        console.log("buzz")
        break;
    case num % 3 === 0:
        console.log("fizz")
        break;
    default:
        console.log("No fizzing or buzzing")
}

// ACTIVITY 5 
console.log("\n")
let palNum = 123454321;
let convertedToString = palNum.toString();
let reversed = convertedToString.split("").reverse().join("");
console.log(reversed);

if (reversed == palNum) {
    console.log("We have a Palindrome!")
} else {
    console.log("This number is not a palindrome")
}

// ACTIVITY 6
console.log("\n")
let time = 800;
let placeOfWork = "Code Nation";
let townOfHome = "Blackburn";

if (time >= 700 && time < 800) {
    console.log("Getting ready for work");
} else if (time >= 800 && time < 900) {
    console.log("Commuting...");
} else if (time >= 900 && time < 1700) {
    console.log(`Hard at work at ${placeOfWork} `);
} else if (time >= 1700 && time < 2100) {
    console.log("Home time")
} else {
    console.log("Bed time")
}

// ACTIVITY 7
console.log("\n")
let randomString = "rtevbidith";
let currentIndex = 0;
const charChecker = ["a", "e", "i", "o", "u"]

for (let i = 0; i < randomString.length; i++) {
    if (charChecker.includes(randomString[i])) {
        currentIndex = i;
    }
}

console.log(`The index of the last appearing vowel is ${currentIndex}`)

// ACTIVITY 8 
console.log("\n")
let word = "random";

if (word[0] === word[word.length - 1]) {
    console.log("This word has the same starting and ending letter")
} else {
    console.log("This word has a different starting and ending letter")
}

// ACTIVITY 9
console.log("\n")
let num1 = 87;
let num2 = 54;
let sumNum = num1 + num2;

if (sumNum % 2 === 0){
    console.log(`The sum is even and as follows: ${sumNum}`)
} else {
    console.log(`The sum is odd but here is the product: ${num1 * num2}`)
}