//define varibles.
let samsung = ('SAMsung');
let uppercaseApple = 'APPLE';
let ten = 10;
let twenty = 20;
let fruits = ['apple','banana','mango'];


//test for equality and unequality with strings.
console.log('is samsung is equal to samsung');
console.log (samsung=='samsung');

console.log('samsung is equal to apple?');
console.log(samsung == 'apple');

console.log('\n samsang is equal to samsang');
console.log(samsung !=samsung);

//test using the lowercase funtion.
console.log ('\n samsung is equal to samun after converting into lowercase?');
console.log (uppercaseApple.toLowerCase() == 'samung');
 
console.log('\nsamung is not equal to samsun after converting into lowercase?');
console.log(uppercaseApple.toLowerCase()!= 'samsung');

// numerical testes....
console.log ('\n ten is equal to twenty?');
console.log(ten == twenty);

//equal .

console.log ('\n ten is not equal to twenty?');
console.log(ten !=twenty);

//grater nongrater.
console.log('\n ten is grater then 0?');
console.log (ten > 0.);

console.log('\n is twenty is smeller then ten?');
console.log(twenty < ten);

//grater then or equal to..
console.log('\b is ten is grather then or equal to 5?');
console.log(ten >= 5);

//less then is equal.
console.log('\n is twenty is lessthen or equal to 10?');
console.log(twenty <= 10);

//  using command 'end' &&
console.log('\n twenty is equal to 10 or twenty is grather then ten?');
console.log(twenty == 10 && twenty > 10);

//using command 'or' ||
console.log('\n twenty is grater the ten or twenty is equal is 50?');
console.log(twenty > 10 || twenty == 50);

// whether an item include in array..
console.log('\n is apple is include in my fruits array');
console.log(fruits.includes('apple'));

//whether an ites is not include in array.
console.log('\n is whatermelon is include in my fruites array?');
console.log(fruits.includes('watermelon'));
