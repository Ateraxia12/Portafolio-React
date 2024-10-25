import React from 'react'
 import yotas from '../../../assets/images/yotas.jpg'
 import '../Section/Section.css'
 import { Button } from '../../Ui/Button/Button'

export default function Section() {
  return (
    <>
  <div className="containerSection">
      <div className='Divtext'>
      <p className='TextSection'> Creatividad que habla por sí misma </p>
      
      <p>Explora un espacio donde la creatividad y la innovación se encuentran. Cada proyecto refleja una pasión por contar historias únicas y generar experiencias memorables. Aquí, las ideas toman forma y se transforman en soluciones visuales que inspiran y conectan. Te invito a descubrir un viaje lleno de imaginación y talento, donde cada detalle cuenta</p>

    <Button/>
    
      </div>
      <div>
      <img className='imgUser' src={yotas} alt="yotas" />
      </div>

      
    </div>

    
    </>
    

  )
}
