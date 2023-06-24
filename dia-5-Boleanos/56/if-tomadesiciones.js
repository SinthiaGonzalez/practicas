//if (condicion){ declaracion;}else{}
function evaluarcompra(){
let precio= document.getElementById("textoprecio").value;
let desicion= document.getElementById("Decicion");
if (precio<5){
    desicion.textContent="Comprar 1 cajas de leche";
}else{
    desicion.textContent="Comprar 2 caja de leche";
}
    
}
