import React, { useState, useEffect } from 'react'
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
    const lockedIndices = new Set()
    for (let i = 0; i < scrambleIterations; i++) {
      setTimeout(() => {
        setTitle(i === scrambleIterations - 1 ? finalTitle : scramble(finalTitle, lockedIndices))
        if (i % lockFrequency === 0) {
          lockedIndices.add(Math.round(Math.random() * finalTitle.length))
        }
      }, scrambleTimeout(i))
    }
  }, [])


  return (
    <div className={'row hero-wrapper'}>
      <div className={'col col-12 col-md-4 order-md-2 d-flex justify-content-center'}>
        <img src={'/profile_pic.png'} alt={'A handsome head-shot of yours truly!'}/>
      </div>
      <div className={'col col-12 col-md-8 order-md-1'}>
        <h1 className={'py-2'}>
          {title}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget sodales diam. Morbi sit amet
          sagittis lacus, et elementum nunc. Aenean venenatis cursus ante, egestas bibendum mauris gravida id.
        </p>
      </div>
    </div>
  )
}

export default Hero
