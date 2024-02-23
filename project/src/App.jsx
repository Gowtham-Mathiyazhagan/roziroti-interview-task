import React from 'react'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Magical from './components/Magical'
import Venues from './components/Venues'
import Carousel from './components/Carousel'
import Business from './components/Business'
import GreetFood from './components/GreetFood'
import Services from './components/Services'
import HappyClients from './components/HappyClients'
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
    <Services/>
    <HappyClients/>
    </>
  )
}

export default App