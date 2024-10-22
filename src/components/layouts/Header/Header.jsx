import React from 'react'
import {NavHeader} from '../NavHeader/NavHeader'
import '../Header/Header.css'

export const Header = () => {
  return (
    <header className='DivHeader'>
        <div>
            <h1 className='h1Header'>Stiven Parra</h1>
        </div>
      <nav>
        
        <NavHeader/>
      </nav>

      
    </header>

   
  )
}
