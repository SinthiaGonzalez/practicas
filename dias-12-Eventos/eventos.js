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
boton.addEventListener("click", function () {
    this.alert("Hola el boton fue presionado o clickado");
});