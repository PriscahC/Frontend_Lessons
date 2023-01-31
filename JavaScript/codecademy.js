console.log('Teaching the world how to code'.length); //logs 30 basically counts the characters in the string
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
console.log('    Remove whitespace   '.trim()); //removes extra spaces

//standard built-in objects [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String ]

//MATH 
//Math is a built-in object that has properties and methods for mathematical constants and functions.
console.log(Math.floor(Math.random() * 50));
37
undefined // Prints a random whole number between 0 and 50 ; Math.floor removes the decimals 

console.log(Math.ceil(43.8))  
44                           // returns the smallest integer greater than or equal to a decimal number.

console.log(Number.isInteger(2017));
true                                    //checks if the number is an interger

//ASSIGNMENT OPERATORS
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

//Increment Operator
let a = 10;
a++;
console.log(a); // Output: 11

//Decrement Operator
let b = 20;
b--;
console.log(b); // Output: 19

//Concatenation
let favoriteAnimal = 'Duck';
console.log('My favorite animal: ' + favoriteAnimal);
//My favorite animal: Duck
undefined
 
//let myName = 'Priscah Adhiambo';       // template literals codes are readable; easy to tell the new string & escape double quotes or single quotes.
let myCity = 'Kisumu';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
// My name is Priscah Adhiambo. My favorite city is Kisumu
undefined

//typeof operator   The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean 


//DOG YEARS QUIZ
let myAge = 22;   //this is my current age
let earlyYears = 2; // first 2yrs of a dog's life
earlyYears *= 10.5;  // @ 0f the early yrs equal 10.5
let laterYears = myAge - 2; //we've already accounted for 2yrs
laterYears *= 4; //multiplies and reassigns coming years 
console.log(earlyYears);
21
console.log(laterYears);
80
let myAgeInDogYears = earlyYears + laterYears; //converts my age to dog years
const myName = 'PRISCILLA ADHIAMBO'.toLowerCase();  // returns a string with all lowercase letters.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);   //outputs my age with dog age
//My name is priscilla adhiambo. I am 22 years old in human years which is 101 years old in dog years
undefined

//KELVIN TEMPERATURE
//kelvin value will stay constant
const kelvin = 0;
//celsius is 273 less to Kelvin
const celsius = kelvin - 273;
//the fahrenheit value will be ronded off
let fahrenheit = celsius * (9 / 5) + 32;
//rounding off
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
//The temperature is -460 degrees Fahrenheit
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
//The temperature is -91 degrees Newton
undefined

//SHORT-CIRUIT EVALUATION
/*let username = '';
let defaultName;*/
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

//SHORT
let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger

//SWITCH STATEMENTS
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place' :
  console.log('You get the gold medal!');
  break;
   case 'second place' :
  console.log('You get the silver medal!');
  break;
   case 'third place' :
  console.log('You get the bronze medal!');
  break;
   default:
  console.log('No medal awarded.');
  break;
}

//MAGIC EIGHT BALL
let userName = 'Betty';     //  Initially an empty string
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');    //logs name or just hello, if the userName is absent

const userQuestion = 'What does your future hold?';     //This is the base magic eight ball question
console.log(userQuestion +' '+ userName);       //reflects back your question
randomNumber = Math.floor(Math.random()*8);     //generates random number for the roulette
let eightBall = randomNumber;                   //uses the random number to determine response / if string is empty no response is given

switch (eightBall) {            //the random responses generated
  case 0 : 
  console.log(`You will be successfull ${userName}`);
  break;
  case 1 : 
  console.log('You will have many children');
  break;
  case 2 : 
  console.log('The stars say watch your choices');
  break;
  case 3 : 
  console.log(`${userName}, the times will quite hard but at the end your dreams will reign`);
  break;
  case 4 : 
  console.log('Outlook not so good. come again tomorrow');
  break;
  case 5 : 
  console.log(`${userName}, you shall travel the world`);
  break;
  case 6 : 
  console.log('Reply hazy, try again');
  break;
  case 7 : 
  console.log('You might die unexpectedly');
  break;
}
console.log(eightBall);        //gives the number generated

