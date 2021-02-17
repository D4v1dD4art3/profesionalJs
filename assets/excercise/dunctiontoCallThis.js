//call se dice quien es el objecto contexto
const david = {
  name: "David",
  apellido: "Duarte Jimenez",
};
function saludar() {
  console.log(`Hola soy ${this.name} ${this.apellido}`);
}
saludar.call(david);

// call with arguments
const david = {
  name: "David",
  apellido: "Duarte Jimenez",
};

function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}
caminar.call(david, 400, "norte");

//establece 'this' usando apply
const david = {
  name: "David",
  apellido: "Duarte Jimenez",
};
const valores = [400, "sur"];

function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}

caminar.apply(david, valores);

// call, comas: cc
//apply , Array: aa

//establecer this con bin()
function saludar() {
  console.log(`Hola soy ${this.name} ${this.lastName}`);
}
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}
const daniel = { name: "Daniel", lastName: "Duarte" };
const danielSaluda = saludar.bind(daniel);
const danielCamina = caminar.bind(daniel, 4000);
danielSaluda();
danielCamina("norteEste");
