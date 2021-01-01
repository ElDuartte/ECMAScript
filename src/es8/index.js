//Object entries
const data = {
  frontend: "Pepe",
  backend: "Isabel",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object values
const data = {
  frontend: "Pepe",
  backend: "Isabel",
  desing: "Ana",
};
const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding
const string = "hello";
console.log(string.padStart(7, "Hi "));
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, " -----"));

//Async y await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
