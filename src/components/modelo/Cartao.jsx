import React from "react";
import './modelo.css'

//anonymous function
export default props => {
  return(
    <div className="card">
      <div className="title">{props.titulo}</div>
      <div className="conteudo">{props.children}</div>
    </div>

  )
}