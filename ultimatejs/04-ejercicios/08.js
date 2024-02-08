//Crear un algoritmo que tome un array de objetos y devuelva un array de pares.

let array = [{
    id: 1,
    name: 'Ignacio'
},{
    id: 2,
    name: 'Lucas'
},{
    id: 3,
    name: 'Agus'
}];

//ejemplo: 

let pares = [
    [1, {id: 1, name: 'Ignacio'}],
    [2, {id: 2, name: 'Lucas'}],
    [3, {id: 3, name: 'Agus'}]
];

function toPairs(arr){
    let newArr=[];
    for(idx in arr){
        newArr.push([arr[idx].id, arr[idx]]);
    } return newArr
}

let resultado = console.log(toPairs(array));

//solution with destructuring. 

function toPairsTwo(arr){
    let pairs = [];
    for(idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id], elemento;
    } 
    return pairs;
}

let resultado2 = console.log(toPairsTwo(array));