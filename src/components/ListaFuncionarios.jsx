import React from "react";
import funcionario from "../data/funcionario";

export default (props) => {


  //retorna em uma lista todos os objetos
  const lista = funcionario.map((funcionario) => {
    return(
      //
      <li key={funcionario.id}>
        {funcionario.id} - {funcionario.nome}
      </li>
    )
  })

  return (
    <div>
      <ul>
        {lista}
      </ul>
    </div>
  )
}