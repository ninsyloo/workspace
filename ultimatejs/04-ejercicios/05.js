//crear algoritmo que devuelva numero menor y mayor de un array
let array = [2, 5, 7, 15, -5, -100, 55]

function getMenorMayor(arr){
 let low = arr[0]; 
 let high = arr[0]; 
 for (numero of arr){
    low = low < numero ? low : numero;
    high = high > numero ? high : numero;
 } return [low, high];
}

let numeros = getMenorMayor(array)
 console.log(numeros);