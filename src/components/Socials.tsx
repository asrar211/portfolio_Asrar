import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconLink, IconSocial } from "@tabler/icons-react"

export const Socials = () => {
  return (
    <div className="max-[768px]:max-w-[85%] mt-5 min-[1320px]:h-[19.8rem] mx-auto py-4 bg-neutral-950 border border-neutral-900 rounded-xl ">
        <div className="flex flex-col items-center gap-1">
          <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light"><span><IconSocial size={17} color="yellow"/></span>Follow Me</h4>
          <h1 className="text-[15px] font-[300]">Online Presence</h1>
        </div>
        <div className="mt-3 mx-3 flex flex-col gap-3">
            <SocialLinks title="@_asrar_ali" icon={<IconBrandX color="gray" size={19}/>} />
            <SocialLinks title="@asrar.env" icon={<IconBrandInstagram color="gray" size={19}/>} />
            <SocialLinks title="@mohdasrar" icon={<IconBrandLinkedin color="gray" size={19}/>} />
        </div>
    </div>
  )
}       


function SocialLinks({title, icon}: {title?: string, icon?: any}) {
    return (
        <div className="flex hover:bg-neutral-800/80 transition-all duration-300 ease-in-out justify-between group cursor-pointer items-center bg-neutral-900 border border-neutral-800 rounded-xl p-2">
            <div className="flex items-center gap-2 ">
            <span className="bg-neutral-800 border border-neutral-700/40 rounded-md p-1">{icon}</span>
            <h1 className="text-[13px] font-light text-neutral-400 ">{title}</h1>
            </div>
            <span className="invisible group-hover:visible group-hover:transition-all group-hover:duration-300 ease-in-out"><IconLink color="gray" size={19}/></span>
        </div>
    )
}