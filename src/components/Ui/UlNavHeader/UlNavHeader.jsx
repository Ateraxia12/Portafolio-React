import React from 'react'
import '../UlNavHeader/UlNavHeader.css'

export default function UlNavHeader(enlace , texto) {
  return (
    <div>
      <ul>
        <li><a href={enlace=''}> {texto='Inicio'}</a></li> 
        <li><a href={enlace=''}> {texto='Quien soy?'}</a></li> 
        <li><a href={enlace=''}> {texto='Trabajos echos'}</a></li> 
        <li><a href={enlace=''}> {texto='Conocimientos'}</a></li> 
      </ul>
    </div>
  )
}