//RACE DAY CODE
let raceNumber = Math.floor(Math.random() * 1000);  //Random number assigned to runners
const earlyRegister = true;                     //those who registered early
const runnersAge = 22;              //identifies those under 18 and adults
if (runnersAge >= 18 && earlyRegister === true){
  raceNumber += 1000                            //adults that registered early get a number above 1000
}
if (runnersAge > 18 && earlyRegister === true){
  console.log( `Your race is at 9:30am. Your race number is; ${raceNumber}`);   //early adults race at 9.30
}else if (runnersAge > 18 && earlyRegister === false){
  console.log( `Your race is at 11:00am. Your race number is; ${raceNumber}`);  //llate adults race at 11.00am
}else if (runnersAge < 18){         
  console.log( `Your race is at 12:30pm.}`);        //those under 18 race at 12:30pm
}else {
  console.log (`See the registration desk`);        //those exactly 18yrs old will visit the registration desk
}

//DECLARING FUNCTIONS
function getReminder(){
  console.log('Water the plants.');
}
function greetInSpanish(){
  console.log('Buenas Tardes.');
}

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();    //calls the function
sayThanks();
sayThanks();

// Thank you for your purchase! We appreciate your business.    //outputs
// Thank you for your purchase! We appreciate your business.
// Thank you for your purchase! We appreciate your business.
undefined


//Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as 
//placeholders for information that will be passed to the function when it is called.
function sayThanks(name) {    //name is a parameter
  console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
}
sayThanks('Cole');    //'Cole' is an argument. a value of the parameter
//Thank you for your purchase Cole! We appreciate your business.
undefined

//setting a default argument, add = 'string' to the argument
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

undefined  // by default, the resulting value is undefined.
makeShoppingList();   //if the argument is not input, the default parameters display
// Remember to buy milk
// Remember to buy bread
// Remember to buy eggs
undefined

//return function
/*When a return statement is used in a function body, the execution of the function is stopped and the 
code that follows it will not be executed. Look at the example below:*/

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }                                       //using console will give undefined
  return width * height;
}


function monitorCount(rows, columns){
  return rows * columns  //multiplys rows and columns and then returns the value
};
const numOfMonitors = monitorCount(5, 4);  // computes the number of monitors needed baed on rows and columns
console.log(numOfMonitors);
20
undefined

//HELPER FUNCTIONS
function monitorCount(rows, columns) {      //This is the 1st function. returns total number of monitors
  return rows * columns;
};
function costOfMonitors(rows, columns) {    //This is the HELPER FUNCTION. It further calculates the first function
  return monitorCount(rows, columns) * 200    //total number of monitors times 200 to give total cost 
};
const totalCost = costOfMonitors(5, 4);
console.log (totalCost);
4000
undefined


//FUNCTION EXPRESSIONS
const plantNeedsWater = function(day){    // assigns the function to the variable plantNeedsWater
  if (day === 'Wednesday'){       //adds a condition to the function
    return true;
  }else{
    return false;
  }
};
plantNeedsWater('Tuesday');       //calls the function to have the result 
console.log (plantNeedsWater ('Tuesday'));    //logs output to the console
// false
undefined

//ARROW FUNCTION
const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//Concise body arrow functions
0
const functionName0 = () => {};  //zero parameter needs parenthesis
1 //single line block
const functionName1 = parameter => {};  //one parameter has no parenthesis

const sumNumbers = number =>  number + number; //doesn't require curly braces. Implicit return

const plantNeedstheWater = day => day === 'Wednesday' ? true : false; //if else is ternary to make the code a single block

//2 0r more
const functionName2 = (param1, param2) => {};  //two or more parameters need parenthesis

const sumNumbers2 = number => {
  const sum = number + number;
  return sum;
}; 





//ROCK, PAPER, SCISSOR GAME

