import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Carouselcomponent = () => {
    const images = [
        {
            original: 'images/sale1.jpg',
            thumbnail: 'images/sale1.jpg',
        },
        {
            original: 'images/sale2.avif',
            thumbnail: 'thumbnail2.jpg',
        },
        {
            original: 'images/sale1.jpg',
            thumbnail: 'thumbnail3.jpg',
        },
    ];

    return (
        <div>
            <div className='w-[100%]'>
            <ImageGallery items={images} />
            </div>
        </div>
    )
};




export default Carouselcomponent
