//We will be animating the red box to make it move to the right side of the container.
let pos = 0;
let box = document.getElementById("box");   //our box element
let t = setInterval(move, 500); //creates a timer that calls a move() function every 500 milliseconds.

function move(){        //move() function, that changes the position of the box.
    if (pos >=150){
        clearInterval(t);   // method to stop the timer
    }else{
    pos +=1;
    box.style.left = pos+"px";}  //px = pixels
}
/*The move() function increments the left property of the box element by one each time it is called. */


//EVENTS    It’s important to understand events, because they are an essential part of dynamic web pages.
//BUTTON
function show(){
    alert("Hi There!")      //event handler onclick
}

//CIRCLE
let b = document.getElementById("circle");
let p = document.querySelector("p")
b.onclick = function(){
    p.innerHTML = Date()
    //document.body.innerHTML = Date();    // attaching handlers to elements
}
b.onmouseover = function() {
    b.style.backgroundColor = "red",
    b.style.width = "150px",
    b.style.height = "150px";
}
b.onmouseleave = () => {
    b.style.background = "grey", 
    b.style.width = "100px", 
    b.style.height = "100px";
}

//Event Listeners
/*The addEventListener() method attaches an event handler to an element without 
overwriting existing event handlers. You can add many event handlers to one element. */
//par1 = event's type (like "click" or "mousedown").
//par2 = event's function
//par3 = Boolean value. for event bubbling or event capturing(optional)
//usecapture: bubbling(false) - child event first| capturing(true) - parent event first
/*b.addEventListener("mouseover", action, usecapture); //onmouseover "on" is not used
/*b.addEventListener("mouseover", action, true)
b.removeEventListener("mouseover", function);    //removing one of the listeners/even within a function,  */

//IMAGE SLIDER
//let's define our sample images in an array:
let images = [
    "https://i.pinimg.com/236x/c3/3e/84/c33e84ca673ca0569c3198f7e85a61d8.jpg",
    "https://i.pinimg.com/236x/34/4b/f0/344bf0716d5c3611672408f7c6d97f07.jpg",
    "https://i.pinimg.com/236x/7b/52/26/7b52267010b0bb65e7c4b7b1a3775e4b.jpg"
];
let num = 0;    //num variable holds the current image. 
next = () => {
    let slider = document.getElementById("slider")
    num++;
    if(num >= images.length){
        num = 0;    
    }//#alternative?
    slider.src = images[num];
}
prev = () => {
    let slider = document.getElementById("slider");
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
}

//FORM VALIDATION
//defining the validate() function
validate = () => {
    let n1 = document.getElementById("num1");
    let n2 = document.getElementById("num2");
    n1.value != "" && n2.value != "" ? true : alert("The value should be equal and not blank");
}
//The form will not get submitted if its onsubmit event returns false.

//ES6
//var is not limited to scope while let is limited to scope

//A class uses the keyword class and contains a constructor method for initializing.
class       //A declared class can then be used to create multiple objects using the keyword new
 Human {
  constructor(name) {
    this.name = name;
  }
}
//extends keyword is used in class declarations or class expressions to create a child of a class. The child inherits the properties and methods of the parent.
class Student extends Human {
  constructor(name, age) {     
    super (name);   //If there is a constructor present in the subclass, it needs to first call super() before using this. Also, the super keyword is used to call parent's methods.
    this.age = age;
  }
}
/*Another type of method is the static method, which cannot be called through a class instance. Static methods are often used to create utility functions for an application. */

//MAP METHODS
/*Methods
set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
has(key) Returns true if a specified key exists in the map and false otherwise.
delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
clear() Removes all key/value pairs from map.
keys() Returns an Iterator of keys in the map for each element.
values() Returns an Iterator of values in the map for each element.
entries() Returns an Iterator of array[key, value] in the map for each element. */

const map = new Map();
map.set('one', 1);
map.set('2', 'two');
if (map.has('two')) {
  console.log('two');
} else {
  console.log(map.get('one'));
}
1
undefined

//A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method.
function foo() {

    return new Promise((resolve,   reject  ) => {  
      let result = getSomeResult();
  //Here, resolve is the method for success and reject is the method for failure.
      if (result) 
        resolve('Success');  
      else  
        reject('Something went wrong');  
    });
  
  }

  //Iterators & Generators
  const arr = ['0', '1', '4','a','9','c','16'];
  const my_obj = {
      [Symbol.iterator]: function*() {      //Symbol.iterator is the default iterator for an object. The for...of loops are based on this type of iterator.
          for(let index of arr){
              yield `${index}`;
          }
      }
  };
  const all = [...my_obj]
  .map(i => parseInt(i,10))
  .map(Math.sqrt)
  .filter((i) => i < 5)
  .reduce((i, d) => i + d);
  console.log(all);
  //returns 10

  //Modules
  /*Considerations when using modules:
  maintainability | namespacing |  reusability */
  // some browsers are not supporting modules natively yet. So, we should use bundlers (builders) such as Webpack or Browserify to run our code.

  // Fill in the blanks to import the following from "util/calc.js":
export const hit = (x, y, z) => {
  return x * y + z / 2;
}
export const degree = 50;

import * as calc from "util/calc";

calc.hit(1, 2, calc.degree);        //ERROR

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];
const func = (...rest) => {
  console.log(rest.length);
}
func(...arr1);
func(...arr2);
//4 5
//4 6
undefined

//destructuring the name and age properties. Pass the value 9999 for the id property.
const user = {
    name: 'David',  
    age: 28, 
    id: 1234  
  };
  
  let newUser = Object.assign({},
  
    {name,   age  } =   user  ,
  
    {  id  : 9999});
  
  console.log(newUser);
//returns {name: 'David', age: 28, id: 9999}
undefined


let myMap = new Map();

myMap.set('zero', 0);

myMap.set('one', 1);

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);

}
//returns
 zero = 0
 one = 1
undefined


/*The Snail in the Well

The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?
 */
let depth = 39;
 let day = 0;
  for(let climb = 0; climb <= depth;) { //loop
      day +=1;    //day adds 1 with each loop
      climb += 7;   //climb adds 7 with each loop
      climb >= depth? 'break': climb -= 2;  //  climb <= depth? climb -= 2:'break' ;
//as long as climb < depth, 2 is substracted: when climb >= depth it breaks
  }
  console.log(day);   // day added 1 throughout the loop; counting days
//returns
  8
undefined


//Contact Manager App

function contact(name, number) {  //contact object constructor, with two arguments, name and number.
  this.name = name;
  this.number = number;
  this.print = function print() //print() method added to the object to output the contact data to the console (name: number)
{
  console.log(this.name + ": " + this.number);
}
}
//code declares two objects and calls their print() methods.
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();