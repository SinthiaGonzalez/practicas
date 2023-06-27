// vamos a guardar en una variable todos los elementos a manipular del html
let select = document.getElementById('select');
let input = document.getElementById('input');
let boton = document.getElementById('boton');
let ul = document.getElementById('ul');
// creamos dos variables donde guardamos un string con el nombre del archivo json
let archivo ="Pelicula.json";

//? creamos los escuchadores de eventos 
select.addEventListener('change', cambiararchivo);
// este es el segundo evento que se ejecuta cuando se cambia el select que inventamos nosotros con el metodo  new CustomEvent('cambiodeModo');
select.addEventListener('cambiodeModo', mensajeAlertmodo);
// vamos a darle un addEventlistener al input que verifique lo que ingresa en el teclado mediante el evento keydown
input.addEventListener('keydown', verificarInput);
// agregamos addEventListener al boton que se ejecuta cuando se hace click
boton.addEventListener('click', buscar)

//? creamos las functiones
function cambiararchivo(){
  // guardamos en la variable archivo el valor del select
  archivo = select.value;

  // creamos un nuevo evento personalizado, es decir en lugar de usar click, change, etc, usamos un nombre inventado por nosotros en este caso 'cambiodeModo'
  let evento = new CustomEvent('cambiodeModo'); 
  // aqui activamos el evento personalizado que creamos en la linea anterior
  select.dispatchEvent(evento);
};
// aqui creamos la function que se ejecuta cuando se cambia el select y se activa con el evento personalizado que creamos en la function anterior
function mensajeAlertmodo(){
alert('se cambio el archivo de busqueda a: ' + select.value);
};

function verificarInput(evento){
  if((evento.key < 65 || evento.key > 90) && evento.key != 32 && evento.key != 8){
    evento.preventDefault();
  }
};

function buscar(){
  // primero limpiamos la lista ul para que no se acumulen los resultados de busqueda y se pueda buscar varias veces sin problemas
  ul.innerHTML = '';
  //hacemos la busqueda en el archivo json
  fetch(archivo)
  .then(respuesta => respuesta.json())
  .then(function(salida){
    for(let item of salida.data){
      // si el item de la salida o sea la respuesat del json coincide con el valor del input entonces se agrega a la lista ul
      if(item.titulo.startsWith(input.value.toUpperCase())){
        let p = document.createElement('p');
        p.id = item.titulo;
        p.innerHTML = item.sinopsis;
        p.style.display = 'none';

        let li = document.createElement('li');
        li.innerHTML = item.titulo;
        li.addEventListener('mouseover', function(){
          let p = document.getElementById(item.titulo);
          p.style.display = 'block';
        });
        li.addEventListener('mouseout', function(){
          let p = document.getElementById(item.titulo);
          p.style.display = 'none';
        });
        li.appendChild(p);
        ul.appendChild(li);
      };
    };
  })
  .catch(error => console.log(error));
};