
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

function calcularCuadrado(numero) {
    return numero * numero;
};

app.get('/', (req, res) => {
	const numero = parseFloat(req.query.numero);
	const resultado = calcularCuadrado(numero);
	res.send(`La potencia cuadrada de ${numero} es ${resultado} \n`);
});

// Solo escucha en el puerto si este archivo es ejecutado directamente
if (require.main === module) {
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
}

// Exporta la función y la app para que puedan ser usadas en los tests
module.exports = { calcularCuadrado, app };
