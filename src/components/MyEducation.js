import React from 'react'
import { ReactComponent as Book } from '../svg/book.svg'
import Title from './Title'

const MyEducation = () => {
  return (
    <div className={'mt-4'}>
      <Title icon={<Book/>} text={'My Education'}/>
      <h4>Western Washington University</h4>
      <h6>B.S. Computer Science</h6>
      <p>Double minor in Linguistics + Spanish</p>
    </div>
  )
}

export default MyEducation
