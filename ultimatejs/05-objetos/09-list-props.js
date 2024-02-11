const punto={
    x: 10,
    y:15,
    dibujar(){
        console.log('dibujando..')
    }
};

// Como preguntar si un objeto tiene una propiedad en particular
// EJ:
// delete punto.dibujar()
// punto.dibujar(); va a dar error porque dibujar no existe

//De que manera berifico existe el metodo o propiedad o que nadie lo borro:
if ('dibujar' in punto){
    punto.dibujar();
}

let keys = Object.keys(punto)
console.log(keys)

//aca podemos utilizar la palabara reservada de "of" porque el Object.keys nos esta devolviendo un array.
//Va haber momentos en le que necesitemos acceder al par llave - valor (key - value) y eso es exactamente
//lo que estamos haciendo aca: 

for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave])
}

//Tambien existe otro metodo 

for(let entry of Object.entries(punto)){
    console.log(entry)
}

//Esto nos permite explorar y ver las propiedades de un objeto cuando no las conocemos.
//siempre deberia usar FOR IN

for (let llave in punto){
    console.log(llave, punto[llave])
}

