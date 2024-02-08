/* 
Cuando nosotros estamos usando funciones constructoras
tenemos que utilizar UpperCamelcase por convencion.
*/

//id: 1, recuperarClave: function(){}
function User(){
    this.id = 1;
    this.recuperarClave = function(){
        console.log('recuperando clave..')
    }
}

let usuario = new User();
console.log(usuario)