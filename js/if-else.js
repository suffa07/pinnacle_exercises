
"use strict";

//Problem 1

var sum = [70, 80, 95].reduce(add, 0);

function add(a, b) {
    return a + b;
}

var avg = (sum/3);

if (avg > 80) {
     console.log("Avg: " + avg.toFixed(2)  + " You are awesome");
}



//Problem 2
<!--product > $200 => offer-->
<!--var cameron = 180-->
<!--var ryan = 250-->
<!--var george =320-->



function offer(n, x) {
    if (x > 200) {
    console.log(n + " qualifies for a discount. " + "Before discount: " + "$" + x + " After discount: " + "$" + (x * .35));
    } else {
        console.log(n + " Does not qualify for a discount " + "Amount spent: " + "$" + x + " Amount more needed to spend for discount: " + "$" +(200 - x));
    }
}




offer("Cameron", 180);
offer("Ryan", 250);
offer("George", 320);






//Problem 3
var flipACoin = Math.floor(Math.random()* 2);

var buy = (flipACoin === 0) ? ("Buy a car"): ("Buy a house");
console.log(buy);