import React from 'react';
import BookImage from '../../assets/cover2.jpg';

const Banner = () => {
    return (
        <div className="flex justify-between items-center w-full bg-gray-200 rounded-xl my-6 px-12 py-10 shadow-sm">
            {/* Left Side - Text */}
            <div className="w-1/2 pr-10">
                <h1
                    className="text-5xl font-bold text-gray-800  mb-6"
                    
                >
                    Books to freshen up <br /> your bookshelf
                </h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg  font-medium hover:bg-blue-500 hover:text-black transition duration-300">
                    View The List
                </button>
            </div>

            {/* Right Side - Image */}
            <div className="w-1/2 flex justify-end">
                <img
                    src={BookImage}
                    alt="Books"
                    className="w-7/12 max-w-md h-auto rounded-xl object-cover shadow-md"
                    style={{
                        animation: 'fadeZoomIn 1.2s ease-out forwards',
                        opacity: 0
                    }}
                />
            </div>
        </div>
    );
};

export default Banner;
