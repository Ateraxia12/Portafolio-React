import React from 'react'
import '../UlNavHeader/UlNavHeader.css'


export const UlNavHeader = (enlace , texto) => {
  
  return (
    <div>
      <ul className='flex gap-8'>
        <li className='list-none'><a href={enlace=''}> {texto='Inicio'}</a></li> 
        <li><a className='no-underline text-white text-[25px] hover:border-b-2 hover:border-[#00A97F]' href={enlace='../../Pages/QuienSoy/QuienSoy'}> {texto='Quien soy?'}</a></li> 
        <li><a className='no-underline text-white text-[25px] hover:border-b-2 hover:border-[#00A97F]' href={enlace=''}> {texto='Trabajos hechos'}</a></li> 
        <li><a className='no-underline text-white text-[25px] hover:border-b-2 hover:border-[#00A97F]' href={enlace=''}> {texto='Conocimientos'}</a></li> 
      </ul>
    </div>
  )
}

