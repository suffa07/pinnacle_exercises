(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Del", "Larry", "Marc", "Dusty"];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
    console.log("For Loop: \n");
    for (var i = 0; i <= names.length - 1; i++) {
        console.log(names[i]);

    }
    console.log("ForEach Loop: \n");
    //Or we can use a for each loop :
    names.forEach(function (element) {
        console.log(element);

    });

})();
