//! sincronas y asincronas
// sincronas: se ejecutan en el orden en que se llaman
// asincronas: se ejecutan en el orden en que se resuelven setTimeout, setInterval, fetch, etc son ejemplos de funciones asincronas

//! callbacks
// los callbacks son funciones que llaman a otras funciones, es decir una funcion que se ejecuta dentro de otra funcion y son asincronas.
// ejemplo 1 creamos un function que sea sincrona y otra que sea asincrona
 function asincronaFila(calback){
 setTimeout(function(){
    console.log('tu turno ha llegado');
    calback();
 }, 5000);
};
function mujerquellama(){
    console.log('Te presentas en tu turno');
};
console.log('llegas a la fila');
// cuando se llama a la funcion esta se demora 5 segundos en ejecutarse.
asincronaFila(mujerquellama);

console.log('te vas a comprar cafe');

//! promesas desde el punto de vista asiincrono
// las promesas son valores que aun no conocemos, es decir que no sabemos si se van a cumplir o no, pero que se resolveran en el futuro.
// las promesas tienen 3 estados: pendiente, resuelta, rechazada
// las promesas se crean con la palabra reservada new Promise
// las promesas tienen 2 parametros: resolve y reject ejemplo 
// mi promesa e sun objeto que tiene un metodo llamado then que recibe una funcion como parametro
let miPromesa = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve('se resolvio la promesa');
}, 0);
});
// ahora llamamos a la promesa
miPromesa.then(function(resultado){
    console.log(resultado);
});

// ejemplo 2 de una promesa fallada

let miPromesa2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      let error = false;
      if (error) {
        reject('La promesa2 falló');
      } else {
        resolve('La promesa2 se resolvió');
      }
    }, 0);
  });
  
  miPromesa2.then(function(resultado) {
    console.log(resultado);
  }).catch(function(error) {
    console.log(error);
  });
  
// .all es una propiedad de las promesas que permite ejecutar varias promesas al mismo tiempo dentro de un arreglo
// Promise.all recibe como parametro un arreglo de promesas ejemplo
Promise.all([miPromesa, miPromesa2]).then(function(resultado) {
    console.log(resultado);
});

// ejemplo de casos mas reales

function obtenerUsuario(){
    return new Promise(function(resolve, reject){
       let xhr = new XMLHttpRequest();
         xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
            xhr.onload = function(){
                if(xhr.status >= 200 && xhr.status < 300){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject(xhr.statusText);
                }
            };
            xhr.send();
    });
};
obtenerUsuario().then(function(usuario){
    console.log(usuario);
}).catch(function(error){
    console.log(error);
});

//! async await
// async es una palabra clave para declarar funciones asincronas
// await es una palabra clave que solo se puede usar dentro de funciones async y sirve para esperar a que una promesa se resuelva
// ejemplo
// creamos un function que hace una solicitud a una api mediante fetch  y retorna la respuesta en formato json luego creamos una function anonima con parametro de datos y dentro de ella creamos un console.log que imprime los datos ypor ultimo creamos un catch que recibe un error y lo imprime en consola
// function obtenerDatos(){
//   return fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
//   .then(function(respuesta){
//     return respuesta.json();
//   })
//   .then(function(datos){
//     console.log(datos);
//   })
//   .catch(function(error){
//     console.log(error);
//   });
// };
// // llamamos a la funcion
// obtenerDatos();
// // cosologeamos un mensaje para demostrar la asincronia de la funcion anterior
// console.log('el codigo sige ejecutandose');

// ahora vamos a realizar lo mismo que la function de arriba pero utilizando los metodos asyn y await  para visualizar la diferencia entre ambos metodos
async function obtenerDatos(){
  let respuesta= await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
  let datos = await respuesta.json();
  console.log(datos);
};
obtenerDatos();
console.log('el codigo sige ejecutandose');

// veamos otro ejemplo donde tendremos dos solicitudes a diferentes apis y este solo mostrara los datos cuando ambas solicitudes se hayan resuelto

