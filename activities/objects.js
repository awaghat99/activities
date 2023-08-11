// ACTIVITY 1

const person = {
    myName : "Aadil",
    age: 23,
    sayHi() {
        return `Hello, my name is ${this.myName}`
    }
}

// ACTIVITY 2
const pet = {
    petName: "Buddy",
    typeOfPet: "Dog",
    age: 3,
    color: "Grey",

    eat() {
        return `${this.petName} is eating`
    },

    drink() {
        return `${this.petname} is drinking`
    }
}

// ACTIVITY 3
const coffeeShop = {
    branch: "Cafe A",
    drinksWithPrices: {
        "Espresso": 2.5,
        "Cappuccino": 3.0,
        "Latte": 3.5,
        "Mocha": 4.0
    },
    foodWithPrices: {
        "Croissant": 2.0,
        "Sandwich": 4.5,
        "Cake": 3.5,
        "Muffin": 2.5
    },
    drinksOrdered(order) {
        let totalCost = 0;
        let orderSummary = "Your Drink Order:\n";
        for (let item of order) {
            if (item in this.drinksWithPrices) {
                orderSummary += `${item} - £${this.drinksWithPrices[item]}\n`;
                totalCost += this.drinksWithPrices[item]
            } else {
                orderSummary += `${item} is not on our menu :(\n`
            }
        }
        orderSummary += `Total Cost: £${totalCost}`
        return `${orderSummary}\n\n`
    },
    foodOrdered(order) {
        let totalCost = 0;
        let orderSummary = "Your Food Order:\n";
        for (let item of order) {
            if (item in this.foodWithPrices) {
                orderSummary += `${item} - £${this.foodWithPrices[item]}\n`;
                totalCost += this.foodWithPrices[item]
            } else {
                orderSummary += `${item} is not on our menu :(\n`
            }
        }
        orderSummary += `Total Cost: £${totalCost}`
        return `${orderSummary}\n\n`
    }
}

// Example Drink order
const drinkOrder = ["coffee", "Espresso", "Latte"]
console.log(coffeeShop.drinksOrdered(drinkOrder))
// Example Food order
const foodOrder = ["Croissant", "Cake", "Sandwich"];
console.log(coffeeShop.foodOrdered(foodOrder));