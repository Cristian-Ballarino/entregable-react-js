import React, { useState } from "react";

// function useState(valorInicial) {
//   let estado = valorInicial;

//   function setEstado(valorNuevo) {
//     estado = valorNuevo;
//   }
//   return [estado, setEstado];
// }

const Contador = () => {
  //   let contador = 0;
  //   console.log(useState("algo"));

const [couter, setCounter] = useState(0);

const sumar = () => {
    setCounter(couter + 1);
};
const restar = () => {
    setCounter(couter - 1);
};
console.log(couter);


  return (
    <div>
        <button onClick={restar}>-</button>
        <h1>Contador</h1>
        <button onClick={sumar}>+</button>
        
    </div>
  );
};

export default Contador;