import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Carouselcomponent from './Carousel'

function Main() {
  return (
    <div>
      <div className="container mx-auto">
        <Carouselcomponent />
        {/* Rest of your application */}
      </div>
    </div>
  )
}

export default Main
