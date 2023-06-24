// declaraciones de control breack y continue
// breack: rompe el bucle
// continue: salta la iteracion actual y continua con la siguiente
//ejemplo
let array1= [1,5,24,95,11,10,62,15,9];
// yo quiero que imprima en pantalla los numeros del array pero solo los que son menores a 50
// y que cuando encuentre un numero mayor a 50 que salga del bucle con el else break

for (let numero of array1){
    if (numero<50){
        break;
    } else {
        break;
    }
    document.write(numero + "<br>");
}
document.write("fin del bucle");

// este es un ejemplo con continue

for (let numero of array1){
    if (numero<50){
        break;
    } else {
        continue;
    }
    document.write(numero + "<br>");
}
document.write("nunca veremos este mensaje porque el continue hace que el bucle salte la iteracion actual y continue con la siguiente"); 