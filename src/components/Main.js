import React from 'react'
import Gallery from './Gallery';
import { Carousel } from 'react-responsive-carousel'
// import Carouselcomponent from './Carousel'

function Main() {
  const images = [
    { src: 'images/qualityassured/img1.webp', alt: 'Product Image 1' },
    { src: 'images/qualityassured/img2.webp', alt: 'Product Image 2' },
    { src: 'images/qualityassured/img3.webp', alt: 'Product Image 3' },
    { src: 'images/qualityassured/img4.webp', alt: 'Product Image 4' },
    { src: 'images/qualityassured/img5.webp', alt: 'Product Image 5' },
    { src: 'images/qualityassured/img6.webp', alt: 'Product Image 6' },
    { src: 'images/qualityassured/img7.webp', alt: 'Product Image 7' },
    { src: 'images/qualityassured/img8.webp', alt: 'Product Image 8' },
    // Add more images as needed
  ];
  return (
    <div>

      <div className="container mx-auto">
        <div className='mx-10 my-5'>
          <h2 className='text-xl font-semibold '>Sale is Live</h2>
        </div>
        <img className='' src='images/sale2.avif' alt='sale1' />
      </div>

      <div className="container mx-auto my-10">

        <div className='mx-10 my-5'>
          <h2 className='text-xl font-semibold '>Quality Assured Picks</h2>
        </div>
        <div className='mx-10'>
          <Gallery images={images} />
        </div>
      </div>

    </div>
  )
}

export default Main
