import React from "react";
import { useState } from "react";

export default function Formulario(){

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState(0)

  const[user, setUser] = useState('')

  function registrar(e){
    alert("it's working")
    e.preventDefault()
    
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
 
console.log(user)

  }
    
  return(
    <div>
      <form onSubmit={registrar}>

        <h1>Cadastrando usuário</h1>
        <label>Nome: </label>
        <input type="text" placeholder="Digite seu nome" 
        value={nome} onChange={(e) => setNome(e.target.value) } /> <br/>

        <label>Email: </label>
        <input type="email" placeholder="Digite seu email" 
        value={email} onChange={(e) => setEmail(e.target.value) }/> <br/>

        <label>Idade: </label>
        <input type="number" placeholder="Digite sua idade" 
        value={idade} onChange={(e) => setIdade(e.target.value) }/> <br/>

        <button type="submit"> Registrar</button>
      </form>

      <br/>

      <div>
        <span>Bem vindo(a): {user.nome}</span><br/>
        <span>Email: {user.email}</span><br/>
        <span>Idade: {user.idade}</span><br/>
      </div>

    </div>
  )

}