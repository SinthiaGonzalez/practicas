
//!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                  //* OBJETOS LITERALES

// los objetos se declaran comom variables pero se iguala a una llave que es donde se guardan los atributos o propiedades del objeto

// se declara con el nombre objetopelota, esto e sun objeto literal porque se declara directamente en el codigo de forma manual pero hay otras formas de declarar objetos que se veran mas adelante
var objetoPerro = {
    // se declaran las propiedades del objeto
    nombre: "Firulais",
    //se coloca una coma para separar las propiedades
    raza: "Caniche",
    edad: 5,
    // se declaran los metodos del objeto que son funciones que hacen algo
    ladrar: function(){
        console.log("Guau Guau");
    },
};

// para acceder a las propiedades del objeto se coloca el nombre del objeto seguido de un punto y el nombre de la propiedad

console.log(objetoPerro.ladrar());
// ejercicio de la cursada Udemi 78
let automovil={
    marca: "Ford",
    modelo: "Fiesta",
    anio: 2015,
    arrancar:()=> {
        console.log("En marcha");
    }
};
//!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                  //* MODIFICAMOS EL OBJETO
// CON LA PALABRA RESERVADA THIS
// this hace referencia al objeto en el que se encuentra
// this.nombre hace referencia a la propiedad nombre del objeto
//EJEMPLO
objetoPerro.edad = 6; 
// otro caso donde se le suma 1 a la edad del objeto 
objetoPerro.edad= objetoPerro.edad + 1;

                                             //* AÑADIR UNA NUEVA PROPIEDAD AL OBJETO MEDIANTE CORCHETES
objetoPerro["colorDeOjos"] = "Marron";

//!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                          //* OBJETOS CON COSNTRUCTORES/ FUNCIONES-PARAMETROS

// los constructores son funciones que se utilizan para crear objetos
// se declaran con la palabra reservada function seguido del nombre del objeto y entre parentesis los parametros que va a recibir el objeto siempre se le añade un this. a las propiedades del objeto y se utiliza un = para asignarle un valor a la propiedad en lugar de : como en el objeto literal y se termia con un ; en lugar de una coma
function perro(){
    // se declaran las propiedades del objeto
    this.patas = 4;
    this.nombre = "Firulais";
    this.raza = "Caniche";
    this.edad = 5;
    // se declaran los metodos del objeto que son funciones que hacen algo
    this.ladrar = function(){
        console.log("Guau Guau");
    };
}
// esto es una instancia, copia de perro que ya tengo dentro de la function que declare antes y se guarda en la variable simba y por ende puedo crear infinitas instancias de perro con diferentes valores
let simba = new perro();

//!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                            //* CAMBIAR MEDIANTE PARAMETROS LOS VALORES DE LAS PROPIEDADES DEL OBJETO
function gato(raza, nombre,edad){
    this.raza = "Siames";
    this.nombre = "Garfield";
    this.edad = 3;
};
// como podemos observar en la funcion gato se declaran los parametros que va a recibir el objeto y luego se le asigna un valor a cada propiedad del objeto y de ete modo podemos crear infinitas instancias de gato con diferentes valores
let gato1 = new gato("Siames","Garfield",3);
let gato2 = new gato("Persa","Michi",2);
let gato3 = new gato("Siro","bombaiespañol",1);

//!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                            //* OBJETOS CON METODOS NEW OBJECT Y CREATE
// new object crea un objeto vacio ES UN METODO QUE VIENE POR DEFECTO EN JS Y NO HAY QUE DECLARARLO
let gatita = new Object();
// acabamos de crear un objeto vacio llamado gatita
// para añadirle propiedades al objeto gatita se utiliza la palabra reservada . y se le asigna un valor a la propiedad
gatita.raza = "Siames";
// otra forma de añadir propiedades al objeto gatita es mediante corchetes
gatita["nombre"] = "Garfield";

//le añadimos una funcionalidad mediante funciones anonimas
gatita.maullar = function(){
    console.log("Miau Miau");
};
// para acceder a las propiedades del objeto gatita se utiliza la palabra reservada . y el nombre de la propiedad
console.log(gatita.raza);

let automovil1 = new Object();

automovil1.marca="Ford";
automovil1["modelo"]="Fiesta";
automovil1.anio=2015;

//!   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                            //* METODO FOR IN PARA RECORRER OBJETOS
// for in es un metodo que permite recorrer objetos Y ES MUY SIMIALR A FOR OF QUE SE UTILIZA PARA RECORRER ARRAYS
// se declara una variable que va a ser la que recorra el objeto y se utiliza la palabra reservada "in" seguido del nombre del objeto
 
for (let propiedad in automovil1){
    console.log(propiedad + ":"+automovil1[propiedad]);

};
//esto va a imprimir
// marca:Ford
// modelo:Fiesta
// anio:2015
// propiedad es el nombre de la variable que esta dentro del objeto y cuando  e utiliza el nombre del objeto con [] se accede al valor de la propiedad


function Empleado(nombre,antiguedad,sueldo){
    this.nombre=nombre;
    this.antiguedad=antiguedad;
    this.sueldo=sueldo;
    
}

let empleado1 = new Empleado("Federico Garay", 5, 150);
 
let empleado2 = Object.create(empleado1);