import React, { useRef } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const Gallery = ({ images }) => {
    const galleryRef = useRef(null);

    const scrollLeft = () => {
        galleryRef.current.scrollBy({
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        galleryRef.current.scrollBy({
            left: 200,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative overflow-hidden">
            <div className="flex items-center">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 focus:outline-none"
                >
                    <AiOutlineLeft className="h-5 w-5 text-gray-600" />
                </button>
                <div
                    ref={galleryRef}
                    className="overflow-x-scroll whitespace-nowrap flex space-x-4 pb-2"
                >
                    {images.map((image, index) => (
                        <div key={index} className="inline-block">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-64 h-64 object-cover"
                            />
                            {image.title}
                        </div>
                    ))}
                </div>
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 focus:outline-none"
                >
                    <AiOutlineRight className="h-5 w-5 text-gray-600" />
                </button>
            </div>
        </div>
    );
};
export default Gallery