import React from 'react'
import home from '../assets/Home.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import myself from '../assets/Myself.png'
import bar from '../assets/bar.png'

export default function Hero() {
  return (
    <div className="bg-black min-h-screen text-white">
      <nav className="flex flex-col sm:flex-row justify-between items-center p-4">
        <h1 className="text-xl font-bold mb-4 sm:mb-0">Mridul Dhamija</h1>
        <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-8">
          <a href="#" className="flex items-center mb-2 sm:mb-0">
            <img src={home} alt="Home" className="w-5 h-5 mr-1 invert" />
            Home
          </a>
          <a href="#" className="flex items-center mb-2 sm:mb-0">
            <img src={github} alt="GitHub" className="w-5 h-5 mr-1 invert" />
            GitHub
          </a>
          <a href="#" className="flex items-center mb-2 sm:mb-0">
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5 mr-1 invert" />
            LinkedIn
          </a>
          <button className="bg-transparent text-purple-700 border text-sm sm:text-lg border-purple-700 px-4 py-2 rounded-full hover:text-white hover:bg-purple-700 transition-colors duration-300">
            Contact
          </button>
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 md:py-24">
        <div className="max-w-lg mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Mern Stack Developer
          </h2>
          <p className="text-base sm:text-lg mb-6">
            I'm Mridul, a Mern Stack Developer with a focus on developing efficient and scalable web applications, blending technical expertise with real-world experience.
          </p>
          <button className="bg-transparent text-purple-700 border text-sm sm:text-lg border-purple-700 px-4 py-2 rounded-full hover:text-white hover:bg-purple-700 transition-colors duration-300">
            Download CV
          </button>
        </div>
        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[400px] wobble-container">
          <div className="wobble-border"></div>
          <img 
            src={myself} 
            alt="Mridul Dhamija" 
            className="absolute inset-0 w-full h-full object-cover rounded-full md:h-[70vh] md:mt-[-20vh] z-10"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes wobble {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 40% 60% 70% 30% / 30% 60% 40% 70%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          75% { border-radius: 40% 30% 50% 60% / 60% 70% 50% 40%; }
        }

        .wobble-container {
          position: relative;
          overflow: visible;
        }

        .wobble-border {
          position: absolute;
          top: -2%;
          left: -2%;
          right: -2%;
          bottom: -2%;
          border: 4px solid #8B5CF6;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: wobble 5s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .wobble-border {
            top: -4%;
            left: -4%;
            right: -4%;
            bottom: -4%;
          }
        }
      `}</style>
    </div>
  )
}