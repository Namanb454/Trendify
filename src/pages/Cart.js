import React from 'react'
import Navbar from '../components/Navbar'
import KidCon from '../components/KidCon'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import Main from '../components/Main'

function Kids() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Main/>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  )
}

export default Kids
