/*Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians
(), which prints the name of each magician in the array.*/
var magicianNames = ["Harry Houidin", "David Copperfield", "Penn Jillete", "Harry Porter", "Pinkro", "Neuro", "Hermione Granger"];
function show_magicians(magician) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
show_magicians(magicianNames);
