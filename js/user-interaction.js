"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
    function prmPt() {
        var username = prompt("What's your name?");
        if (username === "") {
            prmPt();
        } else if (username !== "") {
            alert("Welcome " + username + ", " + "it's a pleasure to meet you.")

            }
        var result = confirm("Do you like pizza " + username +  "?");
        var message = (result=== true) ? "I see you like pizza like I do." : "I'm sorry that you don't like pizza.";
        alert(message);
    }
prmPt();


// TODO: Show an alert message that welcomes the user based on their input.


// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.



function fibSeq(n) {

    if (i === 0) {
        return 0;
    }
    else if (i === 1) {
        return 1;
    }
    return fibSeq(i - 2) + fibSeq(i - 1);

}

var count = 0;
for (var i = 0; i <= 100; i++) {

    count = console.log(fibSeq(i));

}

console.log(fibSeq(count));