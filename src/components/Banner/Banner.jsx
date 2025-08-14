import React from "react";
import { MdArrowOutward } from "react-icons/md";
import {
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import HeadphoneImg from "../../assets/cover.jpg";
import EarbudImg from "../../assets/books.jpg";
import VrImg from "../../assets/cover2.jpg";
import CubeImg from "../../assets/coverBook.jpg";

const Banner = () => {
    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-300 rounded-[2rem] p-8 shadow-lg">
            {/* MAIN GRID */}
            <div className="grid grid-cols-3 gap-6">

                {/* LEFT SIDE (2 columns) */}
                <div className="col-span-2 flex flex-col gap-6">

                    {/*  Image + text + icons */}
                    <div className="bg-white rounded-2xl p-6 flex items-center gap-8 shadow-sm">
                        <div className="flex flex-col justify-between">
                            <div>
                                <span className="text-xs bg-white-100 backdrop-blur rounded-full px-3 py-1 inline-block mb-4 border">
                                    🎵 Music is Classic
                                </span>
                                <h1 className="text-4xl font-extrabold leading-tight text-gray-800">
                                    Sequoia Inspiring Musico.
                                </h1>
                                <p className="mt-4 text-gray-500 text-base max-w-sm">
                                    Clear Sounds — Making your dream music come true, stay with Sequoia Sounds!
                                </p>
                                <button className="relative mt-6 bg-sky-600 text-white flex items-center gap-2 px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition">
                                    View All Products
                                    <MdArrowOutward
                                        className="bg-white text-sky-600 w-[30px] h-[30px] p-1 rounded-full"
                                    />
                                </button>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <FaTwitter className="text-gray-400 hover:text-blue-500 text-xl cursor-pointer" />
                                <FaYoutube className="text-gray-400 hover:text-red-500 text-xl cursor-pointer" />
                                <FaInstagram className="text-gray-400 hover:text-pink-500 text-xl cursor-pointer" />
                                <FaLinkedin className="text-gray-400 hover:text-blue-700 text-xl cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img
                                src={HeadphoneImg}
                                alt="Headphones"
                                className="w-[18rem] drop-shadow-xl relative z-10"
                            />
                            <span className="absolute top-8 left-8 w-4 h-4 bg-gray-300 rounded-full"></span>
                            <span className="absolute top-1/2 -translate-y-1/2 right-12 w-4 h-4 bg-blue-400 rounded-full"></span>
                        </div>
                    </div>

                    {/* BOTTOM: 3 equal-width cards */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                            <img
                                src={CubeImg}
                                alt="More Products"
                                className="w-12 h-12 mb-3 object-contain"
                            />
                            <p className="text-sm font-semibold">More Products</p>
                            <span className="text-xs text-gray-500">460 plus items.</span>
                        </div>

                        <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition">
                            <p className="text-sm font-semibold">5m+ Downloads</p>
                            <p className="text-xs text-gray-500">⭐ 4.6 reviews</p>
                        </div>

                        <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                            <span className="text-xs text-orange-500 font-medium">Popular</span>
                            <p className="text-sm font-semibold mt-1">
                                Listening Has Been Released
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col h-full">
                    <div className="flex flex-col gap-4 h-full">
                        <div className="bg-white rounded-2xl p-5 shadow-sm flex-shrink-0" style={{ flex: 1 }}>
                            <h3 className="text-sm font-medium text-gray-700 mb-4">Popular Colors</h3>
                            <div className="flex gap-3">
                                <span className="w-6 h-6 bg-orange-400 rounded-full cursor-pointer"></span>
                                <span className="w-6 h-6 bg-blue-400 rounded-full cursor-pointer"></span>
                                <span className="w-6 h-6 bg-green-400 rounded-full cursor-pointer"></span>
                                <span className="w-6 h-6 bg-red-400 rounded-full cursor-pointer"></span>
                                <span className="w-6 h-6 bg-cyan-300 rounded-full cursor-pointer"></span>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition" style={{ flex: 2 }}>
                            <img src={EarbudImg} alt="X-Bud" className="w-16 h-16 object-contain" />
                            <div>
                                <p className="text-xs font-medium text-gray-500">New Gen</p>
                                <h4 className="text-sm font-semibold">X-Bud</h4>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition" style={{ flex: 3 }}>
                            <img src={VrImg} alt="VR" className="w-16 h-16 object-contain" />
                            <div>
                                <h4 className="text-sm font-semibold">Light Grey Surface Headphone</h4>
                                <p className="text-xs text-gray-500">Boosted with bass</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
