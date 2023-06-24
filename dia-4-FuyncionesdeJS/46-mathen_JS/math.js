//metos de Math
//Math.abs(x) Devuelve el valor absoluto de x es decir un numero positivo
//Math.pow(x,y) Devuelve la potencia de x elevado a y es decir x^y potencia
//Math.sqrt(x) Devuelve la raiz cuadrada de x
//Math.round(x) Devuelve el valor de x redondeado al entero mas cercano
//Math.ceil(x) redondea hacia arriba
//Math.floor(x) redondea hacia abajo
//Math.random() Devuelve un numero aleatorio entre 0 y 1
//Math.min(x,y,z) Devuelve el numero mas pequeño de los numeros x,y,z
//Math.max(x,y,z) Devuelve el numero mas grande de los numeros x,y,z
//Math.PI Devuelve el valor de PI

function potenciar(x,y){
    return Math.pow(x,y);
}
function calcularCircunferencia(diametro){
    return Math.PI * diametro;
}
// potenciar con declaaracion de varaibles
let potencia= Math.pow(2,4);
// raiz cuadrada con declaracion de variables
let raiz= Math.sqrt(64);
let floor= Math.floor(5.9);
let ceil= Math.ceil(5.1);
let round= Math.round(5.5);
// devuelve un numero aleatorio entre 0 y 1
let random= Math.random();