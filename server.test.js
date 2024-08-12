const calcularCuadrado = require('./server');
const server = require('./server');

test('test: calcularCuadrado', () => {
  expect(calcularCuadrado(3)).toBe(9);
});