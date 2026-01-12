"use client"
import skills from "../../../assets/skills.json"
import IndividualSkill from "./IndividualSkill"


export default function SkillsLayout1() {
    return (<div className="w-full dark:text-white text-black mx-auto bg-transparent">
        <div className="text-2xl font-bold tracking-wider text-center md:text-left">
            My Skills
        </div>

        <div className="mx-auto flex justify-center flex-wrap gap-[20px] mt-8 text-[14px] md:text-[16px] lg:text-[20px]">
            {skills.map((item) => {
                return (
                    <IndividualSkill key={item?.id} name={item?.name} />
                )
            })}
        </div>
    </div>)
}