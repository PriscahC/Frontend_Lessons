"Priscah"
'Priscah'

alert ("Hello, Priscah! How are you?");
undefined

alert ("Hello, Priscah! How are you?");
alert ("Check this out!")
alert("You are AWESOOME!")
undefined

console.log

console.log("hiya friend!")
// VM492:1 hiya friend!
undefined


for (let i = 0; i < 10; i++) {
  console.log(i);
}
 0
 1
 2
 3
 4
 5
 6
 7
 8
 9
undefined

document.getElementsByTagName("h1")[0].style.color = "#ff0000";
'#ff0000'

document.body.addEventListener('click', function () {
     var myParent = document.getElementsByTagName("h1")[0]; 
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});
undefined

Numbers

3
3

//Arithmetic operations

3 + 2.1
5.1

2+10-19+4-90+1
-92

-20 + -19 - (-10) - (-1) + 24
-4

(10/5) * 4 - 20
-12

4096 % 12	//modulo operator. it returns the remainder after division
4

//Comparing numbers

/* Operator	Meaning
	<	Less than
 	>	Greater than
	<=	Less than or Equal to
	>=	Greater than or Equal to
	==	Equal to
	!=	Not Equal to	*/
5 > 10
false
5 < 10
true
5 == 10
false
10!=10
false
6<=9
true
/*TIP: The values true and false have significant importance in JavaScript. 
These values are called Booleans and are another data type in JavaScript.*/


QUIZ
/*
 * Programming Quiz: First Expression (2-1)
 * Write an expression that uses at least three, distinct, arithmetic operators
 * to log the number 42 to the console.
 */ 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print the value `42`
 * 2. You should use at least 3 distinct operators. (`+`, `-`, `*`, `/`, or `%`)
 * 3. Your code should not be empty
 */


// this expression equals 4, change it to equal 42  console.log(1 + 5 - 2);


// slns
console.log((1 + 5) - (-18*2));
42
undefined
console.log(9%7 +4*10);
42
undefined
console.log((8*10) / 2 + 2);
42
undefined

Strings		//Defined by quotation marks. else you'll get an error
"Priscah"
'Priscah'

console.log("hiya friend!")
'hiya friend!'
undefined

//String concatenation	    adding strings together
"Hello," + " New York City"
'Hello, New York City'

"hello" + "world"	//spacing is not automatic
'helloworld'

"Hello + 5*10"	
'Hello + 5*10'	

"Hello" + 5*10 	//implicit type coercion in JavaScript. 
'Hello50'	//multiplies the 5*10 to 50 which is changed into the string "50", This then gets combined with the string "Hello".

Variables	//Storing the value of a string in a variable is like packing it away for later use.

let call = "Hello"

call + " Priscah"
'Hello Priscah'

call + " World"
'Hello World'

call = " aloha"		// reassigning a new string value to the variable
' aloha'
call + " Priscah"
' aloha Priscah'

//uses camelCase if the variable name is multiple words and lowercase if the variable name is one word


//QUIZ 2
/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 * 8. Your code should not be empty
 */
 

var celsius = 12;
var fahrenheit = /* convert celsius to fahrenheit here */

console.log(/* print out result here */);

sln

let C = 12

let F = (C * 1.8 + 32);

console.log(F)
53.6
undefined

sln2
let Celcius = 12
undefined
let Fahrenheit = (Celcius * 1.8 + 32);
undefined
console.log(Fahrenheit)
53.6
undefined


Indexing	//access individual characters in a stringT

"James"[0];
'J'
let name = "James";
name[0];
'J'
	   //0123456789
let quote = "Stay awhile and listen!";		//
console.log(quote[6]);
w
undefined


//Escaping strings

"The man whispered, \"please speak to me.\""
// Uncaught SyntaxError: Unexpected identifier without the escape slash

"The man whispered, \"please speak to me.\""	// use backslash character to escape the quotes in order to access the literal quote character.
'The man whispered, "please speak to me."'

// special characters that need to be escaped
// 	Code	Character
// 	\\	\ (backslash)
// 	\"	'' (double quote)
// 	\'	' (single quote)
// 	\n	newline
// 	\t	tab

"The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster."
'The file located at "C:\\\\Desktop\\My Documents\\Roster\\names.txt" contains the names on the roster.'	//escapes only start and end quotes

//"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."
//VM1797:1 Uncaught SyntaxError: Unexpected identifier								//no escape

"The file located at \"C:\\Desktop\My Documents\Roster\names.txt\" contains the names on the roster."
'The file located at "C:\\DesktopMy DocumentsRoster\names.txt" contains the names on the roster.'

