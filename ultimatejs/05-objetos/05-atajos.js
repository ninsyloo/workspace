let obj = {};
let obj2 = new Object();

/* 
new Array();
new String();
new Number();
new Boolean(); 
*/

function User(){
    this.name ="Xanxi fili"
}

let user = new User();
console.log(user.constructor);

/* Siempre es preferible crear las variables utilizando su
forma literal para que estos no tengan comportamientos alterados como cuando se 
los crea con constructores*/

const s1= "1 + 1";
const s2 = new String("1 + 1");

console.log(eval(s1), eval(s2));
console.log(s2.valueOf());