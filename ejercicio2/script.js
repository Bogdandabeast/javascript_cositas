let fecha = []
let navidad = false



    fecha.push(prompt("dame el dia: "))
    fecha.push(prompt("dame el mes: "))



for (let i = 0; i < fecha.length; i++) {

    if(fecha[0] === 25 && fecha[1] === 12) {

        navidad = true

        break

    }

}

if(navidad == true) {
    alert("Es Navidad")
}

else {
    alert("No es Navidad")
}


