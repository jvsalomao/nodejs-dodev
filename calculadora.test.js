const calculadora = require("./calculadora");

test("Somar 1 mais 2 igual a 3", () => {
  expect(calculadora.somar(1, 2)).toBe(3);
});

test("Subtrair 3 menos 2 igual a 1", () => {
  expect(calculadora.subtrair(3, 2)).toBe(1);
});

test("Multiplicar 2 por 2 igual a 4", () => {
  expect(calculadora.multiplicar(2, 2)).toBe(4);
});

test("Dividir 4 por 2 igual a 3", () => {
  expect(calculadora.dividir(4, 2)).toBe(2);
});
