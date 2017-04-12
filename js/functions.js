"use strict";

var myNameIs = 'Del'; // TODO: Fill in your name here.

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
console.log("=======================");
console.log("     Problem 1         ");
console.log("=======================");

function sayHello(name) {
    console.log("Hello " + name);
}


/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello(myNameIs);

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random()*100)+1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"

 */

console.log("=======================");
console.log("     Problem 2         ");
console.log("=======================");
function isOdd(num) {
     var result = (num % 2 == 1) ? (num + " is an odd number") : (num + " is not an odd number.");

     console.log(result);

}isOdd(46);

/**
 * TODO:
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */


console.log("=======================");
console.log("     Problem 3         ");
console.log("=======================");

isOdd(random);


console.log("=======================");
console.log("     Bonus 1          ");
console.log("======================");



var min = 5;
var max = 10;
function ranMm(min, max) {
    var rand = Math.floor((Math.random() * (max - min)) + min);
    return rand;
}
// var rand = Math.floor((Math.random()*50)+1);
console.log("Random Number between " + min + " - " + max + " : " + ranMm(min, max));


console.log("=======================");
console.log("     Bonus 2          ");
console.log("======================");


function dateForm (d) {
    var date = d.split("/");
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var correctMonth;
    var res;
    for (var i = 0; i <= 12; i++) {
        if (parseInt(date[0]) === (i + 1)) {
            correctMonth = months[i];
            res = correctMonth + ' ' + date[1] + ' ' + '20' + date[2];
        }

    }
    return res;
}

console.log(dateForm('8/10/17'));