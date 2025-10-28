import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import PlantPage from './pages/plants'
import SinglePlant from './pages/single-plant'
import ShoppingCart from './pages/cart'
import Checkout from './pages/checkout'

const RoutesCall = () => {
     
  return (
    <>
     
      <Routes>
        
    <Route path='/' exact element={<Home />} />
    <Route path='/plant' element={<PlantPage  />} />
    <Route path='/plant/:id' element={<SinglePlant  />} />
    <Route path='/cart' element={<ShoppingCart />}/>
    <Route path='/checkout' element={<Checkout />}/>
     <Route path="*" element={() => <h1>Page Not FOund</h1>} />
   </Routes>
    </>
  
  )
}

export default RoutesCall