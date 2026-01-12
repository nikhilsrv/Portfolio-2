// "use client"

// import React, { useState, useEffect } from 'react';

// export default function Cursor() {

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//       setIsVisible(true);
//     };

//     const handleMouseLeave = () => {
//       setIsVisible(false);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
//           isVisible ? 'opacity-100' : 'opacity-0'
//         }`}
//         style={{
//           left: mousePosition.x,
//           top: mousePosition.y,
//           transform: 'translate(-50%, -50%)',
//         }}
//       >
//         {/* Outer ring */}
//         <div className="relative">
//           <div 
//             className="w-12 h-12 border border-white/30 rounded-full "
//             style={{
//               animation: '2s ease-in-out infinite',
//             }}
//           />
          
//           {/* Inner circle (smaller filled circle) */}
//           <div 
//             className="absolute top-1/2 left-1/2 w-3 h-3 bg-white/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"
//           />
          
//           {/* Center dot */}
//           <div 
//             className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
//           />
          
//           {/* Secondary outer ring with delay */}
//           <div 
//             className="absolute top-0 left-0 w-12 h-12 border border-white/10 rounded-full"
//             style={{
//               animation: 'pulse 2s ease-in-out infinite 0.5s',
//             }}
//           />
//         </div>
//       </div>

//       {/* Custom CSS for smooth following animation */}
//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 0.3;
//           }
//           50% {
//             transform: scale(1.2);
//             opacity: 0.1;
//           }
//         }
        
//         .cursor-follower {
//           transition: all 0.1s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }

"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bigCirclePosition, setBigCirclePosition] = useState({ x: 0, y: 0 });
  const [smallCirclePosition, setSmallCirclePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  
  const animationRef = useRef();
  const moveTimeoutRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Set timeout to detect when mouse stops
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsMoving(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (isMoving) {
        // When moving: small circle follows cursor quickly, big circle follows slowly
        setSmallCirclePosition(prev => ({
          x: prev.x + (mousePosition.x - prev.x) * 0.3,
          y: prev.y + (mousePosition.y - prev.y) * 0.3
        }));
        
        setBigCirclePosition(prev => ({
          x: prev.x + (mousePosition.x - prev.x) * 0.1,
          y: prev.y + (mousePosition.y - prev.y) * 0.1
        }));
      } else {
        // When stopped: big circle catches up to small circle
        setBigCirclePosition(prev => ({
          x: prev.x + (smallCirclePosition.x - prev.x) * 0.15,
          y: prev.y + (smallCirclePosition.y - prev.y) * 0.15
        }));
        
        // Small circle also moves toward mouse position when stopped
        setSmallCirclePosition(prev => ({
          x: prev.x + (mousePosition.x - prev.x) * 0.2,
          y: prev.y + (mousePosition.y - prev.y) * 0.2
        }));
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isVisible, isMoving, smallCirclePosition]);

  return (
    <>
      {/* Big Circle */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: bigCirclePosition.x,
          top: bigCirclePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          <div 
            className="w-12 h-12 border border-white/30 rounded-full"
          />
          
        </div>
      </div>

      {/* Small Circle */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: smallCirclePosition.x,
          top: smallCirclePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Inner circle (smaller filled circle) */}
        
        
        {/* Center dot */}
        <div 
          className="absolute top-1/2 left-1/2 w-[5px] h-[5px] bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </>
  );
}