async function obtenerTodojunto(){
  console.log("primero");
  // creamos una variable donde guardamos la primera solicitud api
  let RespuestaGasolina= await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico'); 
  // creamos la variable donde se guarda la respuesta de la api en un pareo de tipo json y le decimo await que espere a que se resuelva la promesa
  let datosGasolina = await RespuestaGasolina.json();
  console.log("en el medio");
  // creamos una variable donde guardamos la segunda solicitud api
  let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD');
  // creamos la variable donde parseamos en json y decimos que espere a que se resuelva la promesa
  let datosDolar = await respuestaDolar.json();
// por ultimo imprimimos en consola los datos de ambas solicitudes una vez resueltas juntas
  console.log(datosGasolina, datosDolar);
  console.log("Final");

};
obtenerTodojunto();
// en consola del navegador vamos  a visualizar que se imprime primero el mensaje de primero, luego el de en el medio, pero los datos de las solicitudes se imprimen juntos, es decir que se resuelven al mismo tiempo.y aparecera antes del console.log de final. asi functiona una function asincrona con async y await.

// !manejo de errrores con PROMESAS CALBACKS Y ASYNC AWAIT
//  creamos un function que realice una suma de dos numeros y que se demore 1 segundo en ejecutarse
//* vamos a resolver el manejo de  ERROR CON  CALLBACKS
function suamrNumeros(a,b, callback){
  setTimeout(function(){
    if(typeof a != "number"|| typeof b != "number"){
      // creamos un if para verificar el dato y si no cumple  que nos de un error de tipo calback que esta en el parametro de la function
      // creamasmos un error con la palabra reservada new Error y le pasamos un mensaje
      return callback(new Error("debe ingresar numeros esta es cpn calbacks"));}
      // fuera de la condicion le decimos que si esta no se cumplio pasara a ejecurarse el calback con el parametro null y la suma de los numeros
      callback(null, a+b);
  }, 1000);
};

// llamamos a la funcion y le pasamos los parametros y en el lugar del calback creamos una function 
suamrNumeros(1,1, function(error, resultado){
  if(error){
    console.error(error);
  }
  console.log(resultado);
});
 
//* Resolvemos el manejo de errores con PROMESAS

function suamrNumeros2(a,b,){
  // primero creamos una promesa
  return new Promise(function(resolve, reject){
// metemos dentro de la promesa el setTimeout
setTimeout(function(){
   // realizamos una verificacion con un if
    if(typeof a != "number"|| typeof b != "number"){
      // si no cumple la condicion que lo rechaze con un error y mande el mensaje de error
      reject(new Error("debe ingresar numeros esta es con promesas"));
    }else{
      // si se cumple es decir se resuelve la promesa que nos retorne la suma de los numeros
      resolve(a+b);
    }
}, 1000);
  });
};
// llamamos a la function que tiene la promesa y llenamos su parametro 
suamrNumeros2(6,2)
// luego le aplicamos el .then con una function anonima que recibe como parametro el resultado y lo imprime en consola
.then(function(resultado){
  console.log(resultado);
})
// luego le aplicamos el .catch con una function anonima que recibe como parametro el error y lo imprime en consola
.catch(function(error){
  console.error(error);
});

//* Resolvemos el manejo de errores con ASYNC AWAIT
async function suamrNumeros3(a,b,){
  // primero verificamos los datos con un if
  if (typeof a != "number" || typeof b != "number") {
    // si se cumple que lance un error con la palabra reservada throw y le pasamos un mensaje
    throw new Error("debe ingresar numeros esta es con async await");
  }
  //si lo anterior no se cumple que retorne la suma de los numeros
  return a+b;
};
// creamos una function para manejar el error que se lanzo con throw
async function manejarerrorthrow(){
  // creamos un try catch
  try{
    // dentro del try llamamos a la function que tiene el throw le pasamos los parametros y le aplicamos el await para que espere a que se resuelva
    let resultado = await suamrNumeros3("1",2);
    console.log(resultado);
    // ahora creamos un catch para manejar el error, si sale algun error que lo imprima en consola el mismo mensaje que le pasamos al throw
  }catch(error){
    console.error(error.message);
  }
};
manejarerrorthrow();