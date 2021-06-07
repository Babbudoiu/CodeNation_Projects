// activity 1: Create a program that stores someone's name , age and favourite colour that logs into the console in a complete sentence.
let name1 ="Mattia";
let age =28;
let favCol ="Blue";
console.log(` ${name1} ${age} ${favCol} `);
// or
let gen = ["Mattia", 28, "blue"];
console.log(gen);

// activity 2: Create a program that stores what you eat today for breakfast, lunch and dinner, log those into the console.
// update each of these variables to what you will eat tomorrow, log these into the console.
let todayBreak = "milk and biscuits";
let todayLunch = "pasta with pesto";
let todayDinner = "chicken sandwitch";
console.log(`my breakfast today was ${todayBreak},  my lunch today was ${todayLunch},  my dinner today will be ${todayDinner}`);
let tomoBreak = "eggs";
let tomoLunch = "mushrooms risotto";
let tomoDinner = "tuna salad";
console.log(`my breakfast tomorrow will be ${tomoBreak}, my lunch tomorrow will be ${tomoLunch}, my dinner tomorrow will be ${tomoDinner}`);
// or
let todayMeals = ["My breakfast today was milk and biscuits, for lunch i had pasta with pesto and my dinner will be a chicken sandwitch"];
console.log(todayMeals);
let tomorrowMeals = ["My brakfast tomorrow will be eggs , for lunch i will have a mushrooms risotto and as dinner i will have a tuna salad"];
console.log(tomorrowMeals);

// activity 3: create a program that calculate the number of days from today to your birth date. Create variables that store your birth date, and today's date.
let birthday = new Date(`12/13/2021`);
let todayDate = new Date();
let timeMissing = todayDate.getTime() - birthday.getTime();
let daysMissing = timeMissing / (1000 * 3600 * 24);
console.log(`my birthday is  ${birthday} , today is ${todayDate}, time missing until my birthday ${timeMissing}, days missing until my birthday ${daysMissing}`);

// activity 4: create a 9 variables (space 1 to 9), assign either the value "x", "o", "" to each of these variables, insert the variables into the board using the
// ${varname} syntax.
let space1 = "X";
let space2 = "O";
let space3 = "X";
let space4 = "";
let space5 = "O";
let space6 = "";
let space7 = "X";
let space8 = "X";
let space9 = "O";
let grid1 = [ " | | ", `${space1}|${space2}|${space3}`," | | ","-----------"," | | ",`${space4}|${space5}|${space6}`," | | ","-----------"," | | ",`${space7}|${space8}|${space9}`," | | "];
let q = 0
do{console.log(grid1[q]);q++}
while(q<11);


var grid = [
      ['X', ' ', 'X'],
      ['O', ' ', ' '],
      ['X', 'O', ' ']
    ];
    //example update coord
    grid[0][1]="O";
    // this will loop y coord
    for (var i = 0; i < grid.length; i++){ 
          var line ="";
          // this will loop x coord (inners)
          for (var j = 0; j < grid[i].length; j++){
            // line concatanate with the 2nd level of nested data
              line = line+grid[i][j]; 
              //grid[i].length is 3 so -1 to print two | 
              //using length-1 - can easily find last iteration of grid
              if(j !== grid[i].length-1){
              //different line to make conditional
              line = line + ' | ';
              }
          }
    //print line created through 2nd for
          console.log(line);
          //same as above for grid.length 
          if(i !== grid.length-1){
            console.log("----------");
          }
      }

    let grid = [
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9']
        ];
    console.log(grid[0][0]); // Output: 1
    console.log(grid[0][1]); // Output: 2
    console.log(grid[0][2]); // Output: 3
    console.log(grid[1][0]); // Output: 4
    console.log(grid[1][1]); // Output: 5
    console.log(grid[1][2]); // Output: 6
    console.log(grid[2][0]); // Output: 7
    console.log(grid[2][1]); // Output: 8
    console.log(grid[2][2]); // Output: 9
    //When we work with arrays normally:
let arrayName = ["h", "e", "l", "l", "o"];
//We treat it like a list in order to access the information:
//[0] would return "h"
//[1] would return "e"
//[2] would return "l"
//[3] would return "l"
//[4] would return "o"
//and access of said information would be written like this:
console.log(arrayName[0]);
console.log(arrayName[1]);
//...etc
//arrayName[#] being important here
//In your example it's a little different, we treat it as a 2 dimensional grid with an X and a Y axis:
let grid = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9']
    ];
console.log(grid[0][0]); // Output: 1
console.log(grid[0][1]); // Output: 2
console.log(grid[0][2]); // Output: 3
console.log(grid[1][0]); // Output: 4
console.log(grid[1][1]); // Output: 5
console.log(grid[1][2]); // Output: 6
console.log(grid[2][0]); // Output: 7
console.log(grid[2][1]); // Output: 8
console.log(grid[2][2]); // Output: 9
//Note this: grid[0][0];
//The first console.log line will return 1, the [0][0] within the line represent the X and Y axis of the grid. [0] being the starting point of each axis.
//If we change these values to [0][1] our output will change to 2, compare this directly to the 'grid' declaration and you can see how it has 'moved' horizontally along the grid.
//On the other hand if we change these values to [1][0] our output will be 4 and you can see how it has now 'moved' vertically on the grid.
//If we do [1][2] our output would be 6, we've 'moved' once vertically and twice horizontally to reach the value

// activity 5 : research operators and give examples
let a = 1;
let b = 2;
console.log(a + b); // addition: adds 2 numbers

let c = 2;
let d = 2;
console.log(c - d); // subtraction: subtract 2 numbers

let e = 2
let f = 2
console.log(e * f); // multiplication

let g = 2;
let h = 2;
console.log(g / h); // division

let l = 2;
let m = 2;
console.log(l ** m); // the power of 2 

let o = 3;
let p = 2;
console.log(o % p); // modulus (gives the remainder)

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // increment

let q = 3;
const v = q--;
console.log(`x:${q}, y:${v}`); // decrement
