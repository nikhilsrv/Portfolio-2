import SkillsLayout1 from "../Skills/SkillsLayout1";
import AboutDescription from "./AboutDescription";

export default function () {
    return (
        <div name="about" className="w-full py-16">
            <div className="w-[40%] mx-auto">
                <div className="text-center dark:text-white text-black text-2xl sm:text-3xl font-bold ">
                    ABOUT ME
                </div>
                <div className="h-[2px] mt-1 w-[30px] mx-auto border-[2px] space-x-4 border-[#846ADD] bg-[#846ADD] rounded-sm"></div>
            </div>
            <div className="w-[90%] lg:w-[85%] mt-8 mx-auto gap-x-[20px] gap-y-[15px] grid grid-cols-1 md:grid-cols-2">
                <AboutDescription />
                <SkillsLayout1 />
            </div>
        </div>
    )
}