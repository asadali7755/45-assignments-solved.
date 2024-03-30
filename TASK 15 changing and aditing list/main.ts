let frndlist = ['abbas','waqar','ali',];
let dontcome = frndlist[0];
console.log (dontcome, 'nahi aa rha');
frndlist.splice(0, 1, 'hussain');
frndlist.forEach(list => console.log(`salam ${list}, would you like to dinner with me?`));
