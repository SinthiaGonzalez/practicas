class animal {
    constructor(nombre,peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    // creamos un metodo dentro de la clase pero fuera del constructor
    informacion = () => {
        return `Nombre: ${this.nombre} Peso: ${this.peso} Edad: ${this.edad}`;
    };
}

// creamos la clase perro que extiende de animal y hereda sus propiedades

class perro extends animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }
   // modificamos el metodo informacion para que muestre la raza
    informacion = () => {
        return `Nombre: ${this.nombre} Peso: ${this.peso} Edad: ${this.edad} Raza: ${this.raza}`;
    };
}
class gato extends animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
   // modificamos el metodo informacion para que muestre el sexo
    informacion = () => {
        return `Nombre: ${this.nombre} Peso: ${this.peso} Edad: ${this.edad}  Sexo: ${this.sexo}`;
    };
}

class conejo extends animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }
   // modificamos el metodo informacion para que muestre el color
    informacion = () => {
        return `Nombre: ${this.nombre} Peso: ${this.peso} Edad: ${this.edad} Color: ${this.color}`;
    };
}

// creamos un objeto perro a partir de las clases es decir lo instanciamos 
const perro1 = new perro("Toby", 10, 5, "Pastor Aleman");
const gato1 = new gato("Mishu", 5, 3, "Macho");
const conejo1 = new conejo(" Sr.Bigotes", 2, 1, "Negro");
// guardamos los animales dentro de un array
let animales =[perro1,gato1,conejo1];

// llamamos del html o doom al boton y le asignamos la function  y el evento clik
let boton = document.getElementById("mostraranimales");
boton.addEventListener("click", btnMostraranimales);

// ahora procedemos a crear una function que interactua con el boton del html y que haga una lista con la informacion de los animales que tenemos. 


function btnMostraranimales(){
    let listaAnimals= document.getElementById("ulLista");
    
    for(let animal  of animales){
        // creamos una lista por cada animal 
        let li = document.createElement("li");
        li.innerText = animal.informacion();
        listaAnimals.appendChild(li);
    }

}

