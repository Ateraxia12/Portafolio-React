import React from 'react'
import yotas from '../../../assets/images/yotas.jpg'
import '../Section/Section.css'
import { Button } from '../../Ui/Button/Button'

export default function Section() {
  return (
    <>

<div className="w-full h-[450px] flex justify-evenly items-center bg-cover bg-no-repeat bg-[url('/assets/images/img-computer.jpg')]"> 
    <div className="w-[500px] text-white mt-[50px]">
        <p className="text-[50px] mb-5 font-bold text-white border-b border-transparent text-stroke-black">
            Creatividad que habla por sí misma
        </p>
        <p>
            Explora un espacio donde la creatividad y la innovación se encuentran. Cada proyecto refleja una pasión por contar historias únicas y generar experiencias memorables. Aquí, las ideas toman forma y se transforman en soluciones visuales que inspiran y conectan. Te invito a descubrir un viaje lleno de imaginación y talento, donde cada detalle cuenta.
        </p>
        <Button />
    </div>
    <div>
        <img
            className="h-[350px] rounded-full border-2 border-[#00A97F] transition-transform duration-500 ease-in-out hover:scale-110 shadow-lg"
            src={yotas}
            alt="yotas"
        />
    </div>
</div>



    </>


  )
}
