let numeros = []
let numeromayorque10 = false

for (let i = 0; i < 3; i++) {

    numeros.push(prompt("dame tres numeros"))
}



for (let i = 0; i < numeros.length; i++) {

    if(numeros[i] > 10) {

        numeromayorque10 = true

        break

    }

}

if(numeromayorque10 == true) {
    alert("hay un numero mayor que 10")
}

else {
    alert("los numeros son menores que 10")
}


