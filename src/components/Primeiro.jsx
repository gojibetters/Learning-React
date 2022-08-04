import React from 'react'

export default function Primeiro(){
  const dias = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ]
  const data = new Date()
  const hoje = <h1>{dias[data.getDay()]}</h1>

  return hoje
}