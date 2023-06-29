import React from 'react';

function Saludo(props) {
  return (
    <div>
      <h1> Hola, {props.nombre}</h1>
    </div>
  );
}
export default Saludo;