/*Animals: Think of at least three different animals that have a common characteristic. Store the names of
these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program
 to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your
 program stating what these animals have in common. You could print a sentence such as Any of these animals
 would make a great pet!*/
// 1st Step
var animals = ["Cat", "Dog", "Rabbit"];
console.log("\t\t\t\tList of Animals\n");
for (var i = 0; i < animals.length; i++) {
    console.log("         ", animals[i]);
}
// 2nd Step
console.log("\tStatement about each Animal\n");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    switch (animal) {
        case "Cat":
            console.log("Cats are beautiful and friendly animals.");
            break;
        case "Dog":
            console.log("Dogs are loyal, loving, hilarious and endless, forgiving creatures who have a knack of for warming our hearts.");
            break;
        case "Rabbit":
            console.log("Rabits are playful and very loyal to their masters.");
            break;
    }
}
;
// Another Method
console.log("\t Another Method\n");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log(animal);
}
// 2nd Step
console.log("\tStatement about each Animal\n");
for (var _b = 0, animals_3 = animals; _b < animals_3.length; _b++) {
    var animal = animals_3[_b];
    if (animal === 'Cat') {
        console.log("".concat(animal, " are beautiful and friendly animals."));
    }
    else if (animal === 'Dog') {
        console.log("".concat(animal, " are loyal, loving, hilarious and endless, forgiving creatures who have a knack of for warming our hearts."));
    }
    else if (animal === 'Rabbit') {
        console.log("".concat(animal, " are playful and very loyal to their masters.\n"));
    }
}
console.log("\tWhat these animals have in commom?\n");
console.log("These animals would make a great pet.Pets are animals that we love to keep.Pets are kept for community and entertainment.");
