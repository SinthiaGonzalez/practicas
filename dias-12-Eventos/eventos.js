//? EVENTOS EN JS, los eventos son leidos al final del cuepo en el html
//* EXISTEN VARIOS EVENTOS DENTRO DEL ADD EVENT LISTENER QUE SON: click, doble click, mouse over, mouse out, keydown...
//* mouse over: cuando el mouse pasa por encima de un elemento este  hace mas oscuro el color
//* mouse out: cuando el mouse sale de un elemento este  hace mas claro el color
//* keydown: cuando se presiona una tecla
//* keyup: cuando se suelta una tecla
//* keypress: cuando se presiona una tecla y se mantiene presionada
//* focus: cuando se selecciona un input
//* blur: cuando se deselecciona un input
//* cut: cuando se corta un texto
//* copy: cuando se copia un texto
//* paste: cuando se pega un texto
//* input: cuando se copia, corta o pega un texto
//* click: cuando se hace click
//* dblclick: cuando se hace doble click
//* load: cuando se carga la pagina
//* DOMContentLoaded: cuando se carga el DOM
//* mousemove: cuando se mueve el mouse
//* mouseup: cuando se suelta el mouse
// ejemplos a continuacion de los eventos

let boton = document.getElementById("boton");
// boton.addEventListener("click", function () {
//     this.alert("Hola el boton fue presionado o clickado");
// });

//? EVENTOS y sus PROPIEDADES
//! event es un objeto que se psa como parametro en la funcion del addEventListener
// * event.currentTarget: devuelve el elemento al que se le asigno el evento
// * event.preventDefault(): previene la accion por defecto de un elemento, por ejemplo un enlace

//* EJMEPLO DE EVENT.TARGET (devuelve el valor del elelmento especifico que desencadeno el evento)

// creamos una function que lleve de parametro a event
function mostrarMEnsaje(event) {
    // esta fucntion mostrara un alert
    alert(event.target);

}

// le colocamos el escuchador de eventos al boton 
boton.addEventListener("click", mostrarMEnsaje);
// cuando hagamos click en el boton nos mostrara un alert con el elemento al que le dimos click que en este caso es el boton, pero dira lo siguiente: [object HTMLButtonElement] objeto de html de tipo boton esa seria la traduccion y eso seria lo que nos muetsra event.target, nos brinda esa informacion del elemento al que le dimos click o al que le hagaos el evento

//* EJMEPLO DE EVENT.CURRENTTARGET (proporciona una referencia al objeto que contiene al que inicio el evento)

let div= document.getElementById("miDiv");
// creamos una function que lleve de parametro a event
function mostrarMEnsaje2(event) {
    alert(event.currentTarget);
}
// le colocamos el escuchador de eventos al div
div.addEventListener("click", mostrarMEnsaje2);

//* EJEMPLOS DE EVENT.PREVENTDEFAULT( este metodo previene la accion por defecto de un elemento y lo modifica por otro)

let enlace = document.getElementById("enlace");
// creamos una function que lleve de parametro a event
function mostrarMEnsaje3(event) {
    event.preventDefault();
    alert("Enlace no habilitado por preventDeafault()");
}
// le colocamos el escuchador de eventos al enlace
enlace.addEventListener("click", mostrarMEnsaje3);

       //! EVENTOS DE TECLADO

//* EJEMPLOS DE EVENT KEYDOWN, KEYUP, KEYPRESS

//? keydown: cuando se presiona una tecla
// cada tecla tiene un codigo ASCII asignado
// traemos el elemto campo del html para iniciar el ejemplo de los eventos de teclado
let campo = document.getElementById("micampo");
// creamos una function que lleve de parametro a event y que solo imprima en el campo las teclas de tipo numerico y de lo contrario que no lo imprima en el campo.
function verificarnumero(event){
    // hoy en dia ya no se utiliza el KeyCocde, se utiliza solo el key que representa lo mismo aunque en el ejemplo lo dejarems con el antiguo 
 if (event.keyCode < 48 || event.keyCode > 57){
    // si la condicion de los parametros del if se cumple entonces que event no se ejecute
    event.preventDefault();
 }

};
campo.addEventListener("keydown", verificarnumero);

