import React from 'react'
import './Section2.css'
import { Button } from '../../Ui/Button/Button'
import { CardProyect } from '../../Ui/CardProyect/CardProyects'
export const Section2 = () => {
  return (
    <>
      <div className='ConteinerPrincipal'>


        <CardProyect />

        <div className='CardProyect'>
          <div className='containerSection2'>
            <div className='container1Section2'>
              <h1 className='h1ContainerSection2'> Proyecto 2</h1>
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
              <h1 className='h1ContainerSection2'> Proyecto 3</h1>
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