/*const getUserChoice = userInput =>{           //this is the FIRST FUNCTION from the input
  userInput = userInput.toLowerCase();        //transforms input to lower case
  if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
    return userInput;                 //returns input 
  } else {
    console.log('not a valid choice');    //keeps options between the three 
  }
};

//console.log(getUserChoice('rock'))  //checks if the code works should return same input

function getComputerChoice() {            //this is the SECOND FUNCTION from the computer side
  switch(Math.floor(Math.random()*3)) {   //enables the computer choice to be random
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';            //corresponds the random numbers generated to the three parameters
      break;
    case 2:
      return 'paper';
      break;
  	};
}
console.log(getComputerChoice());     //tests code 

function determineWinner(userChoice,computerChoice) {     //this is th THIRD FUNCTION for comparing values and determining winners
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';                            //specifies a draw
  } else if (userChoice === 'rock') {         //'else if' prioritises userChoice; ROCK to Paper then open another 'if' statement
    if (computerChoice === 'paper') {             //if statements allows matching it to paper beats rock 
      return 'Computer wins!';                  //ends the first scenario
    } else {                                   //else matches the non-priority to the only remaining option which is scissors. 
      return 'You win!';                         //user wins since rock beats scissors   
    }
  } else if (userChoice === 'paper'){
    if (compterChoice === 'scissors') {
      return 'Computer wins!';
    }else {
      return 'You win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'bomb') {
    return 'You win!';
  }
};

console.log(determineWinner(userChoice,computerChoice))   ///tests code; can have own inputs

function playGame() {
  var userChoice = getUserChoice('scissors');
  var computerChoice = getComputerChoice()
  console.log(`you threw ${userChoice}`);
  console.log(`computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};
playGame();
// you threw scissors
// computer threw rock
// Computer wins!
undefined */




const getUserChoice = userInput =>{           
  userInput = userInput.toLowerCase();       
  if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
    return userInput;                
  } else {
    console.log('not a valid choice');   
  }
};

function getComputerChoice() {           
  switch(Math.floor(Math.random()*3)) {   
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';            
      break;
    case 2:
      return 'paper';
      break;
  	};
}

function winner(userChoice,computerChoice) {     
  switch(winner) {
    case userChoice === computerChoice:
     return 'It\'s a tie!';
    break;
    case userChoice === 'rock' && computerChoice === 'paper':
      return 'Computer wins!';
    break;
    case userChoice === 'rock' && computerChoice !== 'paper':
      return 'You win!';
    break;
    case userChoice === 'paper' && compterChoice === 'scissors':
      return 'Computer wins!';
    break
    case userChoice === 'paper' && compterChoice !== 'scissors':
      return 'You win!';
    break
    case userChoice === 'scissors' && computerChoice === 'rock':
      return 'Computer wins!';
    break
    case userChoice === 'scissors' && computerChoice !== 'rock':
      return 'You win!'; 
    break
    case userChoice === 'bomb':
      return 'You win!';
}
};
winner()

function playGame() {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice()
  console.log(`you threw ${userChoice}`);
  console.log(`computer threw ${computerChoice}`);
  console.log(winner);
};
playGame();
// you threw scissors
// computer threw rock
// Computer wins!
undefined


let getSleepHours = day => {      //based on same variable

  switch(day){
 case 'Monday':
 return 8;
 break;
 case 'Tuesday':
 return 5;
 break;
 case 'Wednesday':
 return 6;
 break;
 case 'Thursday':
 return 7;
 break;
 case 'Friday':
 return 4;
 break;
 case 'Saturday':
 return 9;
 break;
 case 'Sunday': 
 return 8;
 break;
 default: 'Today is a holiday';     //applies if none of the variables apply
  }  
};
// variable to get sleep of the day in hours
let  getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

console.log(getActualSleepHours());
//    function ideal sleep
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7 //total hours you prefer per week.
};
console.log(getIdealSleepHours());

//if lese that get the sleep hours and rturns the outcome

if ( getActualSleepHours === getIdealSleepHours){
  console.log('You got the perfect amount of sleep!')
} else if ( getActualSleepHours > getIdealSleepHours){
  console.log('You got ' + (getIdealSleepHours() -  getActualSleepHours()) + ' hours(s) more sleep than required!');
}else {
  console.log('You got ' + (getIdealSleepHours() -  getActualSleepHours()) + ' hours(s) less sleep than required!  Get some rest.');
};



//GLOBL SCOPE     Global namespace is the space in our code that contains globally scoped information
const satellite = 'The Moon';
const galaxy = 'The Milky Way'
const stars = 'North Star';         //THE THREE VARIABLES ARE GLOBAL SCOPES SINCE THEY CAN BE ACCESSED FROM ANYWHERE IN THE CODE
let callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

