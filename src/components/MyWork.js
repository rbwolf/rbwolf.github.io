import React from 'react'
import Title from './Title'
import { ReactComponent as Code } from '../svg/code.svg'
import TimelineEntry from './TimelineEntry'
import './MyWork.css'

const MyWork = () => {

  const entries = [
    { title: 'Armoire', duration: 'June 2020 - Present'},
    { title: 'Egencia', duration: 'Jan. 2018 - June 2020'},
    { title: 'Hutch Research', duration: 'Sep. 2015 - Dec. 2017'},
  ]

  return (
    <div className={'row my-work'}>

      <div className={'col col-12'}>
        <Title icon={<Code/>} text={'My Work'}/>
      </div>

      <div className={'pl-4 pl-md-5'}>
        <div className={'col col-12 timeline'}>
          {entries.map((entry, index) => (
            <TimelineEntry {...entry} index={index}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default MyWork