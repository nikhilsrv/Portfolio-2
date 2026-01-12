"use client"

import React from 'react'

export default function IndividualSkill({name}) {
    
    return (<div className="dark:techButton dark:bg-transparent bg-[#E7E7E7] overflow-y-hidden dark:text-[white] text-black">
        <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-xl">
            <div className="flex h-full justify-center items-center">
                {name}
            </div>
            <div className="flex h-full justify-center items-center">
                {name}
            </div>
        </div>
    </div>)
}