//block scope
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';     //lightWave can only be accessed within this block
  console.log(lightWaves);
};
logVisibleLightWaves();   //calls the function
console.log(lightWaves);    //trying to access the block variable returns an error


//SCOPE POLLUTION   Scope pollution is when too many variables exist in a namespace or variable names are reused.
const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';      //too many global variables can cause problems in a program. they can be reassigned and 
let stars1 = 'North Star';
//                         //globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.
const callMyNightSky1 = () => {
  stars1 = 'Sirius';
	return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};

console.log(callMyNightSky1());
console.log(stars1);
//You’ll notice that the global variable stars was reassigned to 'Sirius'. This is bad practice in code maintainability and could impact our program negatively.

//GOOD SCOPING
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';         //reusing variable color is scope pollution. recommended to assign a new name
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError


//ARRAYS
/*Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). 
Like lists, arrays are ordered, meaning each item has a numbered position.*/
const sampleArray = [1, 'Hello World!', true];

//Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
//Fortune favors the brave.
console.log(famousSayings[2]);
//Where there is love there is life.
console.log(famousSayings[3]);
undefined

//Updating Elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';  //tells our program to change the item at index 3 of the seasons array to be 'Autumn'
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']


//The .length property    returns the number of items in the array. 
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
3

//The .push() Method    allows us to add items to the end of an array.
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
//.push() is a function and one that JavaScript allows us to use right on an array.

//The .pop() Method   removes the last item of an array.
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();   //does not take any arguments, the array removes the last element
 //                   we store the returned value in a variable removed to be used for later.
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]         | mutating array
console.log(removed);
// Output: item 2

/*Some arrays methods that are available to JavaScript developers include: .join(), .slice(),
 .splice(), .shift(), .unshift(), and .concat() amongst many others.*/

 const groceryList1 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList1.shift();   //removes the first element from an array and returns that removed element.
console.log(groceryList1);    //it is a mutating array

VM484:3 (6) ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']
undefined

groceryList1.unshift('popcorn');    //adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(groceryList1);
VM538:2 (7) ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']
undefined                             // mutating array

const groceryList2 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList1.slice(1,4));   //slice(1,4) extracts the second element through the fourth elemen. returns index 1,2,3
VM597:1 (3) ['bananas', 'coffee beans', 'brown rice']
undefined           //slice doesn't mutate the original array

const pastaIndex = groceryList1.indexOf('pasta')  //returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(pastaIndex);
 4              


 //ARRAYS AND FUNCTIONS
 /*when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside 
 the function as well. this concept explained as pass-by-reference*/
 const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {   //The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
  arr.push('lily');
}
 
addFlower(flowers);   //We call addFlower() with an argument of flowers which will execute the code inside addFlower. links variable to function
 
console.log(flowers);     //We check the value of flowers and it now includes the 'lily' element! The array was mutated!
// Output: ['peony', 'daffodil', 'marigold', 'lily']



//NESTED ARRAYS   When an array contains another array it is known as a nested array. 
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2    To access the nested arrays we can use bracket notation with the index value,

const numberClusters = [[1, 2] , [3, 4] , [5, 6] ];     
const target = numberClusters[2][1];      //to access the element 6 inside numberClusters . to access 4 => [2][0] | 5 => [1][0] |etc

console.log(flowers.toString());  /*or*/ console.log(flowers.join()); 
 console.log(flowers.reverse()); 
 console.log(flowers.concat());   // used to merge two or more arrays


 //LOOPS
 //initialization|stopping condition| iteration statement
 for (let number = 5; number <= 10 ; number++){     //for is used to create loop conditions
  console.log(number);
};
5
6
7
8
9
10
undefined

//looping in reverse
// The loop below loops backwards from 3 to 0[ 3, 2 1]
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

//Looping through Arrays | To loop through each element in an array, a for loop should use the array’s (.length) property in its condition.

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for(let i = 0; i < vacationSpots.length; i++ ){             //i to iterate through arrays we can think of it as being short-hand for the word index.
  console.log('I would love to visit ' + vacationSpots[i]);
};
// returns
//I would love to visit Bali
// I would love to visit Paris
// I would love to visit Tulum
undefined


//Nested Loops
/*the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], 
to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.*/
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
// Both loops have the number: 19
undefined

//Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. 
let bobsFollowers = ['Meg', 'Tina', 'Sam', 'Linnet'];
let tinasFollowers = ['Ray', 'Sam', 'Meg'];
let mutualFollowers = [];       //set as an empty array

/* If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array. */
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let t = 0; t < tinasFollowers.length; t++) {
    if (bobsFollowers[i] === tinasFollowers[t]) {
     mutualFollowers.push (tinasFollowers[t]);
    }
  }
};
console.log(mutualFollowers);
VM1996:1 (2) ['Meg', 'Sam']
undefined

//In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
//executes as long as the condition is true
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while(currentCard != 'spade'){        //checks if the currentCard does not have that value 'spade'
  currentCard = cards[Math.floor(Math.random() * 4)];   //gives a random number from 0 to 3; index the cards array, 
  //  currentCard = cards[Math.floor(Math.random(0,4))]      and assign the value of currentCard to a random element from that array.
  console.log(currentCard)
}
/*const cards = ['diamond', 'spade', 'heart', 'club'];

//round 1
VM2135:7 diamond
VM2135:7 club
VM2135:7 heart
VM2135:7 diamond
VM2135:7 heart
VM2135:7 diamond
VM2135:7 club
VM2135:7 spade
undefined

//round 2
VM2139:7 heart
VM2139:7 diamond
VM2139:7 heart
VM2139:7 spade
undefined

round 3
VM2143:7 spade
undefined
const cards = ['diamond', 'spade', 'heart', 'club'];

//round 4
5VM2152:7 club
VM2152:7 heart
VM2152:7 club
VM2152:7 heart
VM2152:7 diamond
3VM2152:7 club
VM2152:7 heart
VM2152:7 diamond
VM2152:7 heart
VM2152:7 club
VM2152:7 heart
2VM2152:7 diamond
VM2152:7 heart
VM2152:7 club
VM2152:7 spade
undefined */


//Do...While Statements
/*The loop will always be executed at least once, even if the condition is false, because the code block is
 executed before the condition is tested.*/
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);        //semicolon used at the end of the do...while loop is important.
 
console.log(countString);
01234
undefined

//example 2
//a program to simulate part of the cake-baking process.
const cupsOfSugarNeeded = 2;    //Depending on the recipe, a  number of cups of sugar is required. let's say 2
let cupsAdded = 0;      //The cups of sugar must be added to the batter one at a time. variable for cups added
do {
  cupsAdded++               //We have a sweet tooth, so we want to add at least one cup of sugar to the batter
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded )    //Our stopping condition will compare cupsAdded to cupsOfSugarNeeded

//a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.

 1
 2
undefined


//The break Keyword     -ends the execution of the loop. return does the same function
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');
//returns
 Banana
 Banana
 Banana
 //Orange you glad I broke out the loop!
undefined

//
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {    //Log each element from rapperArray in a for loop with the iterator variable i.
  if (i > 2 ) {   //Add a break inside your loop’s block that breaks out of the loop if the element 
  break;              // at the current index in the rapperArray is 'Notorious B.I.G.'.    
  }
  console.log(rapperArray[i] + " And if you don't know, now you know.");    //log the string "And if you don't know, now you know." to the console
}
/*
Lil' Kim And if you don't know, now you know.
Jay-Z And if you don't know, now you know.
Notorious B.I.G. And if you don't know, now you know. */

//Continue keyword  - skips only one iteration in the loop, and continues with the next iteration.


/*Alert Box

An alert box is used when you want to ensure that information gets through to the user.*/
alert("hello, \n how are you!")  // \n is the line break

/*Prompt Box
A prompt box is often used to have the user input a value before entering a page. 
If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.
The prompt() method takes two parameters. label, and text box(optional)*/
var user = prompt("Please enter your name");

/*Confirm Box
A confirm box is often used to have the user verify or accept something.
If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false. */
let take = confirm ("do you agree with us");
if (take == true) {
    alert("Thanks for your support!");
}else{
    alert("Thanks for your input");
}
undefined


//Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {    //this is a variable with a really long name
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;    //assigns the long name a shorter name
isTwoPlusTwo();                           //calls the function
console.log(isTwoPlusTwo.name);           //helps recall the name it replaced
//checkThatTwoPlusTwoEqualsFourAMillionTimes          //returns this



