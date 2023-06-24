//! PROTOTIPOS
//? Los prototipos son la forma en la que JS implementa la herencia y todos los objetos tienen un prototipo que es el objeto del cual heredan sus propiedades
//? Los prototipos son un mecanismo por el cual un objeto puede heredar propiedades de otro objeto

// ejemplo de prototipos creamos un objeto  Empleado  que es una function constructora y le pasamos como parametros nombre, antiguedad y sueldo
function Empleado(nombre,antiguedad,sueldo){
    this.nombre=nombre;
    this.antiguedad=antiguedad;
    this.sueldo=sueldo;
    
}
// creamos dos instancias nuevas de tipo empleado una es empleado 1 y la otra es empleado 2, empleado1 hereda las propiedades de Empleado la function constructora y empleado2 hereda las propiedades de empleado1
let empleado1 = new Empleado("Federico Garay", 5, 150);
 
// de esta manera se hereda las propiedades de empleado1 a empleado2 
let empleado2 = Object.create(empleado1);

//* PROPIEDAD PROTOTYPE Y CAMBIARLOS EN EL OBJETO PRINCIPAl
//? cuando cambiamos una propiedad en el objeto principal se cambia en todos los objetos que heredan de el por eso se utiliza prototype para cambiar las propiedades en el objeto principal y no en los objetos que heredan de el
//? si realizamos el metodo de agregar metodos  los objetos heredados, lo que estamso haciendo es añadirlo a los hijos y no al principal por ende cuando se ejecute no se va a encontrar el metodo en el objeto principal y va a dar error por eso se utiliza prototype para agregar metodos al objeto principal y no a los hijos

//? vemos un ejemplo, primero creamso el consrtuctor con el prototype principal qeu seria el Libro()
function Libro(titulo,autor,anio){
    this.titulo=titulo;
    this.autor=autor;
    this.anio=anio;
    
}
// creamos una instancia de libro
let libro1 = new Libro("El señor de los anillos","J.R.R Tolkien",1954);
// creamos una instancia de libro
let libro2 = new Libro("Harry Potter","J.K Rowling",1997);

// ahora tenemos dos instancias de Libro y queremos añadirles un metodo nuevo a las dos instancias, antes hubieramso echo lo siquiente:

// libro1.abrirLibro = function(){
//    console.log(this.titulo +"esta abierto");
//     }
    // esto va a imprimir undifined ya que el metodo abrirLibro no esta en el constructor principal y no lo va a encontrar

    // la forma correcta de modificarlo seria la siguiente:
    Libro.prototype.abrirLibro = function(){
        alert(this.titulo +"esta abierto");
    };

    // ahora si vamos a poder acceder al metodo abrirLibro en las dos instancias de libro1, libro2, y ademas estara disponible para todas las instancias que creemos de Libro en el futuro y tambien para los ya creados.
  //*RECOMENDACIONES PARA PROTOTIPOS Y PROPIEDADES
    //? SE RECOMIENDA CREAR LOS METODOS ES DECIR LAS FUNCIONES FUERA DEL CONSTRUCTOR Y LUEGO AGREGARLOS AL PROTOTYPE DEL CONSTRUCTOR
    //? SE RECOMIENDA CREAR LAS PROPIEDADES DENTRO DEL CONSTRUCTOR Y NO EN EL PROTOTYPE
    //?eJEMPLO:
    function ejemplo(a){
        // propiedad declaradas dentro del constructor
        this.a=a;
    };
    // metodo declarado fuera del constructor
    ejemplo.prototype.metodo = function(){
        console.log("hola");
    };
    