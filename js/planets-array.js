/**
 * Created by DelMonroe on 4/13/17.
 */
(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log("Adding The Sun to the beginning of the planets array.");
    planets.unshift("Sun");
    logPlanets();

    console.log("Adding Pluto to the end of the planets array.");
    planets.push("Pluto");
    logPlanets();

    console.log("Removing The Sun from the beginning of the planets array.");
    planets.shift("Sun");
    logPlanets();

    console.log("Removing Pluto from the end of the planets array.");
    planets.pop();
    logPlanets();

    console.log("Finding and logging the index of Earth in the planets array.");
    console.log("Index of the Earth: " + planets.indexOf("Earth"));


    console.log("Using splice to remove the planet after Earth.");
    planets.splice(planets.indexOf("Earth") + 1, 1);
    logPlanets();

    console.log("Using splice to add back the planet after Earth.");
    planets.splice(planets.indexOf("Earth") + 1, 0 ,"Mars");
    logPlanets();

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    logPlanets();

    console.log("Sorting the planets array.");
    planets.sort();
    logPlanets();

})();
