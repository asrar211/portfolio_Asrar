import { IconCrown, IconMail, IconPhoneCall } from "@tabler/icons-react"

export const Contact = () => {
  return (
    <div className="mb-5 min-[1320px]:h-[19.8rem] h-[16rem]  mt-5  mx-auto py-4 bg-neutral-950 border border-neutral-900 rounded-xl ">
    <div className="flex flex-col items-center justify-center">
        <span className="bg-neutral-800 border border-neutral-700/30 rounded-full p-2"><IconCrown size={25} color="yellow"/></span>
        <h1 className="mt-1 text-neutral-200 font-light ">Let's Work Together</h1>
        <p className="text-[13px] text-center mt-1 text-neutral-400 font-light">Let's Make Magic Happen Together!</p>
    </div>    
    <div>
        <ContactIcons title="Email Me" icon={<IconMail color="yellow" size={19}/>} />
        <ContactIcons title="Schedule a Call" icon={<IconPhoneCall color="yellow" size={19}/>} />
    </div>
    </div>
  )
}


function ContactIcons({title, icon}: {title?: string, icon?: any}) {
    return (
        <div className="flex mt-2 mx-3  justify-center items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-xl p-3 cursor-pointer hover:bg-neutral-800/80 transition-all duration-300 ease-in-out">
            <span>{icon}</span>
            <h1 className="text-[13px] text-neutral-400 font-light">{title}</h1>
        </div>
    )
}