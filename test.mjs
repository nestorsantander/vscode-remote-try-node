//Test unitarios con mocha, chai y supertest.

import request from 'supertest';

(async () => {
    
    //const request = request();
    const { calcularCuadrado, app } = await import('./server.js');
    
        
    describe('Función calcularCuadrado', () => {        
        it("debería devolver el cuadrado de un número positivo", () => {
            const resultado = calcularCuadrado(5);
            expect(resultado).to.equal(25);
        });

        it('debería devolver el cuadrado de un número negativo', () => {
            const resultado = calcularCuadrado(-4);
            expect(resultado).to.equal(16);
        });

        it('debería devolver 0 cuando el número es 0', () => {
            const resultado = calcularCuadrado(0);
            expect(resultado).to.equal(0);
        });
    });

    describe('GET /', () => {
        it('debería devolver el cuadrado del número pasado como query param', () => {
            request(app)
                .get('/?numero=3')
                .end((err, res) => {
                    expect(res.text).to.include('La potencia cuadrada de 3 es 9');                    
                });
        });

        it('debería manejar números negativos', () => {
            request(app)
                .get('/?numero=-2')
                .end((err, res) => {
                    expect(res.text).to.include('La potencia cuadrada de -2 es 4');
                });
        });

        it('debería manejar valores no numéricos', () => {
            request(app)
                .get('/?numero=abc')
                .end((err, res) => {
                    expect(res.text).to.include('La potencia cuadrada de NaN es NaN');
                });
        });
    });
})();
const expect = (await import('chai')).expect;
