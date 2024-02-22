import React from 'react'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Magical from './components/Magical'
import Venues from './components/Venues'
import Carousel from './components/Carousel'
import Business from './components/Business'
import GreetFood from './components/GreetFood'
const App = () => {
  return (
    <>
    <NavBar/> 
    <Welcome/>
    <Magical/>
    <Venues/>
    <Carousel/>
    <Business/>
    <GreetFood/>
    </>
  )
}

export default App