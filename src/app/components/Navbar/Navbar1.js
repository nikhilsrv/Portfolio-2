"use client"

import React, { useRef } from "react";
import lightLogo from "../../../assets/logo-light.png"
import darkLogo from "../../../assets/logo-dark.png"
import Image from "next/image";
import { Moon, Sun } from 'lucide-react';
import { Link } from "react-scroll";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Navbar1() {
    const navbarRef = useRef();
    const {darkMode,toggleDarkMode,isAnimating}=useGlobalContext()
    const handleNavbar = () => {
        if (navbarRef.current.classList.contains("h-0"))
            navbarRef.current.classList.replace("h-0", "h-[300px]");
        else navbarRef.current.classList.replace("h-[300px]", "h-0");
    };
    return (
        <div className="w-full sticky top-0 z-50">
            <div className="w-full bg-black/10 backdrop-blur-md py-2 dark:bg-transparent bg-white border-b border-b-white/1 flex justify-between px-6 sm:px-12 items-center dark:text-white text-black shadow-sm">
                <div className="flex items-center">
                     <div>
                    <a href="https://nikhil-srivastava.netlify.app/">
                        <Image src={darkMode?lightLogo:darkLogo} className="w-[100px] h-[70px]" alt="" />
                    </a>
                     </div>
                <div className="hidden  min-[900px]:flex gap-x-[6px]  lg:gap-x-[10px] font-bold text-[14px] lg:text-[16px]">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        <div className="cursor-pointer px-4 py-2 bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                            Home
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        <div className="cursor-pointer px-4 py-2 bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                            About
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        <div className="cursor-pointer px-4 py-2 bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                            Work Ex.
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        <div className="cursor-pointer px-4 py-2 bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                            Projects
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        <div className="cursor-pointer px-4 py-2 bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                            Skills
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        <div className="cursor-pointer px-4 py-2 bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out">
                            Contact
                        </div>
                    </Link>
                </div>
                </div>
               

                <div className="flex justify-between items-center gap-x-4">
                    <button
                        onClick={toggleDarkMode}
                        disabled={isAnimating}
                        className={`p-3 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-110 ${darkMode
                                ? 'bg-purple-400 text-gray-900 hover:bg-purple-300'
                                : 'bg-gray-800 text-white hover:bg-gray-700'
                            } `}
                    >
                        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <div onClick={handleNavbar} className="block min-[900px]:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-[20px] h-[20px]"
                            fill={darkMode?"white":"black"}
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                ref={navbarRef}
                className="w-full h-0 overflow-y-hidden bg-[white] duration-500  font-bold"
            >
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    <div className="w-full text-center px-4 py-2" onClick={handleNavbar}>
                        Home
                    </div>
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    <div className="w-full text-center px-4 py-2" onClick={handleNavbar}>
                        About
                    </div>
                </Link>
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    <div className="w-full text-center px-4 py-2" onClick={handleNavbar}>
                        Work Ex.
                    </div>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    <div className="w-full text-center px-4 py-2" onClick={handleNavbar}>
                        Projects
                    </div>
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    <div className="w-full text-center px-4 py-2" onClick={handleNavbar}>
                        Skills
                    </div>
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    <div className="w-full text-center px-4 py-2" onClick={handleNavbar}>
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    );
}

