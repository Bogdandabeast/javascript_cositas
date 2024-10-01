/* Realiza un programa que lea número y diga si es primo o no.
El número puede tomar los valores 1 <= numero <=10000.
Recuerda que un número primo es aquel que solo es divisible por si mismo y por la unidad y que por
convención el número 1 no se considera primo. La definición de primo la tienes en https://es.wikipedia.org/
 wiki/N%C3%BAmero_prim o
Utiliza una forma optimizada para reducir el número de operaciones.
Si tienes problemas consulta la solución, pero te animamos a que primero lo intentes por tus medios :) */

let numero = parseInt(prompt("dame un numero entre 1 y 10000"))
let numeroprimo

if(numero >= 1 && numero <= 10000 && numero != 1 && numero != 2) {

    for(let i = 2; i <= numero; i++) {

        if(numero % i == 0){
            document.write("el numero " + numero + " no es primo y el divisor es " + i )

        break

        }

        else {
            document.write("el numero es primo " + numero)
            break
        }

    }




}

else if(numero == 2) {

    document.write("el numero es primo " + numero)

}

else {
    document.write("el numero esta fuera del rango.")
}



    












