import React from 'react';
import work1 from '../assets/portfolio/work1.jpg';
import work2 from '../assets/portfolio/work2.jpg';
import work3 from '../assets/portfolio/work3.jpg';
import work4 from '../assets/portfolio/work4.jpg';

const Portfolio = () => {

    const portfolios = [

       {
          id:1,
          src:work1
       },
       {
        id:2,
        src:work2
     },
     {
        id:3,
        src:work3
     },
     {
        id:4,
        src:work4
     },


    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-50'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className=' py-10'>Check out some of my work right here</p>
        </div>


        <div
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20'>

       {
          portfolios.map(({id,src}) =>(

            
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
            
            <div className='flex items-center justify-center '>
                <button className='w-1/2 px-4 py-1 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-4 py-1 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
            </div>
        


          ))
       }
       </div>






        
      </div>

    </div>
  )
}

export default Portfolio;