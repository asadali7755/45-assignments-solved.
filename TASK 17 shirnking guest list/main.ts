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



// questing 17; romoving the name to the list and invite only 2 guest for the dinner into your inviting list which is i made in question 16.

// print a messge for inviting only 2 guest for dinner.
console.log ('unfortunatly the new dinner table wonot arriev on time, so i can invite only 2 guest for the dinner with me.');

// using this while.loop using romvie guest from the array untile only two names are remaning.
 while (guestlist.length > 2)     {let removeguest= guestlist.pop();          console.log(`sorry ${removeguest} i cant invite you to dinner`)};

 //printing invitation the last 2 guestes into the list.
 console.log('invitation to the last 2 guests');

 guestlist.forEach(lasttow => console.log(`luckily ${lasttow} still invited for the dinner`));

 //removing the last 2guest form the list.
 guestlist.pop();
 guestlist.pop();
 console.log('emptylist:', guestlist);