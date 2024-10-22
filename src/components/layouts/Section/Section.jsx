import React from 'react'
 import logo from '../../../assets/images/user-icon-profile-icon.jpg'
 import '../Section/Section.css'

export default function Section() {
  return (
    <>
  <div className="containerSection">
      <div className='Divtext'>
      <p className='TextSection'> Creatividad que habla por sí misma </p>
      
      <p>Explora un espacio donde la creatividad y la innovación se encuentran. Cada proyecto refleja una pasión por contar historias únicas y generar experiencias memorables. Aquí, las ideas toman forma y se transforman en soluciones visuales que inspiran y conectan. Te invito a descubrir un viaje lleno de imaginación y talento, donde cada detalle cuenta</p>

      </div>
      <div>
      <img className='imgUser' src={logo} alt="Logo" />
      </div>

      
    </div>

    
    </>
    

  )
}
