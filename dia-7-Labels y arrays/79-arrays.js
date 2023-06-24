// *arrays se delcaran con corcehtes
let array = [6, 8, 4, 9, 1];

// array.length devuelve la cantidad de elementos que tiene el array
//*array.push(5); // agrega un elemento al final del array
//array.pop(); // elimina el ultimo elemento del array
//*array.shift(); // elimina el primer elemento del array
//array.unshift(5); // agrega un elemento al principio del array
//*array.splice(2, 1); // elimina  elementos del array dede la posicion que indicamos primero y desde esa posision cuantos seran eliminados
// array.includes(4); // devuelve true si el elemento que colocamos edentro del parentesis existe en el array en este caso existe el 4
//* array.every((elemento) => elemento > 5); // devuelve true si todos los elementos del array cumplen la condicion que le pasamos en la funcion
// array.some((elemento) => elemento > 5); // devuelve true si alguno de los elementos del array cumplen la condicion que le pasamos en la funcion
// *array.find((elemento) => elemento > 5); // devuelve el primer elemento que cumpla la condicion que le pasamos en la funcion
// array.findIndex((elemento) => elemento > 5); // devuelve el indice del primer elemento que cumpla la condicion que le pasamos en la funcion
// *array.map((elemento) => elemento * 2); // devuelve un nuevo array con los elementos modificados segun la funcion que le pasamos
// array.filter((elemento) => elemento > 5); // devuelve un nuevo array con los elementos que cumplan la condicion que le pasamos en la funcion
//* array.reduce((acumulador, elemento) => acumulador + elemento); // devuelve un nuevo array con los elementos que cumplan la condicion que le pasamos en la funcion
// array.sort((a, b) => a - b); // ordena los elementos del array de menor a mayor y tambien con el mismo metodo puedes ordenar de mayor a menor solo cambias el a - b por b - a
//*array.reverse(); // invierte el orden de los elementos del array
// array.join(" "); // convierte el array en un string y le podemos pasar como parametro el separador que queremos que tenga el string
// *array.slice(2, 4); // devuelve un nuevo array con los elementos que esten entre las posiciones que le pasamos como parametro
// array.concat([5, 6, 7]); // concatena el array que le pasamos como parametro al array original
// array.split(" "); // convierte un string en un array y le podemos pasar como parametro el separador que queremos que tenga el string


function obtenerUltimoNumero() {
    return array[4];
}
console.log(obtenerUltimoNumero());
