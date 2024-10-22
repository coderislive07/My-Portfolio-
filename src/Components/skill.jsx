import React, { useState } from 'react'
import mongodb from '../assets/mongo.svg'
import express from '../assets/express.png'
import react from '../assets/react.svg'
import node from '../assets/Node.webp'
import c from '../assets/c++.webp'
import git from '../assets/git.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'

export default function Skill() {
    const [makeScale, setMakeScale] = useState(false)
    const skills = [
        { name: 'MongoDB', icon: mongodb },
        { name: 'Express', icon: express },
        { name: 'React', icon: react },
        { name: 'Node.js', icon: node },
        { name: 'C++', icon: c },
        { name: 'Git', icon: git },
        { name: 'JavaScript', icon: javascript },
        { name: 'Python', icon: python },
    ]

    return (
        <div className="text-white py-6   sm:py-8 md:py-12  sm:px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-purple-500">Skills</h2>
                <p className="text-sm  sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-gray-300">
                    Demonstrating proficiency in modern frameworks for developing scalable and efficient web applications.
                </p>
                <div 
                    className="grid w-[60vw] sm:w-full grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8"
                    onMouseEnter={() => setMakeScale(true)}
                    onMouseLeave={() => setMakeScale(false)}
                >
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center transition-all duration-500 hover:border-purple-800 hover:bg-purple-800 hover:bg-opacity-[0.4] border"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-1 xs:mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 ${makeScale ? 'hover:scale-110' : ''}`}
                            />
                            <span className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-center">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    )
}