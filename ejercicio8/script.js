/* Desarrollar un programa que muestre la tabla de multiplicar del numero X, hasta el valor Y. Ambos los leerá
de la entrada estándar y estarán en una sola línea separados por un espacio, siendo -50 <= X <= 50 , 1 <= Y <=
20
La tabla la mostrará con una entrada por línea. Entre cada elemento habrá un único espacio de separación. */

let x = parseInt(prompt("dame el numero x "))
let y = parseInt(prompt("dame el numero y "))

for(i = 1; i <= y; i++) {

    document.write(x + " x " + i + " = " + x*i + "<br>")

}








