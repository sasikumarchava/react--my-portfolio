import React from 'react';
import back1 from '../assets/portfolio/back1.jpeg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div name="home" className='h-screen w-full px-60 bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-10 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-3xl sm:text-5xl font-bold text-white'>
                I'm a Frontend <span className='text-slate-400 hover:text-sky-400'>Web</span> Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                I Love to work on web application using
                technologies like React, Tailwind, HTML, CSS.
            </p>
            <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
            <div>
            <img src={back1} alt="my pic" className='rounded-2xl mx-auto w-4/6 md:w-30 h-auto'/>
            </div>
        
        </div>
        
    </div>
  );
};

export default Home;