// ACTIVITY 1

let songs = ["Hey Jude", "Sweet Caroline", "Respect"]
console.log(songs)

// ACTIVITY 1 STRETCH

songs.push("Stayin Alive", "I Will Survive")
console.log(songs)

songs.pop()
console.log(songs)

// ACTIVITY 2
// I chose splice as demonstrated in the sessions
console.log("\n")
let cars = ["BMW", "Volvo", "Audi"];
console.log(cars)
// Add a new entry at a specified index
cars.splice(1, 0, "Tesla")
console.log(cars)
// Specify how many items to delete using the second argument
cars.splice(1, 2, "Ford")
console.log(cars)
// You can also add multiple new entries
cars.splice(1, 1, "Range Rover", "Mercedes", "Nissan")
console.log(cars)

// LOOPS ACTIVITIES
// ACTIVITY 1
console.log("\n")
let movies = ["ShawShank Redemtion", "Inception", "The Godfather", "Barbie"]
movies.push("The Great Escape", "Se7en")

for (let movie of movies) {
    console.log(movie)
}

// ACTIVITY 2
console.log("\n")
for (let i = 0; i < 6; i++) {
    console.log(`Random number ${i + 1}: ${Math.floor(Math.random()*50)}`)
}

// ACTIVITY 3 
console.log("\n")
console.log("Counting down from 9")
for (let i = 9; i > 0; i--) {
    console.log(i)
}

// ACTIVITY 4
// using same array from earliar
console.log("\n\n")
for (let movie of movies) {
    console.log(movie)
}
if (movies[2] === "Ghostbusters") {
    console.log("Ghostbusters")
} else {
    console.log("BOO! we want ghostbusters")
}

// ACTIVITY 5
console.log("\n")
for (let i = 0; i < 6; i++) {
    let randomNumber  = Math.floor(Math.random()*30)
    if (randomNumber % 7 === 0) {
        console.log(`Random number ${i} is divisible by 7`)
    } else {
        console.log(`Random number ${i} is NOT divisible by 7`)
    }
}

// ACTIVITY 6 
console.log("\n") 
let bobsFollowers = ["Amy", "Dave", "Trevor", "Katy"]
let hannahsFollowers = ["Ian", "Trevor", "George", "Amy"]
let matchingArray = []

for (let i = 0; i < bobsFollowers.length; i++) {
    let bobsFollow = bobsFollowers[i]
    for (let j = 0; j < hannahsFollowers.length; j++){
        if (bobsFollow === hannahsFollowers[j]) {
            matchingArray.push(hannahsFollowers[j])
            break
        }
    }
}

console.log(`The common followers of Bob and Hannah are: ${matchingArray}`)