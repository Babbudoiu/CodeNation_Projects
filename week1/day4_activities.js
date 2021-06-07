// Activity 1: Create a function that takes two parameters for a coffee order (size, type of drink).
const drinkOrder = (size, tod) => {
    console.log(`You just ordered a ${size} ${tod}!`);
}
drinkOrder ("Large", "Cappuccino");

// Activity 2: Take this code and turn it into arrow function syntaxfunctionfactorial (n) {if ((n === 0) || (n === 1)) {return1;    } else {return (n * factorial(n-1));    }}console.log(factorial(33));

const factorial = (n) => {
   if ((n === 0) || (n === 1)) {
       return 1;
   } else {
       return (n * factorial(n-1));
   }
}

console.log(factorial(33));

// Activity 3: Here's an example of a function that includes a parameter.Parameters are responsible for functions being able to work on different data inputs. Edit the snippet below to include two parameters and a running order count updated when the function is called. 
let orderCount = 0; 
const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1}, ${topping2}`);
    orderCount+=1;
}
takeOrder("pineapple", "mushrooms");
takeOrder("cheese", "onions")
console.log(orderCount);

// Activity 4: Cash machine time. Let’s create one that: dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw. Be creative!

let isPinCorrect = false;
let cardPin = "1234";
let insertedPin = "1234";
let op1 = "Withdraw";
let op2 = "Check balance";
let availBal = 500;
let withdraw = 200;
const getCash = () => {
    if (cardPin === insertedPin) {
        isPinCorrect = true;
    }
    if (isPinCorrect === true) {
        console.log("Pin correct. Select option: Withdraw or Check balance");
        console.log(`your available balance is ${availBal} pounds`);
        console.log("How much would you like to withdraw?");
        if (withdraw <= availBal) {
            console.log(`You have selected to withdraw ${withdraw} pounds.`);
        } else {
            console.log("Not enough funds");
        }
    } else {
        console.log("Incorrect Pin");
    }
}
getCash ();

// Activity 5 : Lets go back to our naughts and crosses board. Write an if statement that checks for all possible conditions of winning, whether it’s across in one of the rows or columns, or diagonally.

let grid = [
      ['X', 'X', '0'],
      ['0', 'X', '0'],
      ['0', '0', 'X']
];

let line1 = grid[0];
let line2 = grid[1];
let line3 = grid[2];

if (line1[0] === line2[1] && line3[2] === line1[0] || line1[2] === line2[1] && line3[0] === line1[2] || line1[0] === line2[0] && line3[0] === line1[0] || line1[1] === line2[1] && line3[1] === line1[1] || line1[2] === line2[2] && line3[2] === line1[2] || line1[0] === line1[1] && line1[2] === line1[0] || line2[0] === line2[1] && line2[2] === line2[0] || line3[0] === line3[1] && line3[2] === line3[0]) {
    console.log("Winner with or operator");
}
else {
    console.log("Lost with or operator!!!");
}

// or

if (line1[0] === line2[1] && line3[2] === line1[0]) {
    // first diagonal check
    console.log("Winner!!!");
}
else if (line1[2] === line2[1] && line3[0] === line1[2]){
    // second diagonal check
    console.log("Winner!!!");
}
else if (line1[0] === line2[0] && line3[0] === line1[0]) {
    // first vertical check
    console.log("Winner!!!");
}
else if (line1[1] === line2[1] && line3[1] === line1[1]) {
    // second vertical check
    console.log("Winner!!!");
} 
else if (line1[2] === line2[2] && line3[2] === line1[2]){
    // third vertical check
    console.log("Winner!!!");
}
else if (line1[0] === line1[1] && line1[2] === line1[0]){
    // first horizontal check
    console.log("Winner!!!");
}
else if (line2[0] === line2[1] && line2[2] === line2[0]){
    // second horizontal check 
    console.log("Winner!!!");
}
else if (line3[0] === line3[1] && line3[2] === line3[0]){
    // third horizantal check 
    console.log("Winner!!!");
}
else {
    console.log("Lost!!!");
}


