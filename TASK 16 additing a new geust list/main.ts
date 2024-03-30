
// crating a guest list array
let guestlist = ['asad','hassan','hussain','waqar'];

//making variable list for those how cannot come.
let dontcome = guestlist[0];

//print the name of guest who cannot come.
console.log(dontcome, 'nahi aa skta');

//add and remove values from the gusst list array
guestlist.splice(0,1, 'abbas');

// print message for bigger dinner table.
console.log('brothers good news for us we found a new bigger table for dinner');
 
// adding a new value of starting value of array.
guestlist.unshift('ali raza');

//adding a new value of ending our array
guestlist.push('hamza');

//get a middle index of our guest list array.
let middleindex: number = Math.floor(guestlist.length / 2);


//adding a new guest into a middles of the array.
guestlist.splice(middleindex,0, 'anwar');

//pring a updated list for our guset.
console.log('new update list for guests');

//send a updated list for guest foreach one by one.
guestlist.forEach(all => console.log(`salam ${all},whould you like to dinnwer with me`));
