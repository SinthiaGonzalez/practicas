// Etiquetas es un nombre que creo en una parte del codigo para indicarle al codigo que quiero volver ahi despues de usar breack o continue 
// se crea utilizando cualquiero nombre seguido de :
// ejemplo:
// colocamos la etiqueta antes de un loop y despues de la palabra continuo o breack.

/*miLoop:
for(y=1; y<=10; Y++){
    if(y==4){
        continue miLoop;
    } else {
        document.write(y + "<br>");
    }
   
}*/

// vamos a crear un tablero y que este recorra cada casilla del tablero y me diga su nombre y su posicion

let alto = 4;
let ancho = 3;
loopExterno:
for (let i=1; i<=alto; i++){
    for(let j=1; j<=ancho; j++){
        document.write("casilla y: " + i + " Casilla x: " + j + "<br>");
        if(y==2 && x==2){
            break loopExterno;
        }
    }
}