// ? KEYUP: cuando se suelta una tecla 


campo.addEventListener("keyup", function(event){
    // esta function anonima lo que me muestra es el valor que hay dentro del campo cuando se suelta la tecla
console.log("entrada del usuario: " + event.target.value);
});

// ? KEYPRESS: cuando se presiona una tecla y se mantiene presionada
// esta function solo muestra el teclado que fue presionado y no el que fue soltado
campo.addEventListener("keypress", function(event){
    console.log("carcter ingresado: " + event.key);
    
});

let campo1 = document.getElementById("miInput");

//! EVENTOS DEl MOUSE (MOUSEOVER, MOUSEOUT, MOUSEMOVE, MOUSEUP, MOUSEDOWN)

// vamos a hacer quie aparescan elem,entos html en el mismo mediante los eventos del mouse 
// creamos las variables que capture a la ul y al boton del html 
let btn = document.getElementById("miBoton");
let ul = document.getElementById("milista");

// agregamos el escuchador al boton 
// btn.addEventListener("click", function(){
//     ul.style.display = "block";
// });

// si la function que acabamos de crear le añadimos la propiedad mouseover es decir por encima de... en este caso si el raton anda por encima del boton este desencadenara lo que esta en la fucntion anonima.

// btn.addEventListener("mouseover", function(){
//     ul.style.display = "block";
// });

// ahora hacemos lo mismo pero con MOUSEOUT que es cuando el raton sale de un elemento

btn.addEventListener("mouseout", function(){
    ul.style.display = "block";
});

// podes añadirle un addevetlistener a todo el documento para que cuando el raton salga de la pagina se ejecute una accion.
document.addEventListener("mousemove", function(event){
console.log("Posicion X: " + event.clientX + "  - Posicion Y: " + event.clientY);
});

//! EVENTOS EN TIEMPO RAL 
//*WEBSOCKETS: es una tecnologia que permite la comunicacion bidireccional entre el cliente y el servidor, es decir, el cliente puede enviar informacion al servidor y el servidor puede enviar informacion al cliente en cualquier momento.
// creamos una variable donde se guarda la url del servidor web soket ficticio
let urlsoket= new WebSocket("wss://localhost:8080");
// ahora creamos las varaibles extras que son para capturar los elementos del html o dom
let mensajeingresado = document.getElementById("mensajeingresado");
let botonenviar = document.getElementById("btnenviar");
function mostrarmensaje1 (contenido){
    let contenedormensaje = document.getElementById("mensajechat");
    let elemmensaje= document.createElement("p");
    elemmensaje.innerHTML = contenido;
    contenedormensaje.appendChild(elemmensaje);
}
// ahora le agregamos el escuchador de eventos al boton
botonenviar.addEventListener("click", function(){
    let mensaje = mensajeingresado.value;
    mostrarmensaje1(mensaje);
    urlsoket.send(mensaje);
});
urlsoket.onmessage = function(event){
    let mensaje= event.data;
    mostrarmensaje1(mensaje);
};

//! EVENTOS PERONALIZADOS 
//capturamos las variables del html
let audio = document.getElementById("audio1");
let listamusicas = document.getElementById("listamusic");
// le colocamos un addEventListener a la lista de musicas
listamusicas.addEventListener("change", cambiarcancion);
// creamos la function que va a cambiar la cancion
function cambiarcancion(event){
    let cancionelegida = listamusicas.value;
    // le añadimos al audio src la cancion elegida
    audio.src = cancionelegida;
    // le añadimos al audio la propiedad play para que se ejecute la cancion
    audio.play();
    // vamos a crear un nuevo evento personalizado
    let evento = new CustomEvent("cambiodecancion");
    // le añadimos al audio el evento personalizado
    audio.dispatchEvent(evento);

}
audio1.addEventListener("cambiodecancion", mostrarcancion);
function mostrarcancion(){
    console.log("La cancion actual es: " + listamusicas.value);
};