function saludar(){

    console.log('hola mundo')

};

saludar();

//             parametros
function suma( num1, num2){
    return num1 + num2;
}

//            argumentos
console.log(suma(2, 3));
console.log(typeof suma);

//diferencia entre EXPRESIONES y DECLARACIONES
/* 
declarations: 
cuando vas a crear algo que vas a referenciar en un futuro 
- let
- const 
- function
- async function
- class 
- export / import
 
Statement: en lo inmediato 
- it 
- for 
- else 
- switch

expression: 
es cualquier porcion de codigo que evalue en un valor
Cada vez que el codigo hace algo y puedes obtener un valor de este estamos frente a una expresion,
pero si la expresion de codigo no hace absolutamente nada como lo seria declarar una funcion
o declarar una variable estamos frente a una declaration. Si este te permite escribir logica o realizar
ciertas tareas estamos frente a un statement.
simplificado:
si no le puedes hacer un console.log es una declaracion
si en cambio, si puedes es una expresion. 
*/