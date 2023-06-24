// loop Do while: ejecuta el codigo al menos una vez aunque la condicion no se cumpla, pero seguira
// ejecutandose mientras la condicion se cumpla
// prompt: nos permite ingresar datos por teclado
// while: mientras la condicion se cumpla se ejecutara el codigo, muy parecido al for
// la diferencia es que el for determina cuantas veces se inicializara la operacion
// mientras que el while no.
// Ejemplo 1
let vidas=5;
do{
    console.log("Te quedan "+vidas+" vidas");
    // vidas=vidas-1; eso decimos en el siguiente codigo, restamos en cada vuelta el valor de vidas
    vidas--;
    //while = mientras vidas sea mayor que 0 se ejecutara el codigo
} while(vidas>0);

//Ejemplo 2
let nombre;
do{
    nombre=prompt("Dime mi nombre");
    
} while(nombre!="Fede");

document.write("<h1> Ese es mi nombre!</h1>");

// ejemplo 3
// este es un ejemplo de while, en este caso estamos diciendole al loop while que mientras el nombre
// no sea igual a Fede, nos va a pedir que lo ingresemos por teclado, es decir aparecera el pompt, de lo contrarios
// nos va a mostrar el mensaje de que ese es mi nombre en el html, es decir va a saltarse el while ()
let nombre1;
while(nombre1!="Fede"){
    nombre1=prompt("Dime mi nombre");
    
}
document.write("<h1>Hola" + nombre1 + "</h1>" );

let x = Math.random();