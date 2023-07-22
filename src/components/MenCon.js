import React from 'react'
import Gallery from './Gallery';

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { shirt } from '../content/Men';
import { jeans } from '../content/Men';
// import { Carousel } from 'react-responsive-carousel';
// import Carouselcomponent from './Carousel'

function Main() {
  const scrollLeft1 = () => {
    document.getElementById("content").scrollLeft -= 400;
  }
  const scrollRight1 = () => {
    document.getElementById("content", "content1").scrollLeft += 400;
  }
  const scrollLeft2 = () => {
    document.getElementById("content1").scrollLeft -= 400;
  }
  const scrollRight2 = () => {
    document.getElementById("content1").scrollLeft += 400;
  }

  return (
    <div className='pb-5'>
      <div className="relative">
        {/* <div className="text-center py-4 text-white text-xl font-bold">Exercises</div> */}
        <div className="container mx-auto">
          <div className='mx-10 my-5'>
            <h2 className='text-xl font-semibold '>Sale is Live</h2>
          </div>
          <img className='' src='images/sale2.avif' alt='sale1' />
        </div>

        {/* SHIRT */}
        <div className='mx-10 my-5'>
          <h2 className='text-xl font-semibold '>Quality Assured Picks</h2>
        </div>

        <div className='flex text-xl'>
          <div className='m-auto'>
            <button onClick={scrollLeft1} className="p-2 m-2 right-0 h-9 rounded-full bg-white">
              <FiChevronLeft />
            </button>
          </div>

          <div id="content" className="carousel flex items-center justify-start overflow-x-auto scroll-smooth">
            {shirt.map(data => {
              return (
                <div>
                  <Gallery data={data} />
                </div>
              )
            })}
          </div>
          <div className='m-auto'>
            <button onClick={scrollRight1} className="p-2 m-2 h-9 rounded-full bg-white">
              <FiChevronRight />
            </button>
          </div>
        </div>


        {/* JEANS  */}
        <div className='mx-10 my-5'>
          <h2 className='text-xl font-semibold '>Best Selling Styles For Travel</h2>
        </div>

        <div className='flex text-xl'>
          <div className='m-auto'>
            <button onClick={scrollLeft2} className="p-2 m-2 right-0 h-9 rounded-full bg-white">
              <FiChevronLeft />
            </button>
          </div>

          <div id="content1" className="carousel flex items-center justify-start overflow-x-auto scroll-smooth">
            {jeans.map(data => {
              return (
                <div>
                  <Gallery data={data} />
                </div>
              )
            })}
          </div>
          <div className='m-auto'>
            <button onClick={scrollRight2} className="p-2 m-2 h-9 rounded-full bg-white">
              <FiChevronRight />
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Main