//HIGHER ORDER FUNCTIONS
// functions that get passed in as parameters are callback functions
const names = characters.map(character => character.name);      //This is the callback function
console.log(names); 
// "Han Solo" "Luke SkyWalker" "Leia Organa"

// A higher-order function is a function that either accepts functions as parameters, returns a function, or both
var names2 = characters.map(function(character) {           // this is the higher-order function 
  return character.name;
});

console.log(names2); 
// "Han Solo" "Luke SkyWalker" "Leia Organa"



//Example 2
const addTwo = num => {         //function, addTwo(), that adds 2 to whatever is passed into it   
  return num + 2;
}
//we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo()
const checkConsistentOutput = (func, val) => {
  const checkA = val + 2            //checkA stores the sum val plus 2.
  const checkB = func(val);          //checkB stores the invocation of the func callback, with val as the argument.
  if (checkA === checkB) {          //checks if the value of checkA is equal to the value checkB.
    return func(val);                 // If true, returns the result of the callback function.
  }else {
    return 'Inconsistent results'     //If false, returns the string 'inconsistent results'.
  }
}

console.log(checkConsistentOutput(addTwo, 5));      //logs the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number.


// ITERATORS

//typeof
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
VM759:7 (3) [5, 3.14, 100]
undefined


//MAP
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {         //map adds an action to each of the element arrays
  return number * number;
});

console.log(squareNumbers);
VM774:7 (5) [1, 4, 9, 16, 25]
undefined

//for each
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];     

artists.forEach(artist => {                       //just reflects each element in the array
  console.log(artist + ' is one of my favorite artists.');
});

//VM798:4 Picasso is one of my favorite artists.
//VM798:4 Kahlo is one of my favorite artists.
//VM798:4 Matisse is one of my favorite artists.
//VM798:4 Utamaro is one of my favorite artists.
undefined

//          for each arrow function syntax
groceries.forEach(groceryItem => console.log(groceryItem));

//filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumber = randomNumbers.filter(randomNumbers => {return randomNumbers < 250});    //filters numbers less than 250
console.log(smallNumber);
VM1234:3 (4) [200, 3.14, 7, 13]
undefined

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(favoriteWords => { return favoriteWords.length > 7})
console.log(longFavoriteWords);                   //filters words with more than 7 letters
VM1326:3 (3) ['nostalgia', 'hyperbole', 'esoteric']
undefined

//findIndex           -finds the location of an element in an array.
const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {    //return the INDEX of the FIRST element that evaluates to TRUE in the callback function.
  return num < 10;
});
console.log(lessThanTen);
 3
undefined
//            If we check what element has index of 3:
console.log(jumbledNums[3]); // Output: 5
//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

//solved
const animails = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animails.findIndex(name => {      // Name is an assigned argument
  return name === 'elephant';           //finds elephant and returns its index as 7
})

//this finds the index of the first animal that starts with the letter 's'.
const startsWithS = animails.findIndex(animails => animails.charAt(0) === 's'   //charAt finds the character at index specified
);
console.log(animails[3]);     //to confirm the string at the given index


//INTERESTING FUNCTION
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//                      create a new array that contains the first character of each string in the animals array. 
const secretMessage= animals.map(animals =>{
  return(animals[0]);           //The new array is saved to a const variable named secretMessage.
});
console.log(secretMessage);
VM271:6 (10) ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']     //output of secret message
undefined
console.log(secretMessage.join(''));    //joins the characters in secret message
HelloWorld
undefined

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumbers => {     //picks each value in big numbers
  return bigNumbers / 100;                      //divides bigNumbers by 100
});


//The .reduce() Method        reduces the array by cumulatively combining the  values in the sequence
const newNumbers = [1, 3, 5, 7];              
const newSum = newNumbers.reduce((accumulator,currentValue)  => { 
console.log('The value of accumulator: ', accumulator);       //shows new sum
console.log('The value of currentValue: ', currentValue);     //shows actual value
return accumulator + currentValue;        //the return takes 1, adds to 3. sum(4) to 5, then sum(9) to 7
}, 10);                 //this second parameter set the initial value for accumulator at 10. so 10 will be added to  current value before reduction
console.log(newSum);
//The value of accumulator:  10
//VM2426:4 The value of currentValue:  1        
//VM2426:3 The value of accumulator:  11
//VM2426:4 The value of currentValue:  3
//VM2426:3 The value of accumulator:  14
//VM2426:4 The value of currentValue:  5
//VM2426:3 The value of accumulator:  19
//VM2426:4 The value of currentValue:  7
//VM2426:7 26
undefined

