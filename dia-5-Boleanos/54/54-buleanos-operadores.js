// = asigna valor
// == compara valor
// === compara valor y tipo de dato, si es boleano so es int o string etc
// != diferente
// !== diferente valor y tipo de dato
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
// && y
// || o
// ! negacion
//tambien tenemos a los buleanos que son true o false
// utilizamos el tipo bool para comparar entre dos valores y nos devuelve un true o false
function calcular() {
    // Obtener los elementos HTML necesarios
    let respuesta1 = document.getElementById("respuesta1");
    let respuesta2 = document.getElementById("respuesta2");
    let respuesta3 = document.getElementById("respuesta3");
    let textoEdad = document.getElementById("textoedad");
  
    // Obtener la edad ingresada por el usuario
    let edad = +textoEdad.value;
  
    // Calcular si la persona puede beber alcohol (mayor o igual a 18 años)
    let puedeBeber = edad >= 18;
  
    // Asignar la respuesta a la pregunta "¿Puedo probar alcohol?"
    respuesta1.textContent = puedeBeber;
  
    // Calcular si la persona puede ingresar a la fiesta (mayor o igual a 21 años)
    let puedeIngresarFiesta = edad >= 21;
  
    // Asignar la respuesta a la pregunta "¿Puedo ingresar a la fiesta?"
    respuesta2.textContent = puedeIngresarFiesta;
  
    // Calcular si la persona tiene entrada gratis (mayor de 65 años o menor de 10 años)
    let tieneEntradaGratis = edad > 65 || edad < 10;
  
    // Asignar la respuesta a la pregunta "¿Tengo entrada gratis?"
    respuesta3.textContent = tieneEntradaGratis;
  }