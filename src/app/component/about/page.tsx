import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='bg-black'>
        <section className="text-black-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="profile pic"
      src="/pic.png"
      height={700}
      width={400}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
       About Me
      </h1>
      <p className="mb-8 leading-relaxed text-white font-bold">
        Hi i am Shereen Ahmed , and I am a web developer. 
        I specialize in creating responsive and interactive websites using technologies like HTML, CSS, JavaScript, and TypeScript
        . I am passionate about coding and enjoy building user-friendly web applications.
      </p>
      <div className="flex justify-center">
        <a href='/CV.pdf'>
        <button className="inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg">
          Download CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About