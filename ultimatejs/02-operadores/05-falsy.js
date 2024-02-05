// short-circuit

// valores que evaluan el FALSO (falsy):

// false
// 0
// ''
// null
// undefined
// NaN 

let nombre = '';
let username = nombre || 'Anon';
console.log(username);
function fn1(){
    console.log('soy func 1')
    return false;
}

function fn2(){
    console.log('soy func 2')
    return true;
}

/* 
si por alguna razon necesitamos escribir una logica 
pero necesitamos que una logica anterior haya devuelto true 
en ese caso podemos hacer uso del operador && para ejecutar funciones. 

|| ---> nos devuelve el primer elemento que evalua en true
&& ---> nos devuelve el ultimo elemento que evalua en true
*/

let x = fn1() && fn2();
