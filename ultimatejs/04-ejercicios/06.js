//crear algoritmo que devuelva cantidad
//de numeros positivos de un array

let array = [2, 5, 7, 15, -5, -100, 55]
function cuantosPositivos(arr){
    let cantidad = 0;
    for ( num of arr){
        if(num > 0){
          cantidad++;
        }
    } return cantidad; 
}

let resultado = cuantosPositivos(array);
console.log(resultado);

//guardar numeros positivos en un array

function positivos(arr){
  let positive = arr.filter((e)=>{return e > 0})
  return positive;
}

let result = positivos(array);