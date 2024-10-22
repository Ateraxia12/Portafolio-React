import React from 'react'
import '../Button/Button.css';


export const Button = ({ texto, onClick }) => {
  return (
    <div>
        
        <button className='button1' onClick={onClick}>
            {texto='Vamos'}
        </button>
       
   

    </div>

  )
}
