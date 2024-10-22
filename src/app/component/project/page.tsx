import React from 'react'
import Image from 'next/image'

function Project() {
  return (
    <div>
        <section className="text-black bg-black body-font">
        <h1 className='font-bold text-4xl text-center'>My Projects</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
   
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <Image
          alt="gallery"
          className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
          src="/ID.png"
          height={200}
          width={200}
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl  font-medium title-font mb-2">
            ID CARD PROJECT
          </h2>
          <p className="leading-relaxed">
          A Student ID Card Built with Next.js and Tailwind Css.
          </p>
          <a href='https://github.com/Shereensheer/Next.js01assignment4.git' className="mt-3 text-rose-500 inline-flex items-center">
            view project
          
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
          <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src={"/RES.png"}
              height={200}
              width={400}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl  font-medium title-font mb-2">
                 STATIC RESUME PROJECT
              </h2>
              <p className="leading-relaxed">
                .A dynamic Resume built with HTML CSS and typescript.
                </p>
              <a href='https://github.com/Shereensheer/milestone1-2.git' className="mt-3 text-rose-500 inline-flex items-center">
                View Project
                
              </a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src={"/prt.png"}
              height={300}
              width={200}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl  font-medium title-font mb-2">
                Porfolio Project
              </h2>
              <p className="leading-relaxed">
                .A  Portfolio website built with Next.js and Tailwind.
               
              </p>
              <a href='' className="mt-3 text-rose-500 inline-flex items-center">
                View Project
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project