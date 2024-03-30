var Person = ("asad ali");
console.log(Person.toLowerCase());
console.log(Person.toUpperCase());
console.log(Person.replace(/\b\w/g, function (name) { return name.toUpperCase(); }));
