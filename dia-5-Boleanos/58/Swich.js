// swich permite que podamos elegir entre varias opciones es decir una lista de opciones
// swich (fruta){ case "manzana": let precio=2.51; break; y asi susecivamente con cada caso
function consultarPrecio(){
let cantFrutas=document.getElementById("CantidaddeFrutas").value;
let textoenh3=document.getElementById("textoPrecio");

switch (cantFrutas)
{
case "1":
    textoenh3.textContent="El precio es de $8.51";
    break;

    case "2":
    textoenh3.textContent="El precio es de $3.51";
    break;

    case "3":
    textoenh3.textContent="El precio es de $9.51";
    break;

    case "4":
    textoenh3.textContent="El precio es de $2.51";
    break;

    case "5":
    textoenh3.textContent="El precio es de $7.51";
    break;

}}