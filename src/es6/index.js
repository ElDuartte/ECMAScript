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

let name = "Juan";
let age = 21;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: "Juan", age: 21 },
  { name: "Paco", age: 27 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {};

const listOfNames4 = (name) => {};

const square = (num) => num * num;

//promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module.js';
hello();

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


let b = 'a';
let b = 'b'
console.log(b)