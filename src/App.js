import 'bootstrap-css-only'
import React from 'react'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import MyWork from './components/MyWork'
import TechStack from './components/TechStack'
import MyEducation from './components/MyEducation'
import LetsChat from './components/LetsChat'

const App = () => {
  return (
    <div className={'container pb-5'}>
      <Header/>
      <Hero/>
      <MyWork/>
      <TechStack/>
      <MyEducation/>
      <LetsChat/>
    </div>
  )
}

export default App;
