function consumoMedio(distancia, combustivel) {
  if (combustivel === "gasolina") {
    return parseInt(distancia / 16);
  } else if (combustivel === "etanol") {
    return parseInt(distancia / 11);
  }
}

module.exports = { consumoMedio };
