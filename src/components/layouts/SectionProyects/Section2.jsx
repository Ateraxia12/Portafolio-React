import React from 'react'
import './Section2.css'
import { Button } from '../../Ui/Button/Button'
import { CardProyect } from '../../Ui/CardProyect/CardProyects'
import imgProyec2 from '../../../assets/images/proyect-calculadora.png'
export const Section2 = () => {
  return (
    <>
     
    
      <div className='ConteinerPrincipal'>

          
        <CardProyect />

        <div className='CardProyect'>
          <div className='containerSection2'>
            
            <div className='container1Section2'>
              <div className='DivimgProyec2'>
                
              <img className='imgProyec2' src={imgProyec2} alt="imgProyec2" />
              </div>
              {/* <h1 className='h1ContainerSection2'> Proyecto 2</h1> */}
              
              <p className='pContainarSection2'>
              Una calculadora básica es una aplicación que permite realizar operaciones aritméticas simples.</p>
              <div className='divButton'>
                <Button />
              </div>
            </div>

          </div>
        </div>
    {/* -------------------- */}
    <div className='CardProyect'>
          <div className='containerSection2'>
            <div className='container1Section2'>
              <h1 className='h1ContainerSection2'> Proyecto 3</h1>
              <p className='pContainarSection2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. molestiae .</p>
              <div className='divButton'>
                <Button />
              </div>
            </div>

          </div>
        </div>
         {/* -------------------- */}
    <div className='CardProyect'>
          <div className='containerSection2'>
            <div className='container1Section2'>
              <h1 className='h1ContainerSection2'> Proyecto 4</h1>
              <p className='pContainarSection2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. molestiae .</p>
              <div className='divButton'>
                <Button />
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
