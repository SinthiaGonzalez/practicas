// importamos a react para utilizar sus hooks
import React from 'react';


// esto es una function que devuelve componbentes html y es una sintaxis jsx
function App(props) {
  // esto es un hook de react usesState nos permite darle efectos a nuestros componentes y sirve para darle valor a una variable y una forma de modificar ese valor, usesState devueleve un array con dos valores el primero es el valor de la variable y el segundo es una funcion que nos permite modificar ese valor
  let [contador,setearConteo] = React.useState(0);
// creamos la function que declaramos en el array
function aumentarConteo(){
setearConteo(contador+1);

};
 // las variable se añaden con llaves{}
  return (
      <div style={{backgroundColor:props.colorFondo}}>
      
        <h1 style={{color:props.colorTexto}}>Contador: {contador}</h1>
        <button onClick={aumentarConteo}>Incrementar</button>
      </div>
    );
}

export default App;
