var frndlist = ['abbas', 'waqar', 'ali',];
var dontcome = frndlist[0];
console.log(dontcome, 'nahi aa rha');
frndlist.splice(0, 1, 'hussain');
frndlist.forEach(function (list) { return console.log("salam ".concat(list, ", would you like to dinner with me?")); });
