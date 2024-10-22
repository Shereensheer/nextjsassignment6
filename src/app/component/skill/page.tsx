import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
function Skill() {
  return (
    <div className='bg-black'>
        <div className="text-white body-font">
        <h1 className='text-center text-4xl'>My Skills</h1>
  <div className="container px-5 py-24 mx-auto">
 
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-white sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-rose-100 text-orange-500 flex-shrink-0">
      <FaHtml5  className='text-8xl' />
      </div>
   
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-rose-500 text-3xl title-font font-medium mb-2">
          HTML
        </h2>
   
        <div className='relative h-1 w-full bg-white rounded-xl'>
                <div className='absolute bg-rose-500 h-1 rounded-xl w-[100%]'></div>
            </div>
            <p className='font-bold text-rose-500 text-right'>100%</p>
    
       
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-white sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-rose-500 text-3xl  font-medium mb-2">
          CSS
        </h2>
        
        <div className='relative h-1 w-full bg-white rounded-xl'>
                <div className='absolute bg-rose-500 h-1 rounded-xl w-[95%]'></div>
            </div>
            <p className='font-bold text-rose-500 text-left'>95%</p>
        
        
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-rose-100 text-blue-500 flex-shrink-0">
      <FaCss3Alt className='text-8xl'/>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white text-blue-500 flex-shrink-0">
      <SiTypescript  className='text-7xl'/>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-rose-500 text-3xl title-font font-medium mb-2">
        TYPESCRIPT
        </h2>
        <div className='relative h-1 w-full bg-white rounded-xl'>
                <div className='absolute bg-rose-500 h-1 rounded-xl w-[90%]'></div>
            </div>
            <p className='font-bold text-rose-500 text-right'>90%</p>
          
       
      </div>

















      
    </div>
   

   













   
  </div>
</div>
</div>
 
  )
}

export default Skill