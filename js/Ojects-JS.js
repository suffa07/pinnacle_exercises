/**
 * Created by DelMonroe on 4/13/17.
 */
(function () {
    "use script";

    var pet = {};

    pet.name = "Oliver";
    pet.species = "Dog";
    pet.age = 5;
    pet.gender = "Male";
    pet.clean = true;
    pet.hungry = true;
    pet.sleepy = true;
    pet.happy = true;
    pet.petFood = 10;
    pet.soap = 3;

    pet.callPet = function () {
        return pet.name;

    }

    pet.playWithPet = function () {
        pet.happy = true;
        pet.hungry = true;
        pet.clean = false;
        console.log(pet.name + " is Happy: " + pet.happy + "!");
        console.log(pet.name + " is Hungry: " + pet.hungry + "!");
        console.log(pet.name + " is Clean: " + pet.clean + "!");
    }

    pet.feedPet = function (petFood) {
        if (petFood < pet.petFood); {
            pet.hungry = true;
            pet.sleepy = false;
        }
        pet.hungry = false;
        pet.sleepy = true;
        pet.petFood -= 1;
    }

    pet.makePetSleep = function () {
        pet.sleepy = false;
        pet.happy = false;
        pet.hungry = true;
        pet.age += 1;

    }

    pet.cleanPet = function (soap) {
        if (soap < pet.soap) {
            pet.happy = true;
            pet.clean = false;

        }
        pet.happy = false;
        pet.clean = true;
        pet.soap -= 1;
    }

console.log("=======================");
console.log("        My Pet Name    ");
console.log("=======================");

console.log(pet.callPet());

    console.log("=======================");
    console.log("    Playing with Pet   ");
    console.log("=======================");

console.log(pet.playWithPet());

})();