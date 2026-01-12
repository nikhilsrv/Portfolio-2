"use client"
import { useGlobalContext } from '@/context/GlobalContext';
import React, { useEffect, useState } from 'react'

const HeroSection = () => {
   const [isVisible, setIsVisible] = useState(false);
   const {darkMode}=useGlobalContext()
    const [currentRole, setCurrentRole] = useState(0);
    
    const roles = [
      "Tech Enthusiast",
      "Ardent Learner", 
      "Product Builder",
      "Competitive Programmer"
    ];
  
    useEffect(() => {
      setIsVisible(true);
      
      const roleInterval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 3000);
  
      return () => clearInterval(roleInterval);
    }, []);
  
    return (
      <div className="min-h-screen  bg-transparent flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>
  
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
  
        <div className={`text-center z-10 px-6 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold dark:text-white text-black mb-6 tracking-tight">
            HI, I'M{' '}
            <span className="bg-gradient-to-r from-purple-500 to-purple-400 drop-shadow-md bg-clip-text text-transparent">
              NIKHIL
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-purple-400 drop-shadow-md bg-clip-text text-transparent">
              SRIVASTAVA
            </span>
          </h1>
  
          {/* Animated role text */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl md:text-2xl dark:text-gray-300 text-black font-light">
              A{' '}
              <span 
                key={currentRole}
                className="text-purple-400 font-medium animate-fade-in-up inline-block"
              >
                {roles[currentRole]}
              </span>{' '}
              who loves building products from scratch.
            </p>
          </div>
  
          {/* Subtitle */}
          <p className="text-lg md:text-xl dark:text-gray-400 text-black mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about competitive programming and creating innovative solutions 
            that make a difference.
          </p>
  
          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-purple-400 text-black font-semibold rounded-full 
                           transition-all duration-300 hover:bg-purple-300 hover:scale-105 
                           hover:shadow-lg hover:shadow-purple-400/25">
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
  
    
          
        </div>
      </div>
    );
}

export default HeroSection