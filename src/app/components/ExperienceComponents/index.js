"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { digirocket } from "@/assets";

const Experience = () => {
  const expref = useRef();
  const handleMouseMove = (event) => {
    const rect = expref.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Convert to percentage
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const degreeX = (Math.abs(xPercent - 50) / 50) * 20;
    const degreeY = (Math.abs(yPercent - 50) / 50) * 20;
    expref.current.style.transform = `${
      xPercent <= 50 ? `rotateY(${degreeX}deg)` : `rotateY(${-degreeX}deg)`
    } ${
      yPercent <= 50 ? `rotateX(${-degreeY}deg)` : `rotateX(${degreeY}deg)`
    } `;
  };
  const handleMouseOut = () => {
    expref.current.style.transform = `rotateX(${0}deg)`;
    expref.current.style.transform = `rotateY(${0}deg)`;
  };
  return (
    <div name="experience" className="w-full relative z-0 py-5 ">
      <div className="w-[40%] mx-auto">
        <div className="text-center text-[25px] sm:text-[35px] font-bold dark:text-white text-black">
          EXPERIENCE
        </div>
        <div className="h-[2px] mt-1 w-[30px] mx-auto border-[2px] space-x-4 border-[#846ADD] bg-[#846ADD] rounded-sm"></div>
      </div>
      <div
        className="w-[90%] lg:w-[70%]  mx-auto mt-5"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={expref}
          style={{ perspective: "300px" }}
          onMouseOut={handleMouseOut}
          onMouseMove={handleMouseMove}
          className="text-[white]  bg-[#846ADD] duration-1000 ease-out w-full border-[2px] py-5  rounded-lg flex gap-x-[6%] lg:gap-x-[10%] justify-center"
        >
          <div className="w-[30%] hidden md:flex flex-col items-center">
            <div className="font-bold text-center">May 2024 - August 2024</div>
            <div className="mt-2">
              <Image src={digirocket} alt="Digirocket Technologies" width={200} height={200} className="w-[200px]" />
            </div>
          </div>
          <div className="w-[90%] md:w-[60%] lg:w-[60%]">
            <div className="font-bold">
              Web Developer Intern @ Digirocket Technologies
            </div>
            <div className="font-semibold  mt-5 text-[12px] md:text-[16px] ">
              I worked on both the frontend and backend of a project, handling
              various aspects of development. This included creating responsive
              user interfaces as well as implementing server-side logic and
              database management.
            </div>
            <div className="flex flex-wrap gap-[10px] mt-4 text-[white]">
              <div className="techButton  overflow-y-hidden ">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    HTML
                  </div>
                  <div className="flex h-full justify-center items-center">
                    HTML
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden ">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    CSS
                  </div>
                  <div className="flex h-full justify-center items-center">
                    CSS
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden ">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Javascript
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Javascript
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden ">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Reactjs
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Reactjs
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Nodejs
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Nodejs
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden ">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Expressjs
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Expressjs
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden ">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Mongodb
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Mongodb
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;