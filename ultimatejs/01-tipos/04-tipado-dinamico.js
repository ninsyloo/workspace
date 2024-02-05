let numero = 42;
let nombre='Hello World';
let verdadero= true; 
let falso = false; 
let nulo = null;
let undef;


console.log(typeof nombre)
console.log(typeof numero)
console.log(typeof verdadero)
console.log(typeof falso)
console.log(typeof nulo)
console.log(typeof undef)

//por que null devuelve obj?
//es porque asi lo dice la implementacion
/* en la primera implementacion de js los valores eran representados
como un tipo de etiqueta y un valor. El tipo de etiqueta para objetos era 0.
null era representado como NULL pointer en la mayoria de las plataformas, por consiguiente
null tenia 0 como tipo de etiqueta, por eso retorna obj */