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
        <div className="text-white py-8 sm:py-12 md:py-16 px-2 sm:px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-purple-500">Skills</h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 text-gray-300">
                    Demonstrating proficiency in modern frameworks for developing scalable and efficient web applications.
                </p>
                <div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10"
                    onMouseEnter={() => setMakeScale(true)}
                    onMouseLeave={() => setMakeScale(false)}
                >
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-700 hover:border-purple-800 hover:bg-purple-800 hover:bg-opacity-[0.4] border"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 ${makeScale ? 'hover:scale-110' : ''}`}
                            />
                            <span className="text-sm sm:text-base md:text-lg font-medium text-center">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    )
}