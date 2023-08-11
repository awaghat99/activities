// ACTIVITY 1

const factorial = (n) => {
    if ( n === 0 || n === 1) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33))

// ACTIVITY 2 
let orderCount = 1
const takeOrder = (topping, side, orderCount) => {
    console.log(`Order Number ${orderCount}: Pizza topped with ${topping} and served with ${side}`)
    orderCount++;
}

takeOrder("pineapple", "fries", orderCount)

// ACTIVITY 3

const correctPin = '3256';
let balance = 6547;

function withdraw(pin, amount) {
  if (pin === correctPin) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      return `Withdrawal successful! Remaining balance: $${balance}`;
    } else {
      return 'Invalid withdrawal amount.';
    }
  } else {
    return 'Incorrect PIN.';
  }
}

console.log(withdraw("3256", 432))