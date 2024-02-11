//Cuando los objetos se asignan como variables se crea una direccion 
//y el objeto se guarda en memoria en un lugar completamente distinto
//cuando nosotros accedemos a el a traves de las variables lo que estamos
//haciendo es ingresar a la direccion a modificarlo. 

let a = {prop: 1};
let b = a;

b.prop = 1;

//como a y b contienen la direccion en memoria del mismo objeto
//cualquier cambio que se le asigne a b o a va afectar directamente
//al objeto al cual hacen referencia ambas direcciones.


console.log(a, b);

function suma(n){
    n.prop ++;
};

suma(a);
console.log(a)
//!!!!!!!!!!! IMPORTANTE.
//LOS TIPOS DE DATOS PRIMITiVOS 
//se copian cuando los asignamos a otras variables

//LOS TIPOS DE DATOS DE REFERENCIA
//se crea una referencia y estos son los obj, los arr y las funciones.
