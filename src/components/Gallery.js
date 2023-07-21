import React from 'react';

const Gallery = (props) => {
    return (
        <div className='w-full'>
            <div className="lg:w-[20vw] my-2 mx-10 rounded-lg shadow-lg">
                <div className="relative text-center" >
                    <a href='/'>
                        <img
                            className="lg:w-full lg:h-[45vh] object-cover hover p-2 "

                            src={props.data.img}
                            alt={props.data.title}
                        />
                    </a>
                    <h2 className='text-lg font-semibold'>{props.data.title}</h2>
                    <h2 className='text-base text-green-600'>{props.data.subtitle}</h2>

                </div>

            </div>
        </div>
    );
};
export default Gallery