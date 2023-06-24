            // ? METODO 1 DE SOLICITAR INFORMACION A UN ARCHIVO JSON DESDE UN JAVA SCRIPT
// ! EXTRAYENDO INFORMACION DE UN JSON DESDE UN JAVA SCRIPT Y VISALIZARLO EN UN HTML

//* 1- declaramso una variable donde guardaremos el json
let datosjson1;
//* 2- creamos otra variable de nombre xhr por el xmlhttprequest que esatriamso instanciando este objeto de javascript
let xhr= new XMLHttpRequest();
//* 3- abrimos la conexion con el metodo open que corresponde al XMLHttpRequest() y le pasamos los parametros, estos parametros estan compuestos por 
        // metodo: GET, POST, PUT, DELETE
       // url: la url del archivo json
      // true: si es asincrono 
     // false: si es asincrono 
xhr.open('GET',"objeto.json",true);

//* 4-  ahora llamamos al metodo responseType que es el que nos permite definir el tipo de respuesta que esperamos del servidor, en este caso sera un json
xhr.responseType='json';
// java script parsea de forma autonoma los datos del json para que los usemos en java script y no tengamos que hacerlo nosotros.

//* 5- ahora llamamos al metodo onload que es el que nos permite ejecutar una funcion cuando la peticion se haya completado, en este caso le pasamos una funcion anonima
xhr.onload=function(){
    // comprobamos si el esatdo de la solicitud de datos es 200, que es el codigo de estado que nos indica que la peticion se ha realizado correctamente
    if (xhr.status === 200){
        // si da 200 entonces le digo que datosjson sea igual a la respuesta de la peticion
datosjson1=xhr.response;

// declaramos una variable que guarde el elemeto del html donde queremos que se visualice la informacion del json
let contenedorNombre=document.getElementById("nombre");
// ahora le decimos que el contenido de ese elemento sea igual a la informacion que nos devuelve el json
contenedorNombre.textContent = datosjson1.comentario1 + "// "+ datosjson1.nombre + " // " + datosjson1.edad;

    }else{
       alert("no funciono amiga"); // manejar el error
    }
};
//* 6- ahora llamamos al metodo send que es el que nos permite enviar la peticion al servidor
xhr.send();

//! descomentar para que funcione el metodo fetch

//? promesas y Fetch (metodos para hacer solicitudes a un servidor o json desde un javascript)
//* Fetch es un metodo que nos permite hacer peticiones a un servidor o a un archivo json desde un javascript
//ejemplo de fetch
 //colocamos la url del archivo jscon que queremos solicitar

fetch("objeto.json")
//el metodo then nos permite ejecutar una funcion cuando la peticion se haya completado
//el metodo then recibe como parametro una funcion anonima que recibe como parametro una variable cualquiera en este caso res donde se guarda la respuesta de la peticion
.then(res=>res.json())
.then((salida)=>{
    datosjson=salida;
    let contenedorNombre2=document.getElementById("nombre2");
    contenedorNombre2.textContent = datosjson._comentario3 + " -- " + datosjson.nombre2 + " -- " + datosjson.edad2;
})
//el metodo catch nos permite ejecutar una funcion cuando la peticion no se haya completado por algun error  y nos identifica el problema y en este caso le decimos que lo muestre en un alert
.catch(error=>alert(error));

