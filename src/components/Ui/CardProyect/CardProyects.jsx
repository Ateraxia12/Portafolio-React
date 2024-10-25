import React from 'react'
import { Button } from '../Button/Button'
import iconGithub from '../../../assets/images/github_icons.png'
import '../CardProyect/CardProyects.css'

export const CardProyect = () => {
  return (
    <>
        <div className='CardProyect'>
        <div className='containerSection2'>
          <div className='container1Section2'>
            <h1 className='h1ContainerSection2'> Proyecto 1</h1>
            <p className='pContainarSection2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. molestiae .</p>
            <div className='divButton'>

            <img className='imgIconGitHub' src={iconGithub} alt="iconGithub" />
              <Button />
            </div>
          </div>

        </div>
        </div>
    </>
  )
}
