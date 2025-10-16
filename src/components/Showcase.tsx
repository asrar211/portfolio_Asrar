import React from "react";
import { IconPlus, IconFlagFilled, IconMoodHappyFilled, IconStarFilled, IconFileDownloadFilled } from "@tabler/icons-react"

export const Showcase = () => {
  return (
    <div className=" mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
        <ShowCard title="56" titleIcon={<IconPlus size={17} color="blue"/>} achievement="Projects" achievementIcon={<IconFlagFilled size={17} color="yellow"/>}/>
        <ShowCard title="23" titleIcon={<IconPlus size={17} color="blue"/>} achievement="Happy Clients" achievementIcon={<IconMoodHappyFilled size={17} color="yellow"/>}/>
        <ShowCard title="01" titleIcon={<IconPlus size={17} color="blue"/>} achievement="Year Expertise" achievementIcon={<IconStarFilled size={17} color="yellow"/>}/>
        <div className="md:hidden flex flex-col items-center justify-center p-4 bg-neutral-950 border border-neutral-900 rounded-xl">
            <p className="flex items-center gap-2 text-[15px] font-light">Resume <span className="bg-neutral-800 p-1.5 rounded-md cursor-pointer"><IconFileDownloadFilled color="yellow" size={19}/></span></p>
        </div>
    </div>
  )
}

function ShowCard({
    title,
    titleIcon,
    achievement,
    achievementIcon
}: {
    title: string,
    titleIcon: React.ReactNode,
    achievement: string,
    achievementIcon: React.ReactNode
}) {
    return (
        <div className="flex flex-col items-center justify-center p-4 md:px-1 bg-neutral-950 border border-neutral-900 rounded-xl">
            <h1 className="flex translate-x-4 md:translate-x-2 items-center">
                <span className=" text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-900 mb-1">{title}</span>
                <span>{titleIcon}</span>
            </h1>
            <p className="flex justify-center items-center w-full bg-neutral-900 border border-neutral-800 rounded-full p-1 text-sm md:text-xs font-light text-[13px] gap-1 text-neutral-200">
                <span>{achievementIcon}</span> {achievement}
            </p>
        </div>
    )
}