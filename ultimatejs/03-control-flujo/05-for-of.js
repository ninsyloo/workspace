// te permite iterar elementos de una manera mas sencilla.

let comidas = ['hamburguesa', 'papas', 'pure', 'pizza'];

for (let comida of comidas){
    console.log(comida);
}



//como se haria con while.

let i = 0;

while( i < comidas.length){
    console.log(comidas[i]);
    i++; 
}