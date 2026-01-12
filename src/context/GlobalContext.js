"use client"

import { createContext, useEffect, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false)

    const wait = async () => {
        setTimeout(() => {

        }, 800);
    }
    const toggleDarkMode = () => {
        
        if (isAnimating)
            return;


        const isDark = !darkMode;

        document.body.classList.toggle('dark', isDark);

        if (!isDark) {
            setIsAnimating(true)
                setDarkMode(isDark)
                document.documentElement.classList.toggle('dark', isDark);
                 
            setTimeout(() => {
                setIsAnimating(false);
              
            }, 800)
        } else {
            setIsAnimating(true)
            document.documentElement.classList.toggle('dark', isDark);
            setDarkMode(isDark)


            setTimeout(() => {
                setIsAnimating(false);
            }, 800)
        }

    };

    return (
        <GlobalContext.Provider value={{ darkMode, toggleDarkMode, isAnimating, setIsAnimating }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
