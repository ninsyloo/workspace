//Tenemos que crear una funcion que nos devuelva un array
//donde c/u de los elementos sea un obj.

let pairs = [
    [1, {name: 'Nicolas'}],
    [2, {name: 'Felipe'}],
    [3, {name: 'Chanchito'}]
];

let array = [{
    id: 1,
    name: 'Nicolas'
},{
    id: 2,
    name: 'Felipe'
},{
    id: 3,
    name: 'Chanchito'
}]

function toCollection(arr){
    let newArr = [];
    for (idx in arr){
        let element = arr[idx];
        newArr[idx] = element[1];
        newArr[idx].id = element[0];
    }
    return newArr;
}

let resultado = toCollection(pairs);
console.log(resultado)