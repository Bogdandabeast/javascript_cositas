/* Realiza un programa que lea una secuencia de notas (con valores que van de 0 a 10, sin decimales).
Se leerá una nota por línea.
La entrada acabará con el valor -1. El programa debe mostrar por salida estándar "SI" si hay algún 10, "NO"
en caso contrario. */

let numeros = []
let notables = 0

numeros.push(parseInt(prompt("dame las notas del 0 al 10 sin decimales, escribe -1 para acabar")))

for(i = 0; i < numeros.length; i++){

    if(numeros[i] == -1) {
        break
        
    }

    else if(numeros[i] == 10) {
        document.write("Hay un 10 felicidades." + "<br>")
        notables++
    }

    
    numeros.push(parseInt(prompt("dame las notas del 0 al 10 sin decimales, escribe -1 para acabar")))
    

    

}

document.write("Tienes " + notables + " dieces")

    












