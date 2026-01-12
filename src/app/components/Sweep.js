"use client"
import { useGlobalContext } from "@/context/GlobalContext"

export default function Sweep() {
    const { isAnimating, darkMode } = useGlobalContext();
    // return (<div
    //     className={`fixed inset-0 z-[9999] pointer-events-none ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    //     style={{
    //         clipPath: isAnimating
    //             ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    //             : 'polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%)',
    //         transition: 'clip-path 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    //     }}
    // />)

    return (
        <>    <div
            className={`fixed dark:block hidden ${isAnimating ? "diagonal-reveal-bl-tr" : ""
                }`}
            
        />
            <div
                className={`fixed dark:hidden block ${isAnimating ? "diagonal-reveal-expand" : ""
                    }`}
                
            /></>
    )
}