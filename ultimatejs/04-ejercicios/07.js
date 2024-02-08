//Crear algoritmo que devuelva el precio del producto mas impuestos

function precioCompleto(precio, impuestos){
    return Math.round(precio + (precio*impuestos));
}

let resultado = console.log(precioCompleto(19.9, 0.15));