array = ['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
array.reduce((a, b) => a + ' ' + b)
// "A quick brown fox jumps over the lazy dog"


//some and every
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;     //      check if there are words that are fewer than 6 characters long.  prints true to the console.
}));

// Use filter to create a new array
const interestingWords = words.filter(name => {
  return name.length > 5;       //.filter() method transfers any words longer than 5 characters a variable called interestingWords,
})

console.log(interestingWords.every(word => { 
  return word.length > 5;         //check if every element has more than 5 characters. prints true to the console.
} ));

//summary
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);


/*CHALLENGE YOURSELF
If you want to challenge yourself:

Define a callback function before you use it in a iterator.
Chain two iteration methods on the same array.
Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)
Use .reduce() to take a multi-layered array and return a single layer array from scratch. */


//OBJECTS
let  paceship = {}; // spaceship is an empty object

// Write your fasterShip object literal below
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};

//Accessing Properties
let spaceship1 = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship1.homePlanet; // Returns 'Earth',
spaceship1.color; // Returns 'silver',

/*We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. 
Without bracket notation in these situations, our code would throw an error. */
let spaceshipp = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceshipp['Active Duty'];   // Returns true
spaceshipp['Fuel Type'];   // Returns  'Turbo Fuel'
spaceshipp['numCrew'];   // Returns 5
spaceshipp['!!!!!!!!!!!!!!!'];   // Returns undefined

/*With bracket notation you can also use a variable inside the brackets to select the keys of an object. 
This can be especially helpful when working with functions */
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

//Property Assignment
const spaceship2 = {type: 'shuttle'};
spaceship2 = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship2.type = 'alien'; // Changes the value of the type property
spaceship2.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

//deleting
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property

//Methods
/*When the data stored on an object is a function we call that a method. A property is what an object has,
 while a method is what an object does. */

 const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

//new ES6
const alinShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
//calling the method
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'


//Example 2
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
alienShip = {         //alienship Object
  retreat() {           //first method
    console.log(retreatMessage);
  },      // separated by a comma
  takeOff() {         //second method
    console.log('Spim... Borp... Glix... Blastoff!')
  }         //second method
};
alienShip.retreat();    //invoking the 
alienShip.takeOff();


//Nested Objects
let spaceshisp = {
  passengers:[{Males: 'Alex'}],   //passenger object in the array that has at least one key-value pair on it.
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceshisp.crew.captain['favorite foods'][0]
let firstPassenger = spaceshisp.passengers[0];


//Pass By Reference
const spaceships = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceships);
 
spaceships.color // Returns 'glorious gold'
//function paintIt() permanently changed the color of our spaceship object.

let ship = {            //let allows us to reassign it to a new object with identified and 'transport type' properties 
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(ship) // The attempt at reassignment does not work.
ship // Still returns {homePlanet : 'Earth', color : 'red'};
 
ship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.


//example 2
let spaship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = biogas =>{      //function greenEnergy() that has an object as a parameter 
   biogas['Fuel Type'] = 'avocado oil'        //and sets that object’s 'Fuel Type' property to 'avocado oil'.
};
let remotelyDisable = node => {
  node['disabled'] = true;
};
 greenEnergy(spaship);      //Call your two functions with the spaceship object 
 remotelyDisable(spaship);
 console.log(spaship);
/* RETURNS
 { 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }*/


//FOR IN
  let aceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
};
for (let roles in aceship.crew) {         //iterate through the spaceship.crew console.log() a list of crew roles and names 
  console.log(`${roles}: ${aceship.crew[roles].name}`)     //in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.    
}; //ENSURE TO USE BACKTICKS

//iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees 
//in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
for (let grade in aceship.crew){
  console.log(`${aceship.crew[grade].name}: ${aceship.crew[grade].degree}`)
}


