import React from 'react'
import Hero from './component/hero/page'
import About from './component/about/page'
import Contact from './component/contact/page'
import Skill from './component/skill/page'
import Project from './component/project/page'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
     <Contact />
    </div>
  )
}

export default Home