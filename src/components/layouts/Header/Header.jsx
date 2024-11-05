import React from 'react'
import {NavHeader} from '../NavHeader/NavHeader'
import '../Header/Header.css'

export const Header = () => {
  return (
    <header className='flex justify-evenly items-center border-b-2 border-[#00A97F]'>
        <div className="flex h-24 justify-around items-center rounded-2xl mt-0">
    <h1 className="text-[50px] text-white">Stiven Parra</h1>
    <div className="marquee inline-block overflow-hidden whitespace-nowrap box-border text-4xl">
       <h2 className='text-white '> Bienvenidos </h2> 
    </div>
</div>      <nav>
        
        <NavHeader/>
      </nav>

      
    </header>

   
  )
}
