/* Los objetos son dinamicos, lo que significa
que puedes agregar o quitar propiedades a tu antojo 
y cambiar su valor en cualquier momento */

const user = {
    id: 1
};

user.name = 'Nin';
user.guardar = function (){
    console.log('Guardando', user.name)
}

user.guardar();

/* 
Por que es posible modificar constantes cuando se trata de objetos? 
cuando nosotros estamos utilizando la palabra reservada de 'const' para definir
una variable lo que ocurre es que no nos va a dejar cambiar el valor de esta variable.
Entonces lo que nosotros no podemos hacer es cambiarle el valor que en este caso seria 
contener un objeto, pero si podemos agregarle o quitarle propiedades y modificar estas mismas.
*/

//para eliminar propiedades 

delete user.name;
delete user.guardar;
console.log(user);

//Si por alguna razon nosotros no queremos que las propiedades de un objeto puedan modificarse

const user1 = Object.freeze({id: 1});
user1.name = 'Nin';
user1.id = 2;

console.log(user1);

//sin embargo si quisieramos poder cambiarle los valores a las propiedades que ya posee, pero no agregarle
//o quitarle propieades. 

const user2 = Object.seal({ id: 2 });
user2.id = 3
console.log(user2);

