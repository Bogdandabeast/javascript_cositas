/* Realiza un programa que lea una secuencia de números enteros, uno por línea.
El programa deberá mostrar como resultado el número más alto, seguido del número más bajo, separados
por un espacio.
El programa incluirá una primera línea X, 1<=X<=100, indicando cuantos números a leer (esa línea no se
tendrá en cuenta). Tras ello se leerán X números en las próximas X líneas. */

let cantidadnumeros = parseInt(prompt("Dame la cantidad de numeros que vas a introducir"))
let numeros = []

for (let i = 0; i < cantidadnumeros; i++) {

    numeros.push(parseInt(prompt("dame un numero")))

}

numeros.sort((a,b) => a - b)

document.write("Min: " + numeros[0] + "<br>" + "Max: " + numeros[numeros.length - 1])










    












