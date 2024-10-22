import React from 'react'
import Hero from '../Components/hero'
import Skill from '../Components/skill'
import Projects from '../Components/projects'
import Experience from '../Components/experience'


export default function Home() {
  return (
    <div className='pl-20 w-full  sm:pl-36 pr-36 sm:w-full'>
    
    <Hero/>
    <Skill/>
    <Projects/>
    <Experience/>
  
      
    </div>
  )
}
