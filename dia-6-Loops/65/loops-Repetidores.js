// los loops son estructuras de control que nos permiten repetir un bloque de código
// mientras se cumpla una condición
// for, while, do while, for in, for of estos son los loops que existen en javascript
// for (inicialización; condición; incremento) { código a repetir }
// for (let i = 0; i < 10; i++) { console.log(i) }
// do while (condición) { código a repetir } while (condición) sirve para ejecutar un código al menos una vez
// while (condición) { código a repetir } sirve para ejecutar un código mientras se cumpla una condición
// for in (objeto) { código a repetir } sirve para recorrer objetos
// for of (iterable) { código a repetir } este sirve para recorrer arrays

for (x=0; x<5; x=x+1) {
    document.write("<p>Vuelta" + x + "</p>");
    //abrimos un parrafo y escribimos el texto Vuelta cerramos las comillas y concatenamos la variable x
    // y  luego concatenamos el cierre del parrafo de este modo  en el html se verá <p>Vuelta0</p> 
    // y asi sucesivamente hasta llegar a 5
}