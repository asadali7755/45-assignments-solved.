var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countres and print a orignal order
var countresvisit = ['erope', 'amrica', 'brazil', 'canada'];
console.log('orignal order', countresvisit);
//print the array in alphabite order without modifing the actual array  list.
console.log('alphabetical order', __spreadArray([], countresvisit, true).sort());
// show thats the array is in ornignal order.
console.log('still in orignal order', countresvisit);
//print the array of reverced order without modifing the orignal array.
console.log('reverce order', __spreadArray([], countresvisit, true).reverse());
// show thats the array is in ornignal order.
console.log('still in orignal order', countresvisit);
//we have to change the origanl array into reverce order.
console.log(countresvisit.reverse());
// again we change reverce to the array in orignal condition.
console.log(countresvisit.reverse());
//print orignal array into alphabatical order.
console.log('show the array in alphabatical order', countresvisit.sort());
//ptint tha array hase change into reverced order.
console.log('orignal array reverced again', countresvisit.reverse());
