/* 
POO -- Programacion Orientada a Objetos

Es una forma practica de agrupar datos que se encuentran 
relacionados entre si de alguna manera.
*/

let user = {
    email: 'nin@holamundo.io',
    name:'Nin',
    direccion: {
        calle: 'Manzanita',
        numero: 8
    },
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...')
    },
}
