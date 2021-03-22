import 'bootstrap-css-only'
import React from 'react'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import MyWork from './components/MyWork'

const App = () => {
  return (
    <div className={'container'}>
      <Header/>
      <Hero/>
      <MyWork/>
    </div>
  )
}

export default App;
