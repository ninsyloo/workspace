

//Las factory functions nos ayudan a no tener un codigo tan repetitivo
//por convencion se definen utilizando camelCase.

function crearUsuario(username, email){
    return {
        username,
        email,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...')
        }
    }
}

let user1 = crearUsuario('Nin', 'nin@xanxi.io');
let user2 = crearUsuario('Diegui', 'chino@xanxi.io');

console.log(user1, user2);