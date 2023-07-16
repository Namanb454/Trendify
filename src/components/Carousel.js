import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carouselcomponent = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
        >
            <div>
                <img className='h- w-[20%]' src="https://thehouseofrare.com/cdn/shop/files/0M1A4092_900x.jpg?v=1688989010" alt="Image 1" />
                <p className="legend">Image 1</p>
            </div>
        </Carousel>
    );
};


export default Carouselcomponent
