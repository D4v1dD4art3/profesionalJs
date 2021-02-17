// un objecto con una accion
// function Hero(name) {
//   const hero = {
//     name: name
//   }
//   hero.saludar = function() {
//     console.log(`Hola soy ${this.name}`, this);
//   }
//   return hero
// }
// const zelda = Hero('Zelda')
// zelda.saludar();
// const Link = Hero('Link')
// Link.saludar();
// cada vez que se crea otro objecto se llama la funcion se creara otra funcoine para mejorar este problema
// const heroMethods = {
//   saludar : function () {
//     console.log(`Hola soy un super Heroe ${this.name}`);
//   }
// }
// function Hero(name) {
//   const hero = {
//     name: name,
//   };
//   hero.saludar = heroMethods.saludar;
//   return hero;
// }
// const zelda = Hero("Zelda");
// zelda.saludar();
// const Link = Hero("Link");
// Link.saludar();

// para mejorar este codigo podemos utilizar object.creat()
// const newObject = Object.create(objecto)
// const heroMethods = {
//   saludar: function () {
//     console.log(`Hola soy un super Heroe ${this.name}`);
//   },
// };
// function Hero(name) {
//   const hero = Object.create(heroMethods);
//   hero.name = name;
//   return hero;
// }
// const zelda = Hero("Zelda");
// zelda.saludar();
// const Link = Hero("Link");
// Link.saludar();
// mejorar el codigo
// const heroMethods = {
//   saludar: function () {
//     console.log(`Hola soy un super Heroe ${this.name}`);
//   },
// };
// function Hero(name) {
//   const hero = Object.create(Hero.prototype);
//   hero.name = name;
//   return hero;
// }
// Hero.prototype.saludar = function () {
//     console.log(`Hola soy un super Heroe ${this.name}`);
//   }
// const zelda = Hero("Zelda");
// zelda.saludar();
// const Link = Hero("Link");
// Link.saludar();
// usando el keyword new
function Hero(name) {
  //se instancea el this con el keyword this
  // const hero = Object.create(Hero.prototype);
  // this = Object.create(Hero.prototype);
  this.name = name;
  // return hero; se pasa de forma implicita
}
Hero.prototype.saludar = function () {
  console.log(`New: ${this.name}`);
};
const zelda = new Hero("Zelda");
zelda.saludar();
const Link = new Hero("Link");
Link.saludar();

function arrayBuilder(obj) {
  var result = Object.keys(obj).map((key) => obj[key]);
  result.reduce();
  return result;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []

function addNumber(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(addNumber(4));
