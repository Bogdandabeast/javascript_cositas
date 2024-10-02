/* Realiza un programa que lea una cantidad de dinero (múltiplo de 5) y tras ello desglose el cambio en dinero
de 500,200,100,50,20,10,5 intentado dar el mínimo número de dinero.
El programa mostrará por la salida estándar el número mínimo de dinero. */

let cantidad = parseInt(prompt("Dame una suma de dinero, multiplos de 5 solo"))

function desglosarDinero(cantidad) {
    if (cantidad % 5 !== 0) {
        document.write("La cantidad debe ser un múltiplo de 5.");
        return;
    }

    const billetes = [500, 200, 100, 50, 20, 10, 5];
    const resultado = {};

    for (let billete of billetes) {
        if (cantidad >= billete) {
            resultado[billete] = Math.floor(cantidad / billete);
            cantidad %= billete;
        }
    }

    document.write("Desglose de billetes:");
    for (let billete of billetes) {
        if (resultado[billete]) {
            document.write(`Billetes de ${billete}€: ${resultado[billete]}`);
        }
    }
}


desglosarDinero(cantidad)






    












