function verTabla(){
    let inputNumero= document.getElementById("textoNumero").value;
    let mostrarenparrafo= document.getElementById("muestraTablaenelHTM");
    let numero = parseInt(inputNumero);
// limpiar el contenido del ul antes de mostrar la nueva tabla
mostrarenparrafo.innerHTML = "";

    for (i=0; i<=10; i++){
        let multiplicador= numero * i;
        let textoResultado= numero + " x " + i +" = "+ multiplicador;
//creamos el li para la ult
        let li= document.createElement("li");
        li.innerText= textoResultado;
        mostrarenparrafo.appendChild(li);
 
        

    }
    

}