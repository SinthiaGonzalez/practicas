//* CLASESS Y HERENCIAS
// las clases son funciones que se declaran en lugar de let,var,const se hace con la palabra reservada class dent5ro de las llaves  se declara una function constructora como haciamso para declarar los objetos ,este tiene parametros, luego abrimos llaves del constructor y le añadimos los metdos o propiedades que queramos que tenga el objeto de tipo clase que se va a crear
// se delcran de la siguiente manera ej:
//* DECALRACION DE UNA CLASE
class papel {
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    };
}
//* DECLARACION DE CLASE ANONIMA
// como podemos observar la class no tiene unnombre por lo que toma de nombre a la variable que lo contiene, por eso es una class anonima
let papel1 = class {
    constructor (alto,ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}


//* DECLARACION DE CLASE Y NOMBRADA
// como podemos observar ene ste caso tenemso una variable papel2 que guarda a la clase mipapel que si tiene nombre por ende esto es una declaracion de class de tipo nombrada 
let papel2 = class mipapel {
    constructor (alto,ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
};

//* instancias de clasess
// las clases se instancian para acceder a sus propiedades ya que las clases son una forma de envolver a los objetos y cuando instaciamso estamso creando un objeto y las clases deben ser declaradas antes de ser instanciadas de lo contrario dara undifine o error


//* SUBCLASES
// las subclases son clases que heran metodos y propiedades de otra clase y para ello se usa la palabra reservada extends depsues  de definirlas para decir que esta heredando de otra clase vamos ver el ejmplo de una clase normal y una que hereda:
class Deportista{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    };
};

class Futbolista extends Deportista{
    //se delcara los parametros que tendremos en la clase que hereda
    constructor(nombre, apellido, goles){
        // luego se usa la palabra reservada SUPER para llamar a las propieades de clase que heredaremos y entre parentesis las propiedades que queremso traer de ella
        super(nombre, apellido);
        // luego declaramos las propiedades propias de la clase que estamos construyendo
        this.goles = goles;
    };
};

// ahora vamos a instanciar la claseque hereda para ver sus funcionalidades en consola:
let deportista1 = new Deportista("Lionel", "Messi");
console.log(deportista1);
let futbolista1 = new Futbolista("Cristiano", "Ronaldo", 100);
console.log(futbolista1);
// como pudimos observar en la consola imprime un objeto con las propiedades que rellenamso por parametros y aunque futbolista 1 no tiene como propiedad declara nombre y apellido aun asi nos da el nombre y el apellido y esto se debe a que lo ha heredado de Deportista y esto es lo que hace la herencia de clases.

//*GETTERS Y SETTERS
// los getters sirven para obtener el valor actual de una propiedad
// los setters sirven para establecer un nuevo valor de una propiedad
// los get y set se utilizan dentro de una clase pero fuera del constructor es como una fucntion que tiene un return 
// ejemplo de como seria una estrcutura class utilizando getter y setters.

// primero declaramos una clase fruta general
class frutas{
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    };
}
// segundo declaramos una clase manzana que hereda de frutas

class manzana extends frutas{
    constructor(nombre, color, sabor){
        super(nombre, color);
        this.sabor = sabor;
    };
// luego declaramos los getters y setters fuera del constructor primero get
get sabor(){
    return this._sabor;
};
// luego set
set sabor(nuevoSabor){
    this._sabor = nuevoSabor;
}; 
}
// ahora vamos a instanciar la clase manzana y vamos a ver como funciona el getter y el setter
let manzana1 = new manzana("manzana", "rojo", "dulce");
// asi se llama al getter y nos da el valor de la propiedad sabor
console.log(manzana1._sabor);
// asi se llama al setter y le damos un nuevo valor a la propiedad sabor
manzana1._sabor = "acido";
// asi se llama al getter y nos da el nuevo valor de la propiedad sabor
console.log(manzana1._sabor);


class Colegio {
    constructor(nombre, direccion, cantAlumnos) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._cantAlumnos = cantAlumnos;
    }
    get nombre(){
        return this._nombre;
    }
    get direccion (){
        return this._direccion;
    }
    get cantAlumnos(){
        return this._cantAlumnos;
    }
    
    set nombre(nuevoNombre){
        this._nombre= nuevoNombre;
        
    }
    set direccion(newdirection){
        this._direccion= newdirection;
    }
    set cantAlumnos(alumnos){
        this.cantAlumnos= alumnos;
    }
}