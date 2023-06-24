let todosLosEmpleados = [];

function Empleados(legajo, nombre, apellido, nacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;  
}



let agregarEmpleados1= document.getElementById("agregarEmpleados");
agregarEmpleados1.addEventListener("click", agregarEmpleados);

let mostrarEmpleados= document.getElementById("mostrarEmpleados");
mostrarEmpleados.addEventListener("click", function(){
    let mensaje = '';
    for (let empleado of todosLosEmpleados) {
        // creamos un for in para recorrer los atributos de cada empleado que estan dentro del array todosLosEmpleados que sabemos que son objeto por eo usamos este metodo
        for (let atributo in empleado) {
            // llamamos a la variable mensaje que creamso fuera del for para que se vaya concatenando cada atributo de cada empleado por eso el += y el \n es para que se vaya a la siguiente linea
            mensaje += `${atributo}: ${empleado[atributo]}\n`;
        }
        // aca le decimos que cuando termine de recorrer los atributos de un empleado que se vaya a la siguiente linea
        mensaje += '\n';
    }
    // aca le decimos que nos muestre el mensaje que creamos con todos los atributos de todos los empleados en un alert
    alert(mensaje);
});

// creamos la funcion que agrega empleados a nuestro array

function agregarEmpleados(){
// creamos las variables que van a tomar los valores de los inputs
let legajo1 = document.getElementById("legajo").value;
let nombre1 = document.getElementById("nombre").value;
let apellido1 = document.getElementById("apellido").value;
let nacimiento1 = document.getElementById("nacimiento").value;
let cargo1 = document.getElementById("cargo").value;
// creamos una nueva instancia de tipo empleado a partir del constructor que creamos arriba añadiendole como parametro las variables que creamos arriba que estan relacionadas a los imputs
let empleado1 = new Empleados(legajo1, nombre1, apellido1, nacimiento1, cargo1);
// aca le decimos que guarde al nuevo empleado dentro del array todosLosEmpleados
todosLosEmpleados.push(empleado1);

// aca le decimos que limpie todos los campos del imput para que el usuario pueda seguir agregando empleados
document.getElementById("legajo").value = '';
document.getElementById("nombre").value = '';
document.getElementById("apellido").value = '';
document.getElementById("nacimiento").value = '';
document.getElementById("cargo").value = '';
alert("Empleado agregado con exito");
}