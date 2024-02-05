//el loop de do while a diferencia de while lo que va hacer es en lugar de evaluar la condicion al comienzo lo va hacer al final.

let i = 2;

/* while(i < 2){
    if (i % 2 ==0){
        console.log('numero par', i);
    }
    i++;
}  */

do {
    if (i % 2 == 0){
        console.log('numero par', i)
    }
    i++;
} while (i < 2);

//do while -> primero ejecuta el codigo y luego se fija que se cumpla la condicion para detener el loop
// while   -> primero busca que se cumpla la condicion antes de ejecutar el codigo.