//estas son las variables
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas el numero entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este codigo realiza
 la comparación 
*/

if (numeroUsuario == numeroSecreto) {
    alert(`acertaste, el numero es: ${numeroUsuario}`);
 } else {
    if (numeroUsuario > numeroSecreto) {
        alert('el numero secreto es menor');
    } else {   
        alert('el numero secreto es mayor');
    }


    //alert('no acertaste el numero, intenta de nuevo carnalito');
}