"Up up \n \t down down"		//characters not effective
'Up up \n \t down down'

//Comparing strings

"Yes" == "yes"
false		//Case-sensitive


//ASCII value of Printable characters.

// Pick a string. Your string can have any number of characters.
var my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);
97
undefined
var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}
85
100
97
99
105
116
121
undefined

console.log("chapati");
chapati
undefined

console.log(chapati);
// Uncaught ReferenceError: chapati is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM39:1

let food = "chapati"
undefined
console.log(food)
chapati

var haiku = "Blowing from the west\n" +  "Fallen leaves gather\n" + "In the east."
console.log(haiku);
/*Blowing from the west
Fallen leaves gather
In the east.*/
undefined

BOOLEANS
yes/no
on/off
true/false
100110001

var a = 10;
var b = 20;
// a comparison - we will study this in detail in upcoming lesson
if (a>b) // The outcome of a>b will be a boolean
    console.log("Variable `a` has higher value"); // if a>b is true
else 
    console.log("Variable `b` has higher value"); // if a>b is false
//Variable `b` has higher value
undefined

if(1){
    console.log("This statement will always execute because conditional is set to 1 i.e., true");
}

if(0){
        console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
}
//This statement will always execute because conditional is set to 1 i.e., true
undefined

//Null, Undefined, and | NaN "Not-A-Number" and it's often returned indicating an error with number operations.|

/*A strongly typed language is a programming language that is more likely to generate errors if data does not 
closely match an expected type. Because JavaScript is loosely typed, you don’t need to specify data types;
 however, this can lead to errors that are hard to diagnose due to implicit type coercion.*/

 /* JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type 
 and value without doing the type conversion first. To perform a strict comparison, simply add an additional equals sign = to the 
 end of the == and != operators.*/ 

 /*
 "3" > 1 is true because 3 is greater than 1 (implicit type coercion)
true >= 0 is true because 1 greater than or equal to 0 (implicit type coercion)
1 !== false is true because 1 does not equal false (strict equality)
3 === 3 is true because 3 equals 3 (strict equality)    */ 

var fullName = "Priscah Adhiambo"
console.log(`My name is ${fullName}`)
'My name is Priscah Adhiambo'
undefined

var bill = 10.25 + 3.99 + 7.15
var tip = bill * 0.15
var total = bill + tip
console.log("$" + total.toFixed(2))
//$24.60
undefined

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madlib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`
console.log(madlib)
//The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!
undefined

//using quotations
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madlib = "The Intro to JavaScript course is "+adjective1+". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+" content!"
console.log(madlib)
//The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!
undefined

var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`;
console.log(awesomeMessage);
//Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
undefined

//CONDITIONALS

//If... else... Statements
var price= 10.00;
var money= 15.00;
if (price >= money) {
    console.log("exceeds budget");
}else {console.log ("within budget");}
// within budget
undefined
/*The value inside the if statement is always converted to true or false. Depending on 
the value, the code inside the if statement is run or the code inside the else statement is run, 
but not both. The code inside the if and else statements are surrounded by curly braces {...} to separate 
the conditions and indicate which code should be run. else is dependent on an if*/ 

//else... if... statements     enable adding an extra conditional statement.
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");  //the extra conditional statement
} else {
  console.log("Wear what you have on.");  //The else statement essentially acts as the "default" condition in case all the other if statements are false.
}
//Wear what you have on.
undefined

//example two is more interesting
var runner = "Kendyll";
var position = 2;
var medal;                //it is left undefined, to be defined by the statements

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");
//Kendyll received a silver medal.
undefined

QUIZ
/*Write an if...else statement that:
prints "even" if the number is an even number
prints "odd" if the number is an odd number */

var number = 7;

if (number%2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}
// odd
undefined

QUIZ  //Musical Groups
var musicians = 3;

// your code goes here
if (musicians <= 0){
    console.log("not a group");
}else if (musicians === 1){
    console.log ("solo");
}else if (musicians === 2){
    console.log ("duet");
}else if (musicians === 3){
    console.log ("trio");
}else if (musicians === 4){
    console.log ("quartet");
}else if (musicians > 4){
    console.log ("this is a large group");    //default else statement results to an error, just use else ifs
}
//trio
undefined

alert ("purchase items from the store")     // just informs
undefined
prompt("purchase items from the store")
''                                          //requires an answer to be logged
prompt("purchase items from the store")
''
confirm("purchase items from the store")     // has a yes / no option 
true



//hour
//6 am to 12 = goodmorning
//12 to 6pm = goodafternoon
//otherwise = good evening


//let hour = 10;
if (hour >= 6 && hour < 12){ 
    console.log("Good Morning!");}

