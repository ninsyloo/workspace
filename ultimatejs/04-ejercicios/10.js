/* 
Crear array de longitud N, y que sus elementos sean 
numeros de 1 hasta N
*/

let longitud = 7;

function crearArray(n){
    if(n <= 0){
        return [];
    }
    let newArr = [];
    for (let i = 1; i <= n; i++){
        if (i <= n ){
            newArr.push(i)
        }
    } 
    
    return newArr;
}

let resultado = crearArray(longitud);
console.log(resultado) 