import React from 'react'
import { ReactComponent as Coffee } from '../svg/coffee.svg'
import Title from './Title'

const LetsChat = () => {
  return (
    <div className={'mt-5'}>
      <Title icon={<Coffee/>} text={'Let\'s Chat'}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget sodales diam. Morbi sit amet
        sagittis lacus, et elementum nunc. Aenean venenatis cursus ante, egestas bibendum mauris gravida id.
      </p>
    </div>
  )
}

export default LetsChat