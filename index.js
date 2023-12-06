var validator = require("validator");

console.log(validator.isEmail("foo@hotmail.com"));

var calculadora = require("./calculadora.js");

console.log(calculadora.somar(1, 2));
console.log(calculadora.subtrair(1, 2));
console.log(calculadora.multiplicar(1, 2));
console.log(calculadora.dividir(1, 2));
