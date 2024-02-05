let comida = ['pizza, hamburguesa']
console.log(comida);
console.log(comida[0]);
comida[2]='milanesa';
comida[10]= 'pure';
console.log(comida[7]);//undef porque no existe


console.log(typeof comida);
//obj -- como los arrays se comportan como objetos podemos acceder a las propiedades de estos si intentamos escribirlas dentro de vscode.
console.log(comida.length);
