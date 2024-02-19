import React from 'react'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Magical from './components/Magical'
import Venues from './components/Venues'
import Carousel from './Carousel'
const App = () => {
  return (
    <>
    <NavBar/> 
    <Welcome/>
    <Magical/>
    <Venues/>
    <Carousel/>
    </>
  )
}

export default App