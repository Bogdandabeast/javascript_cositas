let horastrabajadas = prompt("dame tus horas trabajadas")
let precioporhora = prompt("dame el precio por hora")
let horasextra
let sueldobruto
let sueldoneto
let impuestosdinero


if (horastrabajadas <= 35) {
    sueldobruto = precioporhora * horastrabajadas
}

else if(horastrabajadas > 35){

    horasextra = horastrabajadas - 35
    sueldobruto = precioporhora * 35 + horasextra * precioporhora * 1.5

}

if (sueldobruto <= 500) {
    sueldoneto = sueldobruto
}

else if(sueldobruto > 500 && sueldobruto <= 900) {
    impuestosdinero = sueldobruto - 500
    sueldoneto = sueldobruto - (impuestosdinero * 0.25)
}

else if(sueldobruto > 900){
    impuestosdinero = sueldobruto - 900
    sueldoneto = sueldobruto - (impuestosdinero * 0.45 + 400 * 0.25)
}


alert("sueldo bruto: " + sueldobruto + " sueldo neto: " + sueldoneto)

