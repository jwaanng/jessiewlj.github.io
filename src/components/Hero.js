import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
        <div className='hero-container'>
        <img src="cloudl.png" className='clouds cloud-left'/>
            <div className='jessie-cont'>
                <h3 className='hi'>
                    hi, i'm
                </h3>
                <h1 className='jessie'>
                    JESSIE WANG
                </h1>
            </div>
            <img src="cloudr.png" className='clouds cloud-right'/> 
        </div>
    </>
  )
}

export default Hero