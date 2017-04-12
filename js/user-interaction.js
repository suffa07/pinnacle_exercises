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
