"use client";
import React, { useRef, useState } from "react";
import { emailImg } from "@/assets";
// import { useSendMessage } from "../hooks/useSendMessage";
import "@/app/App.css";
import Image from "next/image";

const Contact = () => {
  const imgref = useRef();
  const refs = [useRef(), useRef(), useRef()];
//   const {sendMessage,loading}=useSendMessage()
  const [loading, setLoading] = useState(false);
  const [input,setinput]=useState({
       name:"",
       email:"",
       message:"",
})

  const handleMouseMove = (event) => {
    const rect = imgref.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Convert to percentage
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const degreeX = (Math.abs(xPercent - 50) / 50) * 20;
    const degreeY = (Math.abs(yPercent - 50) / 50) * 20;
    imgref.current.style.transform = `${
      xPercent <= 50 ? `rotateY(${degreeX}deg)` : `rotateY(${-degreeX}deg)`
    } ${
      yPercent <= 50 ? `rotateX(${-degreeY}deg)` : `rotateX(${degreeY}deg)`
    } `;
  };

  const handleMouseOut = () => {
    imgref.current.style.transform = `rotateX(${0}deg)`;
    imgref.current.style.transform = `rotateY(${0}deg)`;
  };

  const handleClick = (idx) => {
    refs[idx].current.classList.toggle("change");
    refs[idx].current.children[0].classList.toggle("gap-x-[4%]");

    if (idx != 2) {
      if (
        refs[idx].current.children[0].children[0].getAttribute("fill") ===
        "#AAAAAA"
      )
        refs[idx].current.children[0].children[0].setAttribute(
          "fill",
          "#846ADD"
        );
      else
        refs[idx].current.children[0].children[0].setAttribute(
          "fill",
          "#AAAAAA"
        );
    }
  };
  
  const submitForm=(e)=>{
      e.preventDefault();
     // sendMessage(input) ;
  }
  return (
    <div name="contact" className="w-screen py-16">
      <div className="w-[90%] lg:w-[70%] mx-auto  grid grid-cols-1 md:grid-cols-2">
        <div
          style={{ perspective: "1000px" }} className="flex h-full items-center hidden md:block"
        >
          <Image
            ref={imgref}
            src={emailImg}
            onMouseOut={() => handleMouseOut()}
            onMouseMove={(event) => handleMouseMove(event)}
            className="w-[350px] h-[350px]"
            style={{ perspective: "300px" }}
            alt=""
          />
        </div>
        <div>
          <div className="w-[90%] mx-auto">
            <h2 className="w-[80%] mx-auto pl-[5px] text-[30px] font-semibold text-[#333] font-sans" >Get in touch</h2>
            <form className="mt-8">
              <div
                ref={refs[0]}
                className="w-[80%] mx-auto  outline-none bg-[#E6E6E6] rounded-3xl flex justify-center items-center py-[8px]"
              >
                <div className="flex gap-x-[2%] w-[90%] justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[5%] h-[16px] duration-500"
                    viewBox="0 0 448 512"
                    fill="#AAAAAA"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                  <input
                    onFocus={() => handleClick(0)}
                    onBlur={() => handleClick(0)}
                    onChange={(e)=>setinput({...input,name:e.target.value})}
                    value={input?.name}
                    type="text"
                    placeholder="Name"
                    className="w-[91%] h-[30px] bg-[#E6E6E6]  font-bold  border-none  outline-none "
                  />
                </div>
              </div>
              <div
                ref={refs[1]}
                className="w-[80%] mt-4 mx-auto  outline-none bg-[#E6E6E6] rounded-3xl flex justify-center items-center py-[8px]"
              >
                <div className="flex gap-x-[2%] w-[90%] justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[5%] h-[16px] duration-500"
                    viewBox="0 0 512 512"
                    fill="#AAAAAA"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <input
                    onFocus={() => handleClick(1)}
                    onBlur={() => handleClick(1)}
                    onChange={(e)=>setinput({...input,email:e.target.value})}
                    value={input?.email}
                    type="text"
                    placeholder="Email"
                    className="w-[91%] h-[30px] bg-[#E6E6E6]  font-bold  border-none  outline-none "
                  />
                </div>
              </div>
              <div
                ref={refs[2]}
                className="w-[80%] mt-4 mx-auto  outline-none bg-[#E6E6E6] rounded-xl flex justify-center items-center py-[8px]"
              >
                <div className="flex w-full justify-center items-center ">
                  <textarea
                    onFocus={() => handleClick(2)}
                    onBlur={() => handleClick(2)}
                    onChange={(e)=>setinput({...input,message:e.target.value})}
                    value={input?.message}
                    type="text"
                    placeholder="Message"
                    className="w-[90%] h-[160px] bg-[#E6E6E6] pl-[5px]  font-bold  border-none  outline-none "
                  />
                </div>
              </div>
              {
              loading?  
              <div className="w-[80%] mx-auto mt-4 bg-[#846ADD]  bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out  outline-none rounded-3xl flex justify-center items-center">
                <button className="w-full h-[40px]  font-bold text-center rounded-3xl text-[white]"><span className="spinner"></span></button>
              </div>:
              <div onClick={(e)=>submitForm(e)} className="w-[80%] mx-auto mt-4 bg-[#846ADD]  bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out  outline-none rounded-3xl flex justify-center items-center">
                <button className="w-full h-[40px]  font-bold text-center rounded-3xl text-[white]">Send</button>
              </div>
             }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;