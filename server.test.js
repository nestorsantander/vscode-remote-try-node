const { app, calcularCuadrado } = require('./server');

test('test: calcularCuadrado', () => {
  expect(calcularCuadrado(3)).toBe(9);
});

test('test: appWeb', () => {  
  app.get('/?numero=3', (req, res)=>{
    const numero = parseFloat(req.query.numero);
    const resultado = calcularCuadrado(numero);
    expect(res.send(`La potencia cuadrada de ${numero} es ${resultado}`)).toBe('La potencia cuadrada de 3 es 9');
  });
});
