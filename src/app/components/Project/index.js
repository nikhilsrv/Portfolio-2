'use client';
import React, { useRef, useEffect } from 'react';
import { mybuddy, ytclone, chatapp, sorting } from '@/assets';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

const Projects = () => {
  const swiperContainer = useRef(null);

  useEffect(() => {
    const swiperEl = swiperContainer.current;
    if (!swiperEl) return;

    // Swiper parameters
    const swiperParams = {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1350: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    };

    // Assign parameters to swiper element
    Object.assign(swiperEl, swiperParams);

    // Initialize swiper
    swiperEl.initialize();
  }, []);

  return (
    <div name="projects" className="w-full py-10">
      <div className="w-[40%] mx-auto">
        <div className="text-center text-[25px] sm:text-[35px] font-bold  ">
          PROJECTS
        </div>
        <div className="h-[2px] mt-1 w-[30px] mx-auto border-[2px] space-x-4 border-[#846ADD] bg-[#846ADD] rounded-sm"></div>
      </div>
      <div className="mt-4 w-[85%] lg:w-[70%] min-[1350px]:w-[80%] mx-auto relative pt-16">
        <swiper-container ref={swiperContainer} init="false">
          <swiper-slide>
            <div className="h-[560px] border-[2px] rounded-2xl pb-5 bg-[#E7E7E7]">
              <div>
                <Image
                  src={mybuddy}
                  className="w-full rounded-t-2xl h-[200px] min-[400px]:h-[250px]"
                  alt=""
                />
              </div>
              <div className="pt-2 text-center text-[20px] font-bold">
                My Buddy
              </div>
              <div className="pt-2 text-center bg-[#E7E7E7]">
                An AI-powered web app using Gemini LLM for personalized,
                empathetic conversations with customizable personas, ..
              </div>
              <div className="pt-4 flex gap-[8px] text-[14px] lg:text-[16px] md:gap-[10px] flex-wrap justify-center bg-[#E7E7E7] ">
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Reactjs
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Reactjs
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Nodejs
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Nodejs
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Expressjs
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Expressjs
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Mongodb
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Mongodb
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Gemini
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Gemini
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly pt-4 text-[white]">
                <a href="https://my-buddy-ten.vercel.app/">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scienmanas/My-Buddy">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="h-[560px] border-[2px] rounded-2xl pb-5 bg-[#e7e7e7]">
              <div>
                <Image
                  src={ytclone}
                  className="w-full rounded-t-2xl h-[200px] min-[400px]:h-[250px]"
                  alt=""
                />
              </div>
              <div className="pt-2 text-center text-[20px] font-bold">
                Youtube Clone
              </div>
              <div className="mt-2 text-center">
                A frontend application build using React.js.Search for any video
                you want and play the video.Search comes up with filter as well.
              </div>
              <div className="mt-4 flex gap-[8px] text-[14px] lg:text-[16px] md:gap-[10px] flex-wrap justify-center ">
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Reactjs
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Reactjs
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Context Api
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Context Api
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Tailwindcss
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Tailwindcss
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Rapid Api
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Rapid Api
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly pt-4 text-[white]">
                <a href="https://transcendent-crostata-c31ecd.netlify.app/">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nikhilsrv/YouTube-Clone">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="h-[560px] border-[2px] rounded-2xl pb-5 bg-[#e7e7e7]">
              <div>
                <Image
                  src={chatapp}
                  className="w-full rounded-t-2xl h-[200px] min-[400px]:h-[250px]"
                  alt=""
                />
              </div>
              <div className="pt-2 text-center text-[20px] font-bold">
                Chat App
              </div>
              <div className="mt-2 text-center">
                A full-stack real-time chat app,enables users to send and
                receive messages instantly. It uses socket.io for live,
                communication.
              </div>
              <div className="mt-4 flex gap-[8px] text-[14px] lg:text-[16px] md:gap-[10px] flex-wrap justify-center ">
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Reactjs
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Reactjs
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Nodejs
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Nodejs
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Expressjs
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Expressjs
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Mongodb
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Mongodb
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Socket.io
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Socket.io
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly pt-4 text-[white]">
                <a href="https://chat-app-0ie9.onrender.com/">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nikhilsrv/Chat-App">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="h-[560px] border-[2px] rounded-2xl pb-5 bg-[#e7e7e7]">
              <div>
                <Image
                  src={sorting}
                  className="w-full rounded-t-2xl h-[200px] min-[400px]:h-[250px]"
                  alt=""
                />
              </div>
              <div className="pt-2 text-center text-[20px] font-bold">
                Sorting Visualizer
              </div>
              <div className="mt-2 text-center">
                A visualization tool that helps in visualizing how various
                sorting algorithms like merge sort ,quick sort ,count sort etc
                works.
              </div>
              <div className="mt-4 flex gap-[8px] text-[14px] lg:text-[16px] md:gap-[10px] flex-wrap justify-center ">
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      HTML
                    </div>
                    <div className="flex h-full justify-center items-center">
                      HTML
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Javascript
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      CSS
                    </div>
                    <div className="flex h-full justify-center items-center">
                      CSS
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Sorting
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Sorting
                    </div>
                  </div>
                </div>
                <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                  <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                    <div className="flex h-full justify-center items-center">
                      Algorithms
                    </div>
                    <div className="flex h-full justify-center items-center">
                      Algorithms
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly pt-4 text-[white]">
                <a href="https://nikhilsrv.github.io/sorting-visualizer/">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nikhilsrv/sorting-visualizer">
                  <button className="bg-[#846ADD] px-4 py-2 rounded-3xl bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <div
          onClick={() => swiperContainer.current.swiper.slidePrev()}
          className="border-[1px] px-6 py-2 cursor-pointer  absolute top-0 left-[10px] border-[black] rounded-[30px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-[25px] md:h-[25px]"
            fill="#846add"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <div
          onClick={() => swiperContainer.current.swiper.slideNext()}
          className="border-[1px] px-6 py-2 cursor-pointer  absolute top-0 right-[10px] border-[black] rounded-[30px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 md:w-[25px] h-5 md:h-[25px]"
            fill="#846add"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Projects;
