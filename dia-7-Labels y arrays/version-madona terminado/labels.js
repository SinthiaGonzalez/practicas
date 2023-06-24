function extraerNumerodesdeElemeto(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
    //creamos una funcion que extrae el numero de un elemento y lo devuelve como numero
}




function Calcular(){
//declaramos un variable tipo array que guarde los valores de las ventas de cada tienda

    let ventas= [];
    // le decimos mediante corchete la posicion de cada una de ellas
    ventas[0] = extraerNumerodesdeElemeto("VentasTienda1");
    ventas[1] = extraerNumerodesdeElemeto("VentasTienda2");
    ventas[2] = extraerNumerodesdeElemeto("VentasTienda3");
    ventas[3]= extraerNumerodesdeElemeto("VentasTienda4");
    ventas[4]= extraerNumerodesdeElemeto("VentasTienda5");
    ventas[5] = extraerNumerodesdeElemeto("VentasTienda6");

    // ahora creamos una variable total donde llamaremos a la funcion con el loop que recorr el array que creamos y nos devuelve la suma de todas las ventas
    
    let totalVentas = sumarTotal(ventas);

    // creamos una variable que guarde el valor de la mayor venta y para ello crearemos otra funciont que nos devuelva el valor de la mayor venta y lo mismo con el de menor venta
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);
    
    if(ventas.includes(ventaMayor)){
        let posicion = ventas.indexOf(ventaMayor); 
        let elemento = document.getElementById(`VentasTienda${posicion + 1}`);
        elemento.classList.add("mayor");
    }
     if(ventas.includes(ventaMenor)){
        let posicion = ventas.indexOf(ventaMenor); 
        let elemento = document.getElementById(`VentasTienda${posicion + 1}`);
        elemento.classList.add("menor");
    }
    
   

    //creamos una variable que guarde el mensaje que queremos que aparezca en el html
    let mensajeDelTexto= "El total de ventas es: " + totalVentas + "/ La mayor venta es: " + ventaMayor + "/ La menor venta es: " + ventaMenor;

    //creamos una variable que guarde el elemento html donde queremos que aparezca el mensaje
    let textosalida= document.getElementById("textoTotal");

    textosalida.textContent = mensajeDelTexto;
}
// creamos la funcion loop que no recorre el array y nos devuelve la suma del total de ventas dentro del array, le damos como parametro un array para poder invocarla en cualquier array que queramos
function sumarTotal(array){
    // declaramos una variable para guardar el total de ventas
    let total = 0;

    // creamos un loop que recorra el array y vaya sumando cada uno de los elementos
    for (let venta of array) {
        total= total + venta;
        
    }
    return total;

}

function calcularMayor(array){
    let maximo = array[0];
    for (let venta of array) {
        if (venta > maximo) {
            maximo = venta;           
        }     
    }
    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];
    for (let venta of array) {
        if (venta < minimo) {
            minimo = venta;           
        }     
    }
    return minimo;
}