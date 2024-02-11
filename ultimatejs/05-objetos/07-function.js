//EXISTE un constructor que se llama Function.

function Punto(x, y){
    this.x = x; 
    this.y = y;
    this.dibujar = function(){
        console.log('dibujando...')
    }
}

//Este metodo sirve para extender objetos que hayamos definido antes.
let punto = {z: 7};
Punto.call(punto, 1, 2);
console.log(punto); 

//Apply hace exactamente lo mismo que call con la diferencia de que todos los argumentos
//que nosotros le pasemos se lo tenemos que entregar con la forma de un array.

Punto.apply(punto, [1, 2])


//esto NO SE UTILIZA. (abajo)
// const Point = new Function('x', 'y', `
// this.x = x; 
// this.y = y;
// this.dibujar = function(){
//     console.log('dibujando...')
// }`);

// const p = new Point(1,2);
// console.log(p)
