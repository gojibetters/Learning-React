import React from "react";
import './modelo.css'

//anonymous function
export default props => {

  const estilo = {
    backgroundColor: props.color || '#f00',
    borderColor: props.color || '#f00'
  }



  return(
    <div className="card" style={estilo}>
      <div className="title">{props.titulo}</div>
      <div className="conteudo">{props.children}</div>
    </div>

  )
}