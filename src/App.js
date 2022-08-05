import React from 'react'
import './index.css'
import './app.css'
import Cartao from './components/modelo/Cartao'
import Comparametro from './components/Comparametro'
import Fragmento from './components/Fragmento'
import Primeiro from './components/Primeiro'
import Numeros from './components/Numeros'

export default function App() {
  return (
    <div className="App">
      <h1> Fundamentos React </h1>
      <div className="Cards">
        <Cartao titulo="Primeiro componente React">
          <Primeiro />
        </Cartao>

        <Cartao titulo="Números aleatórios" color="#4050ef">
          <Numeros min={0} max={100} />
        </Cartao>

        <Cartao titulo="Primeiro componente com props" color="green">
          <Comparametro titulo="Hoje é quarta-feira" subtitulo="03/08/2022" />
        </Cartao>

        <Cartao titulo="Primeiro componente com props">
          <Comparametro titulo="Aula de React" subtitulo="Parametros" />
        </Cartao>

        <Cartao titulo="Primeiro componente com props">
          <Comparametro titulo="Titulo teste" />
        </Cartao>

        <Cartao titulo="Primeiro componente com props">
          <Fragmento />
        </Cartao>
      </div>
    </div>
  )
}
