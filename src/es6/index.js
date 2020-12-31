function newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "ES";
  console.log(name, age, country);
}

//es6
function newfunction2(name = "Oscar", age = 32, country = "ES") {
  console.log(name, age, country);
}

newfunction2();
newfunction2("Ricardo", "23", "CO");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
