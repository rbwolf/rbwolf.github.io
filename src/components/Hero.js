import React, { useState, useEffect } from 'react'
import 'particles.js'
import './Hero.css'

const Hero = () => {

  const finalTitle = 'Hi, I\'m Ryan'
  const [title, setTitle] = useState(finalTitle)

  const scrambleIterations = 20
  const scramblePauseCoefficient = 25
  const lockFrequency = 1
  const scrambleTimeout = i => i * Math.log(i) * scramblePauseCoefficient

  const scramble = (string, lockedIndices) => {
    const chars = 'abcdefABCDEF0123456789!@#$%^&*'.split('')
    const charArray = string.split('')
    return charArray.map((char, index) => {
      if (char !== ' ' && !(lockedIndices.has(index))) {
        return chars[Math.round(Math.random() * chars.length)]
      }
      return char
    }).join('')
  }

  useEffect(() => {

    window.particlesJS.load('hero-particles', '/particles.json', () => {})

    const lockedIndices = new Set()
    for (let i = 0; i < scrambleIterations; i++) {
      setTimeout(() => {
        setTitle(i === scrambleIterations - 1 ? finalTitle : scramble(finalTitle, lockedIndices))
        if (i % lockFrequency === 0) {
          lockedIndices.add(Math.round(Math.random() * finalTitle.length))
        }
      }, scrambleTimeout(i + 1))
    }
  }, [])


  return (
    <div className={'row hero-wrapper'}>
      <div className={'col col-12 col-md-4 order-md-2 d-flex justify-content-center'}>
        <img src={'profile.jpg'}
             alt={'A handsome head-shot of yours truly!'}
             height={200}
             style={{ zIndex: 1, borderRadius: '100%' }}/>
        <div id={'hero-particles'} style={{ position: 'absolute' }}/>
      </div>
      <div className={'col col-12 col-md-8 order-md-1 mt-4 mt-md-0'}>
        <h1>
          {title}
        </h1>
        <hr style={{ backgroundColor: '#81E8FF', width: '64px', height: '3px', marginLeft: 0 }}/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget sodales diam. Morbi sit amet
          sagittis lacus, et elementum nunc. Aenean venenatis cursus ante, egestas bibendum mauris gravida id.
        </p>
      </div>
    </div>
  )
}

export default Hero
