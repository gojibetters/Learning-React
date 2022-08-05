import React from "react";
import App from "../App";

export default (props) => {

  const min = props.min
  const max = props.max
  const random = parseInt(Math.random() * (max-min)) + min

  return(
    <div>
      <h2>Valor aleatório</h2>
      <p><strong>Valor mínimo:</strong>{min}</p>
      <p><strong>Valor máximo:</strong>{max}</p>
      <p><strong>Valor sorteado:</strong>{random}</p>
    </div>

  )


}