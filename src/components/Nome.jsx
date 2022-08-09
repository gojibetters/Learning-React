import React from "react";
import { useState } from "react";

export default function Nome() {

const [nome,setNome] = useState('')

function trocarNome(){
  setNome('Rodolfo')
}

return (

  <>
  <h2>Olá: {nome}</h2> <br/><br/>
  <button onClick={trocarNome}>Trocar Nome</button>
  </>
)

}