//Good Morning!
undefined

//let hour = 15;
if (hour >= 6 && hour < 12){ 
    console.log("Good Morning!");}
else {
    console.log("Good Afternoon!");
}

// Good Afternoon!
undefined

//let hour = 15;
if (hour >= 6 && hour < 12){ 
    console.log("Good Morning!");
    }
else if (hour > 12 && hour <= 18) {
    console.log("Good Afternoon!");
}
else {
    console.log ("Good Evening!");
}

// Good Afternoon!
undefined

let hour = 23;
if (hour >= 6 && hour < 12){ 
    console.log("Good Morning!");
    }
else if (hour > 12 && hour <= 18) {
    console.log("Good Afternoon!");
}
else {
    console.log ("Good Evening!");
}

// Good Evening!
undefined


/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of the weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/

var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "knife";
var solved = false;


if (room === 'ballroom' && suspect==="Mr. Kalehoff") {      // Mr. Kalehoff was present in the ballroom at the time of the murder
    weapon = 'poison';
    solved = true; 
}else if (room === 'gallery' && suspect === "Ms. Van Cleve") {          // Ms. Van Cleve was present in the gallery at the time of the murder
    weapon = 'trophy';
    solved = true;
}else if (room === 'billiards room' && suspect==="Mrs. Sparr") {           // Mrs. Sparr was present in the billiards room at the time of the murder
    weapon = 'pool stick';
    solved = true;
}else if (room === 'dining room' && suspect==="Mr. Parkes") {               // Mr. Parkes was present in the dining room at the time of the murder
    weapon = 'knife';
    solved = true;
}   
true              //if the information match it turns "true"

var room = "dining room";
var suspect = "Mrs Sparr";
var weapon = "knife";
var solved = false;

undefined           // alternation to the suspect turned undefined

//MURDER CASE WORKING SOLUTION
var room = "ballroom";
var suspect = "Mr. Kalehoff";
var weapon = "";
var solved = false;

if (room === "gallery" && suspect === "Ms. Van Cleve") {
weapon = "trophy", solved = true
}

else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
weapon = "poison", solved = true
}

else if (room === "billiards room" && suspect === "Mrs. Sarr") {
weapon = "pool stick", solved = true
}

else if (room === "dining room" && suspect === "Mr. Parker") {
weapon = "knife", solved = true
}

else {
console.log("there is still a mistery");
}

if (solved) {
console.log(suspect + " did it in the " + room + " with a " + weapon);
}

var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkbalance){
    console.log           

    
}
let n = prompt(" Enter a number" , " ");
let answer = Math.sqrt(n);
alert(`The square root of ${n} is ${answer}`)

setInterval//(function,time in ms)

function printTime(){
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.body.innerHTML = hours + " :" + mins + " :" + secs;
}
setInterval(printTime, 1000) ;
//we are changing the HTML content of our document's body. This overwrites the content every second, instead of printing it repeatedly to the screen.

//These three methods are the most commonly used for selecting HTML elements:
document.getElementById
document.getElementsByClassName
document.getElementsByTagName

let me =  document.getElementsByTagName('div')
me.innerHTML = "Get some!"
//we can change the text content of an element using the innerHTML property.

/*<img id="myimg" src="orange.png" alt="" />
<script>
var el = document.getElementById("myimg");
el.src = "apple.png";
</script>*/

//CHANGING STYLE
let x = document.getElementById('demo');
x.style.color = "6600FF";
x.style.width = "100px";

//you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter.
//For example: the background-color property should be referred to as backgroundColor.
var s = document.getElementsByTagName("span");
for (var x=0; x<s.length; X++){
    s[x].style.backgroundColor = "#33EA73";
}

/*Use the following methods to create new nodes:
element.cloneNode() clones an element and returns the resulting node.
document.createElement(element) creates a new element node.
document.createTextNode(text) creates a new text node.
 */

/*it will not appear in the document until you append it to an existing element with one of the following methods:
element.appendChild(newNode) adds a new child node to an element as the last child node.
element.insertBefore(node1, node2) inserts node1 as a child before node2. */

let el = document.createElement("li");
let txt = document.createTextNode("B");
el.appendChild(txt);
let ul = document.getElementById("list");
ul.appendChild(el);
//adding a new <li> element to the unordered list with id="list"

//Removing Elements
//To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.
let parent = document.getElementById("demo");
let child = document.getElementById("p1");
parent.removeChild(child);  //This removes the paragraph with id="p1" from the page.
parent.replaceChild(p, node)

/*An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:
var child = document.getElementById("p1");
child.parentNode.removeChild(child);
 */

/*Replacing Elements

To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used. */
