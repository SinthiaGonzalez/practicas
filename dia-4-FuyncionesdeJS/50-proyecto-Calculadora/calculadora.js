function input1(){
    let textonumero1=document.getElementById("numero1").value;
return +textonumero1;
}
function input2(){
    let textonumero2=document.getElementById("numero2").value;
return +textonumero2;}

function sumar(){
   let suma=input1()+input2();
 let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=suma;
}
function restar(){
    let resta=input1()-input2();
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=resta;
}
function multiplicar(){
    let multiplicacion=input1()*input2();
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=multiplicacion;
}
function dividir(){
    let division=input1()/input2();
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=division;
}
function potencia(){
    //colocamos en el input1 la base y en el input2 la potencia
    let potencia=Math.pow(input1(),input2());
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=potencia;
}
function raiz(){
    let raiz=Math.sqrt(input1());
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=raiz;
}
function absoluto(){
    let absoluto=Math.abs(input1());
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=absoluto;
}
function random(){
    //para que incluya el valor del minimo y el maximo en la aleatoriedad
    //usamos el random()*(maximo-minimo+1)+minimo, esta es la formula.
    let random=Math.random()*(input1()-input2()+1)+input2();
    let mostrarResultado=document.getElementById("resultado");
    mostrarResultado.textContent=random;
}
function redondear(){
    //creamos una variable para guardar lo introducido en nuestro p(id="resuktado")

    let mostrarResultado=document.getElementById("resultado");
    //creamos otra variable para redondear el numero que estaba en el p, y lo convertimos en un numero decimal
    //para ello usamos parseFloat ya que era un texto y no podiamos operar con el.
    // y usamos el .textContent con mostrar resultado para utilzar el valor del p, es decir el texto
    let redondear1=Math.round(parseFloat(mostrarResultado.textContent));
   mostrarResultado.textContent=redondear1;

}
function redondearAbajo(){
    let mostrarResultado=document.getElementById("resultado");
    let redondear1=Math.floor(parseFloat(mostrarResultado.textContent));
   mostrarResultado.textContent=redondear1;
}
function redondearArriba(){
    let mostrarResultado=document.getElementById("resultado");
    let redondear1=Math.ceil(parseFloat(mostrarResultado.textContent));
   mostrarResultado.textContent=redondear1;
}

//para hacer que el valor de un campo de texto sea u  numero, debemos
//colocar antes del .document.getElementById("numero1").value; el signo +, para que lo convierta en numero