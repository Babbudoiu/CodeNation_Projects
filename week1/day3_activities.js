// activity 1: create a variable called age. Write an if statement that logs:"yes I can serve you"
//if age is greater than 17 and else logs "you aren't old enough".
let age = 20;
if (age > 17) {
    console.log("Yes I can serve you")
}
else  {
    console.log("You aren't old enough")
}

// activity 2: Take your if statement and add a variable called country. Now check if age>17 and country=="UK".
let age1 = 20;
let country = "UK";
if (age1 > 17 && country == "UK") {
    console.log("Yes I can serve you");
}
else {
    console.log("You aren't old enough");
}

// activity 3: Create a variable for any pizza topping.Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having sausage or onions for example, log to the console “I don’t mind having ${topping} on my pizza.” Finally, for any toppings you don’t like log ${topping} should not be on a pizza.”
let mozz = "Buffalo mozzarella";
let saus = "Sausage";
let mush = "Mushrooms";
let anch = "Anchovies";
let oliv = "Olives";
let ham = "Ham";
let pine = "Pineapple"

switch (ham) {
    case "Buffalo mozzarella":
    case "Sausage":
    case "Mushrooms":
    case "Ham":
        console.log("These are important ingredients for my pizza.");
        break;
    case "Olives":
        console.log(`I don't mind having ${oliv} on my pizza `);
        break;
    case "Pineapple":
    case "Anchovies":
        console.log(`${pine} and ${anch} should not be on a pizza`);
        break;
        default:
            console.log("No toppings selected");
}

// Challenge 1: (if/else):Create a variable called password. Check how many letters are in the password, if there are less than 8 log to the console that the password is too short. Otherwise log the password to the console.
let password = "asdfghjk";
if (password.length < 8) {
    console.log("Password is too short");
}
else {
    console.log(password);
}

// Challenge 2: (use both if/else and switch):Create a variable called num.Check if the variable is divisible by 3 or 5. If it is log “This number is divisible by 3 or 5” to the console. Otherwise log “This number is not divisible by 3 or 5”.
let num = 28;
if (num % 3 === 0 || num % 5 === 0) {
     console.log("This number is divisible by 3 or 5");
 }
 else {
     console.log("This number is not divisible by 3 or 5");
 }

 let num1 = 15

 switch (true) {
     case (num1 % 3 === 0):
     case (num1 % 5 === 0):
         console.log("This number is divisible by 3 or 5");
         break;
     default:
         console.log("This number is not divisible by 3 or 5");
 }

// Challenge 3: Create a variable called num.If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.
let num2 = 15;

switch (true) {
    case (num2 % 3 === 0 && num2 % 5 === 0):
        console.log("fizz buzz");
        break;
    case (num2 % 5 === 0):
        console.log("buzz");
        break;
    case (num2 % 3 === 0):
        console.log("fizz");
        break;
    default:
        console.log(num2);
}

// Challenge 4: Create a variable called num.Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).
 const num3 = 1001;

 if(num3.toString().split("").reverse().join("") === num3.toString()) {
    console.log(`${num3} is a palindrome`);
 }
 else {
     console.log(`${num3} is not a palindrome`);
 }

// Challenge 5: Create a variable called time, a variable called placeOfWork and a variable called townOfHome.Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = 22;
let placeOfWork = "Manchester";
let townOfHome = "Liverpool";

if (time === 9) { 
    console.log("I am awake");
}
else if (time > 9 && time <= 17) {
    console.log(`I am working in ${placeOfWork}`);
}
else if (time > 17 && time <= 23) {
    console.log(`I am chilling at home in ${townOfHome}`);
} 
else {
    console.log("Still sleeping!!");
}

// Challenge 6: Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.Find the index of a last vowel in the string.
let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
console.log(string.lastIndexOf("i"));

// Challenge 7: Create a variable called word that takes a string.Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.
let word = "sensations"

if(word.endsWith() === word.startsWith()) {
   console.log("true");
}
else {
    console.log("false");
}

// Challenge 8: Create two variables called num1 and num2.Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.
let num4 = 5;
let num5 = 8;

if( (num4 + num5) % 2 == 0 ) {
    console.log(num4 + num5);
}
else {
    console.log(num4 * num5);
}

// Extra. write and if statement that checks the ages of the cinema goers, and display the ticket prices:
// child below age of 18 : £8, adult 18+: £10.95, senior 60+ : £7.50
let ageC = 59;
let child = 8 ;
let adult = 10.95;
let senior = 7.50;

if (ageC < 18 ) {
    console.log(`child price is ${child} pounds`);
}
else if (ageC > 18 && ageC < 60) {
    console.log(`adult price is ${adult} pounds`);
}
else {
    console.log(`senior price is ${senior}`);
}
