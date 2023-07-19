import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full  bg-gradient-to-b from-gray-800 to-black text-white'>
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>


            <p className='text-xl mt-20'>
            As a 4th-year MTech Software Engineering student at VIT Vellore, I am deeply passionate about frontend web development and AWS cloud services. I possess a strong skill set in HTML, CSS, JavaScript, and React, which allows me to create engaging and user-friendly web applications. I am eager to explore innovative ways to integrate my frontend expertise with AWS cloud solutions to build scalable and efficient web applications. 
            </p>
            <br/>
            <p className='text-lg pb-20'>
            My journey as a web developer started with a spark of curiosity and an insatiable thirst for knowledge in the realm of coding. Through dedicated learning and hands-on experience, I have honed my skills in HTML, CSS, JavaScript, and other essential web technologies.



During my web development journey, I've successfully completed several mini-projects that showcase my abilities and commitment to excellence. Some notable projects include building a feature-rich calculator that handles complex calculations effortlessly. Additionally, I've crafted a stunning Netflix landing page that emulates the platform's immersive interface, complete with enticing previews and user interactions. Moreover, I designed a dynamic to-do list application, streamlining task management and productivity.
            </p>
         </div>

    </div>
  )
}

export default About;