//Advanced Objects Introduction7
let peson = {
  name: 'Axel',
  location: 'US',
  isAdvsor: true
}
//creating many people, doing it one by one will be tiresome, so an advanced feature we can use is the Factory function 
const makeCodecademyPeople = (name, location, isAdvisor) => {
  return {
    name,
    location,
    isAdvisor
    }
	};

//now, calling the function will create a new object that we can assign to 
//a variable:
let axelAdvisor = makeCodecademyPeople('Axel', 'US', true);

console.log(axelAdvisor.name) //Axel
//advanced is the tools that we are learning to improve how we interact and build objects.



//The this keyword references the calling object which provides access to the calling object’s properties.
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType); //without the this keyword it returns an error
  }
};
 
goat.diet(); 
// Output: herbivore

//EXAMPLE 2
const robot = {     //object robot
  model: '1E78V2',  //property of model, value of '1E78V2'
  energyLevel: 100,   //property, energyLevel. NOTE comas
  provideInfo() {   //method named provideInfo        // avoid using arrow functions when using this in a method!
    return(`I am ${this.model} and my current energy level is ${this.energyLevel}.`)  //returns a string by using interpolation:
  }   //to get the access to the calling object’s properties inside a method, you have to use the this keyword!
};    
console.log(robot.provideInfo());   //check .provideInfo() has access to the internal properties of robot

//Arrow Functions and this    - refer to 1302

//Privacy - defined as the idea that only certain properties should be mutable or able to change in value.
const nobot = {
  _energyLevel: 100,    //underscore _ before the name of a property to mean it should not be altered. it's still possible to reassign it
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
//reassigning a value 
let newEnergy = obj => {
  obj._energyLevel = 'high'
};
//Calling .recharge() on nobot to
nobot.recharge();


//Getters - methods that get and return the internal properties of an object.
// functionality of our code is easier for other developers to understand.
const bot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){    //getter method
  if (typeof (this._energyLevel) === 'number'){ //we can access the properties of the calling object using this
      return `My current energy level is ${this._energyLevel}`
    }else{
       return 'System malfunction: cannot retrieve energy level'
    }
  }
}
console.log(bot.energyLevel);

//Setters
const lot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){     //getter
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  }, 
set numOfSensors(num){      //setter
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }else {
      console.log('Pass in a number that is greater than or equal to 0')
      }
    }
  };
  robot.numOfSensors = 100;   //reassigning 
  console.log(lot.numOfSensors);
  //returns 100

  //Factory Functions
  const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };

  const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
  ghost.scare(); // 'BOO!'


  //EXAMPLE 2

  // factory function named robotFactory that has two parameters model and mobile
const robotFactory = (model, mobile)=>{
  return{ //Make the function return an object
    model: model,     //In object, add a key of model with the value of the model parameter.
    mobile: mobile,
    beep (){
      console.log('Beep Boop');
    }
  }
};
//Use your factory function
const tinCan = robotFactory('P-500', true);
tinCan.beep()     //Call .beep() on tinCan.
//he factory function produced a robot object!


//Property Value Shorthand    -ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
const monsterFactoryS = (name, age) => {
  return { 
    name,
    age           //we don’t have to repeat ourselves for property assignments!
  }
};

//Destructured Assignment
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
//Using destructured assignment variable (functionality) that extracts the functionality property of robot.
const {functionality} = robot;
functionality.beep(); //calling the .beep() method on functionality.


//Built-in Object Methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);   //grabs the property names (keys), and saves the keys in an array which is assigned to robotKeys

// Declare robotEntries below this line:
//array that contains both the key and value of the properties in an object.
const robotEntries = Object.entries(robot); //caps O on Object!
console.log(robotKeys);


console.log(robotEntries);

// Declare newRobot below this line:
const object = {
  laserBlaster: true, 
  voiceRecognition: true}
const newRobot = Object.assign(object, robot)
//assign copies all properties from one or more source objects to a target object. It returns the modified target object. copies from robot to const object
console.log(newRobot);

//Once you have an object constructor, you can use the new keyword to create new objects of the same type.
function person (name, age) {
  this.name = name;
  this.age = age;
}
let John = new person("John", 25);
let James = new person("James", 21);
 