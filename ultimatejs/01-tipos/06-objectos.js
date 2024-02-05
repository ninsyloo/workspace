//TIPO DE REFERENCIA

let nombre = 'Toji Fushiguro';
let anime = 'jjk';
let edad = 36;

// par llave - valor

let personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad
};

//obj

console.log(personaje);

//si quiero acceder solo a una propiedad:

console.log(personaje.nombre);
console.log(personaje['anime']) //notacion de parentesis cuadrado

//para modificar una propiedad:

personaje.edad = 30;
personaje['edad'] = 29; 
/*si no conoces el nombre de la propiedad la notacion de parentesis cuadrado es la mejor convencion para utilizar */
let llave = 'anime';
personaje[llave] = 'jujutsu kaisen';

//para eliminar propiedades
delete personaje.edad;

console.log(personaje);