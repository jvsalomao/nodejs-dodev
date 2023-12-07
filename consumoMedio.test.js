const consumoMedio = require("./consumoMedio");

test("Rodar 22km com etanol precisa de 2 litros", () => {
  expect(consumoMedio.consumoMedio(22, "etanol")).toBe(2);
});

test("Rodar 40km com gasolina precisa de 2 litros", () => {
  expect(consumoMedio.consumoMedio(40, "gasolina")).toBe(2);
});
