import React from 'react'
import './index.css'
import Primeiro from './components/Primeiro'
import Comparametro from './components/Comparametro'
import Fragmento from './components/Fragmento'
import Cartao from './components/modelo/Cartao'

export default function App() {
  return (
    <div className="App">
      <div>
        <h1> Fundamentos React </h1>
        <div className="Cards">
          <Cartao titulo="Primeiro componente React">
            <Primeiro />
          </Cartao>

          <Cartao titulo="Primeiro componente com props">
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
    </div>
  )
}
