/* Realiza un programa que lea un numero N y muestre por la salida estandar todos los pares desde 2 hasta N
(inclusive).
Cada número se mostrará en una línea distinta.
N siempre sera mayor o igual a 2. */

let numero = parseInt(prompt("Dame un numero y te devuelvo los pares: "))
let respuesta = []

if (numero >= 2) {

    for(i = 2; i <= numero; i = i + 2) {

        respuesta.push(i)

        

    }

    alert(respuesta)

}

else {
    alert("error el numero es menor que 2")
}








