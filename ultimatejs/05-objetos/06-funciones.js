function Usuario(nombre){
    this.nombre = nombre; 
};

console.log(Usuario.name);
console.log(Usuario.length)

const U = Usuario;
let user = new U('Nin');

console.log(user);

//Las funciones son objetos de primera clase
//esto significa que tienen propiedades como los objetos
//podemos asignarlas a otras variables o constantes, y podemos pasarlas como argumentos a otras funciones.

function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Xanxi');
console.log(user1);

function returned(){
    return function(){
        console.log('hi world')
    }
}

let saludo = returned();
saludo();
