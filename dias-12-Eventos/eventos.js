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

// keydown: cuando se presiona una tecla
