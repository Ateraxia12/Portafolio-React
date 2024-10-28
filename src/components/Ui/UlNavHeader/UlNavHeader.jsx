import React from 'react'
import '../UlNavHeader/UlNavHeader.css'


export const UlNavHeader = (enlace , texto) => {
  
  return (
    <div>
      <ul>
        <li><a href={enlace=''}> {texto='Inicio'}</a></li> 
        <li><a href={enlace='../../Pages/QuienSoy/QuienSoy'}> {texto='Quien soy?'}</a></li> 
        <li><a href={enlace=''}> {texto='Trabajos hechos'}</a></li> 
        <li><a href={enlace=''}> {texto='Conocimientos'}</a></li> 
      </ul>
    </div>
  )
}

