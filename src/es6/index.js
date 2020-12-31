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
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "Quiero escribir una frase epica \n" + "otra frase epica que necesitamos";
//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Oscar",
  age: "32",
  country: "ES",
};

console.log(person.name, person.age, person.country);

//es6
let { name, age, country } = person;
console.log(name, country, age);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = "global Let";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";
//no va a funcionar por que la variable es una 
//constante la cual NO puede cambiar su valor inicial
a = "a";
console.log(a);
