const obj = {
  name: "oscar",
  age: 21,
  country: "ES",
};

let { name, ...all } = obj;
console.log(name, all);

const obj = {
  name: "juan",
  age: "21",
};

const obj1 = {
  ...obj,
  country: "ES",
};
console.log(obj1);

//promise finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2021-01-01");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
