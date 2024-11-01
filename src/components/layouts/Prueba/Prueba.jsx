import React from 'react'

import { useState } from 'react'


export const Prueba = () => {

    const [count, setCount]= useState(99)
    const [inputName, setInputName] = useState('')

    const handleName = (event) => setInputName (event.target.value)
    const handleShowName =() => setName(inputName)
    return (
    <>
        {/* <h2 className='m-2 text-white text-6xl flex justify-center'>{count}</h2>
    
    <div className='flex justify-center items-center gap-5 bg-orange-400'>
        <button onClick={()=> setCount(count+1)} className='bg-lime-500 p-4 font-normal rounded-2xl'> Sumar</button>
        <button onClick={()=> setCount(count-1)} className='bg-lime-500 p-4 font-normal rounded-2xl'> restar</button>
        <button onClick={()=> setCount(count*1)} className='bg-lime-500 p-4 font-normal rounded-2xl'> Multiplicar</button>
    </div> */}
    <h2 className='m-2 text-white text-6xl flex justify-center'> Bienvenido{inputName}</h2>
    <input onChange={handleName} className='rounden-x1 m-4 pl-3 text-blue-500' placeholder='Tu nombre' type="text" />
    <button onClick={ handleShowName} className='bg-lime-500 p-4 font-normal rounded-2xl'> Saludar </button>
    

    </>
  )
}
