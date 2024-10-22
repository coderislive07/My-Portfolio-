import React, { useState } from 'react'
import cn from '../assets/cn.png'
import dts from '../assets/dtc.png'
import iste from '../assets/iste.jpeg'
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const experiences = [
  {
    name: 'Coding Ninjas CUIET',
    role: 'Technical Executive',
    logo: cn
  },
  {
    name: 'Design Thinking Society',
    role: 'Frontend Head',
    logo: dts
  },
  {
    name: 'ISTE',
    role: 'Promotion Team Member',
    logo: iste
  }
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div className="text-white py-8  sm:py-12 md:py-16 px-2 sm:px-4">
      <div className="max-w-6xl mb-[10vh] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-purple-500">Experience</h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 text-gray-300">
          Volunteering and leadership roles in various clubs and organizations.
        </p>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-all duration-300 hover:bg-purple-800 hover:bg-opacity-40 hover:border-purple-500 border border-transparent"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <img
                  src={exp.logo}
                  alt={`${exp.name} logo`}
                  className={`w-full h-full object-contain transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{exp.name}</h3>
                <p className="text-lg text-gray-300">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-purple-500">Mridul</h2>
            <p className="text-sm text-gray-300">Mern Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <image src={github} alt="GitHub" width={24} height={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <image src={linkedin} alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Mridul. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
    
  )
}