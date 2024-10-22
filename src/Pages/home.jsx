import React from 'react'
import Hero from '../Components/hero'
import Skill from '../Components/skill'
import Projects from '../Components/projects'
import Experience from '../Components/experience'


export default function Home() {
  return (
    <div className='pl-36 pr-36'>
    
    <Hero/>
    <Skill/>
    <Projects/>
    <Experience/>
  
      
    </div>
  )
}
