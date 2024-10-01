/* Realiza un programa que lea un numero N y muestre por la salida estandar todos los impares desde
N(inclusive) hasta 1 .
Cada número se mostrará en una línea distinta.
N siempre sera mayor o igual a 1. */

let numero = parseInt(prompt("Dame un numero y te devuelvo los impares: "))
let respuesta = []

if (numero >= 1) {

    for(i = 1; i <= numero; i = i + 2) {

        respuesta.push(i)

        

    }

    alert(respuesta)

}

else {
    alert("error el numero es menor que 1")
}








