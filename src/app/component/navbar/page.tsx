import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='bg-black'>
        <div className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <Image
        className="object-cover object-center rounded-full"
        alt="hero"
        src="/pic.png"
        height={70}
        width={50}
      />
    
      <span className="ml-3 text-2xl text-rose-500 font-bold">SHEREEN AHMED</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/component/hero'} className="mr-5 hover:text-rose-500  text-2xl">Home</Link>
      <Link href={'/component/about'} className="mr-5 hover:text-rose-500 text-2xl">About</Link>
      <Link href={'/component/skill'} className="mr-5 hover:text-rose-500  text-2xl">Skill</Link>
      <Link href={'/component/project'} className="mr-5 hover:text-rose-500 text-2xl">Projects</Link>
      <Link href={'/component/contact'} className="mr-5 hover:text-rose-500  text-2xl">Contact</Link>
    </nav>
   
  </div>
</div>


    </div>
  )
}

export default Navbar