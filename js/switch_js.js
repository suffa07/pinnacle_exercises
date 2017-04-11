/**
 * Created by DelMonroe on 4/10/17.
 */
"use strict";


//Problem 1

var luckyNumber = Math.floor(Math.random()* 6);


var tenP = .10;
var twF = .25;
var fiF = .50;
var purchase = 60;
var total = 0;

switch (luckyNumber) {

    case 1:
        total = (purchase - (tenP * purchase));
        break;
    case 2:
        total = (purchase - (twF * purchase));
        break;
    case 4:
        total = (purchase - (fiF * purchase));
        break;
    case 5:
        total = 0;
        break;

    default:
        total = 0;

}
console.log("Total: $" + total.toFixed(2));

console.log("============================================================");
console.log("============================================================");
console.log("============================================================");




// Problem 2

var month = Math.floor(Math.random() * 13);

console.log(month);
switch (month) {

    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

}