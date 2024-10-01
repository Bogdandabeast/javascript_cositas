let datos = []
let numeromayorque10 = false



    datos.push(parseInt(prompt("dame tu sueldo ")))
    datos.push(parseInt(prompt("dame tus años de antiguedad ")))




for (let i = 0; i < datos.length; i++) {

    if(datos[0] < 500 && datos[1] >= 10) {

        alert("su sueldo es: " + datos[0] * 3)

    }

    else if(datos[0] < 500 && datos[1] < 10) {

        alert("su sueldo es: " + datos[0] * 2)

    }

    else {

        alert("su sueldo es: " + datos[0])

    }
    


}




