import React from 'react'
import Title from './Title'
import { ReactComponent as Cpu } from '../svg/cpu.svg'

const TechStack = () => {

  const data = [
    { title: 'Languages', entries: ['Python', 'Java', 'NodeJS'] },
    { title: 'Frontend', entries: ['React + Redux', 'Vue + Vuex', 'React Native'] },
    { title: 'Backend', entries: ['Django', 'Spring Boot', 'Express'] },
    { title: 'Data', entries: ['Pandas', 'Postgres', 'MongoDB'] },
  ]

  return (
    <div>
      <Title icon={<Cpu/>} text={'Tech Stack'}/>
      <div className={'row'}>
        {data.map(category => (
          <div className={'col col-6 col-md-3 mb-4 mb-md-0'}>
            <h4 className={'mb-3'}>
              {category.title}
            </h4>
            {category.entries.map(entry => <p>{entry}</p>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack