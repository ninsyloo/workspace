let i = 0; 

while (i < 6){
    i++;
    if (i===2){
    /* todo lo que se encuentra despues de esta condicion 
    va a ser ignorado y va a volver a realizarse la evaluacion
    por eso 2 no aparece*/
        continue;
    }
    if (i===4){
    /* si ya encontramos lo que necesitamos detenemos la ejecucion del loop */
        break;
    }
    console.log(i);
}

//esto se puede utilizar tambien para 
//for | for in | for of | do while.
