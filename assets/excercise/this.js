// this global scope
console.log(` this : ${this}`);
// this in function's scope
function whoIsThis() {
  return this;
}
console.log(`whoIsThis(): ${whoIsThis()}`);
// this in function's scope using strict mode
function whoIsThisStrictMode() {
  "use strict";
  return this;
}
console.log(`whoIsThis(): ${whoIsThisStrictMode()}`);

// this in object context
const person = {
  name: "David",
  greeting: function () {
    console.log(this.name);
  },
};
person.greeting(); // David
// when this is out of object
const action = person.greeting;
action(); // undefined

// this in a Class
function Person(name) {
  // this = {} just start filling out
  this.name = name;
}
Person.prototype.greeting = function () {
  console.log(` My name is ${this.name}`);
};
const david = new Person("David");
david.greeting();

function disemvowel(string) {
  let resultado = string.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, "");
  return resultado;
}

// Uncomment these to check your work!
console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'

function arrayBuilder(obj) {
  let valueArr = Object.values(obj);
  let keyArr = Object.keys(obj);
  let outputArr = [];
  for (let i = 0; i < keyArr.length; i++) {
    const element = keyArr[i];
    console.log(element);
  }
  console.log(valueArr, keyArr);
}

// Uncomment these to check your work!
console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []
