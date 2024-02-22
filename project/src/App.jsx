import React from 'react'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Magical from './components/Magical'
import Venues from './components/Venues'
import Carousel from './components/Carousel'
import Business from './components/Business'
const App = () => {
  return (
    <>
    <NavBar/> 
    <Welcome/>
    <Magical/>
    <Venues/>
    <Carousel/>
    <Business/>
    </>
  )
}

export default App