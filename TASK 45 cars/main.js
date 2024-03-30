/*Question 45: Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name. It should then
 accept an arbitrary number of keyword arguments. Call the function with the required
 information and two other name-value pairs, such as a color or an optional feature.
  Print the Object that’s returned to make sure all the information was stored correctly.*/
function makeCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car.options[key] = option[key];
        }
    }
    return car;
}
var car1 = makeCar('Toyato', 'Corola', { color: 'blue' }, { sunroof: true });
var car2 = makeCar('Royal-royce', 'Phantom', { color: 'Black' });
var car3 = makeCar('Supra', 'Toyato GR', { color: 'blue' }, { sunroof: true });
console.log(car1, "\n", car2, "\n", car3);
