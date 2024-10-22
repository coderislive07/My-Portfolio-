import React from 'react'
import p1 from '../assets/My Projects/1.png'
import p2 from '../assets/My Projects/2.png'
import p3 from '../assets/My Projects/3.png'
import p4 from '../assets/My Projects/4.png'
import p5 from '../assets/My Projects/5.png'
import p6 from '../assets/My Projects/6.png'
import p7 from '../assets/My Projects/7.png'
import p8 from '../assets/My Projects/8.png'
import p9 from '../assets/My Projects/9.png'
import p10 from '../assets/My Projects/10.png'
import p11 from '../assets/My Projects/11.png'
import p12 from '../assets/My Projects/12.png'
import p13 from '../assets/My Projects/13.png'
import p14 from '../assets/My Projects/14.png'
import p15 from '../assets/My Projects/15.png'
import p16 from '../assets/My Projects/16.png'

const projects = [
  {
    title: "Diamonds Direct",
    description: "An e-commerce website of diamonds built on MERN stack with add to cart authentication functionalities and Razor Pay API integration.",
    images: [p1, p2, p3, p4]
  },
  {
    title: "ChatVerse",
    description: "A chat application where users can chat with their loved ones. It contains OTP verification using Twilio and also Socket.io for real-time chats. Built on MERN stack.",
    images: [p5, p6, p7, p8]
  },
  {
    title: "CN Sprint Manager",
    description: "Built on MERN stack, this sprint manager app like Jira contains authentication using Firebase.",
    images: [p9, p10, p11, p12]
  },
  {
    title: "BotGuru",
    description: "A chatbot using MERN stack and Cohere API, with authentication and other features.",
    images: [p13, p14, p15, p16]
  }
]

export default function Projects() {
  return (
    <div className="bg-gray-900 ml-[-10vw] sm:ml-[0]  w-[80vw]  px-[-40vw] sm:w-full text-white min-h-screen p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-purple-500 mb-2 sm:mb-4">Portfolio</h1>
      <p className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 md:mb-8">Explore a curated selection of projects that highlight creativity, innovation, and technical excellence.</p>
      
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-3 xs:p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{project.title}</h2>
            <p className="text-xs xs:text-sm sm:text-base mb-3 xs:mb-4 sm:mb-6">{project.description}</p>
            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
              {project.images.map((img, imgIndex) => (
                <div key={imgIndex} className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
                  <img 
                    src={img} 
                    alt={`${project.title} screenshot ${imgIndex + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}