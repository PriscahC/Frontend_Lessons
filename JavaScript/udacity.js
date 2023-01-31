//destructuring
/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * aUse destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, ,  , , three]= things;


const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

//The for...in loop  improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition.

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
//have to deal with the issue of using an index to access the values of the array,


for (const digit of digits) {   //use plural names for objects that are collections of values.
  console.log(digit);
}

//spread operator
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(...produce);

//rest parameter
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
//Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

/*You can think of the rest parameter like the opposite of the spread operator; if the spread operator is like unboxing 
all of the contents of a package, then the rest parameter is like taking all the contents and putting them back into the package. */

// Variadic functions are functions that take an indefinite number of arguments.