import React from 'react';
import Saludo from './saludo';
import Mensajes from './Mensajes';
function App() {
  return (
    <div>
      <Saludo nombre="Juan" />
      <Mensajes mensaje="Bienvenido a mi aplicacion React" />
      
    </div>
  );
}
export default App;