import 'bootstrap-css-only'
import React from 'react'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className={'container'}>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App;
