//te permite iterar las propiedades de un objeto.

let user = {
    id: 1,
    name: 'chanchito feliz',
    age: 25,
};

for (let prop in user){
    console.log(prop, user[prop])
}



let animales = ['chanchi', 'dragon', 'canguro']

//solo para demostrar que tmb se puede hacer
//pero es preferible utilizar 'for of' para este caso.

for(let indice in animales){
    console.log(indice, animales[indice])
}