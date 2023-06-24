// creamos un array con las calificaciones
let calificaciones = [10, 9, 3, 8, 7];

// creamos una función que nos muestre las notas con for of
function MostrarNotas() {
    // creamos una variable que nos guarde el elemento ul
    let UL = document.getElementById("ListaNotas");
    // creamos un bucle for of que nos recorra el array calificaciones con i
    for(i of calificaciones){
        // creamos un elemento li que sera el que se añada al ul
        let LI = document.createElement("li");
        // añadimos el valor de i al li
        LI.innerHTML = i;
        // añadimos el li al ul
        UL.appendChild(LI);
    }   
}

function Promedio(){
// creamos una variable que nos guarde el elemento p
let suma = 0;
    for(i=0; i<5; i++){
       
        suma+=calificaciones[i];
    }
    let promedio = suma/5;
    document.getElementById("TextoPromedio").textContent="El promedio es: "+ promedio;
    }
function NotasmasAltas(){
    let notaAlta=0;
    let i=0;
    while(i<5){
        if(calificaciones[i]>notaAlta){
            notaAlta=calificaciones[i];
        }
        i++;
    }
    document.getElementById("TextoNotaAlta").textContent="La nota mas alta es: "+ notaAlta;
}

function NotasmasBaja(){
    let apalazo="No";
let i=0;
do{
if(calificaciones[i]<4){
    apalazo="Si";
    break;
}
i++;

}while(i<5);
document.getElementById("TextoNotaBaja").textContent="¿Hay apalazos? "+ apalazo;
}
  





