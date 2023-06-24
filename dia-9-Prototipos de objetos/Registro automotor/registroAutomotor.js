// creamso el constructor automovil
function Automovil(marca,modelo,color,anio,titular){
    //creamos las propiedad del constructor
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
};
// creamos los prototypes del constructor que por buenas practicas se hace fuera de la misma
Automovil.prototype.VenderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
};
Automovil.prototype.verAuto= function(){
    return `Marca: ${this.marca}\nModelo: ${this.modelo}\nColor: ${this.color}\nAño: ${this.anio}\nTitular: ${this.titular}`;
};
Automovil.prototype.encender= function(){
    alert("El automovil esta en marcha");
};

// ahora creamos 3 instancias de tipo automovil
let auto1 = new Automovil("Ford","Fiesta","Rojo",2015,"Juan");
let auto2 = new Automovil("Chevrolet","Corsa","Azul",2010,"Pedro");
let auto3 = new Automovil("Fiat","Uno","Blanco",2018,"Maria");
// creamos un array para guardar los autos
let todosLosAutos = [auto1,auto2,auto3];

// creamos las variables que van a tomar los valores del boton y la ul
let mostrarAutos= document.getElementById("mostrar");
let listadeCoches= document.getElementById("listaDecoches");
mostrarAutos.addEventListener("click", mostrarAutos1);
// creamos la funcion con el evento onclik que va a mostrar los autos que estan en lalista del array utilizando el metodo for of y luego un for in para recorrer los atributos de cada auto
function mostrarAutos1(){
    let autos = '';
    for (let auto of todosLosAutos) {
        autos += auto.verAuto() + '\n';
        let li = document.createElement("li");
        li.innerHTML = auto.verAuto();
        listadeCoches.appendChild(li);
    }
};
