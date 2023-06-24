function CrearAleatorio(){
    let aleatorio1 = Math.random();
let textoaleatorio= document.getElementById("textoaleatorio");
textoaleatorio.textContent = aleatorio1;
}

function CrearAleatorio2(){
    //let aleatorio2 = Math.random()*(20-0)+0 ;nos da una base de 0 a 20 de numeros aleatorios
    let aleatorio2 = Math.round(Math.random()*(20-0)+0);
let textoaleatorio2= document.getElementById("textoaleatorio2");
textoaleatorio2.textContent = aleatorio2;
}
// queremos variar la base osea minimo o maximo, para ello debemos declarar parametros a la funcion 
function CrearAleatorio3(minimi,maximo){
    //en los parametros colocamos el minimo y maximo que queremos que nos de los numeros random 
    //dentro de redondear el numero mas bajo es decir floor  colocamos el resto de operaciones como se observa.
    // le agregamos el mas 1 al minimo para que lo incluya dentro de la base de numeros aleatorios
    let aleatorio3 = Math.floor(Math.random() * (maximo - minimi) + minimi+1);
let textoaleatorio3= document.getElementById("textoaleatorio3");
textoaleatorio3.textContent = aleatorio3;
}
// para generar un numero aleatorio entre 0 y 1