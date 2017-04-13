(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    var person = {};



    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them1
     */
    person.firstName = "Rozelle";
    person.lastName = "Monroe";


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        var msg = "Hello from " + person.firstName + " " + person.lastName;
        return msg;
    };
    console.log(person.sayHello());
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(offer) {
        if (offer.amount < 200) {

            return;
        }
        console.log('---------------------------------------------------');
        console.log("Shopper Name: " + offer.name);
        console.log("Amount Spent before discount: " + "$" + offer.amount);
        console.log("Amount of discount: " + "$" + (((offer.amount * .35) * 100)/offer.amount + "%"));
        console.log("Amount Spent After discount: " + "$" + (offer.amount * .35).toFixed(2));

    });


})();
