import { IconExternalLink, IconWallet } from "@tabler/icons-react"
import img1 from "../../assets/p-1.png"
import img2 from "../../assets/p-2.png"

export const TopProjects = () => {
  return (
    <div className="max-[768px]:max-w-[95%] mt-5 min-[700px]:mt-10  mx-auto py-4 bg-neutral-950 border border-neutral-900 rounded-xl ">
        <div className="flex flex-col items-center gap-1">
        <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light">
          <span>
            <IconWallet size={17} color="yellow" />
          </span>
          My Works
        </h4>
        <h1 className="text-[15px] font-[300]">My Top 6 Projects</h1>
      </div>

      <div className="flex flex-col min-[700px]:grid  min-[700px]:grid-cols-3 justify-center gap-3 mt-5">
        <Projects title="Nathan" desc="Portfolio" img={img1} />
        <Projects title="Drio" desc="Ecommerce" img={img2} />
        <Projects title="Becky" desc="DevPort" img={img1} />
        <Projects title="09.dev" desc="SaaS" img={img2} />
        <Projects title="Becky" desc="DevPort" img={img1} />
        <Projects title="Becky" desc="DevPort" img={img1} />
      </div>
    </div>
  )
}


function Projects({title, desc, img}: {title?: string, desc?: string, img?: string}) {
    return (
        <div className=" hover:bg-neutral-800/70 cursor-pointer transition-all duration-300 ease-in-out mx-3 bg-neutral-900 border border-neutral-800 rounded-xl p-3">
            <img className="rounded-xl h-40 object-cover mb-1 w-full" src={img} alt="" />
            <div className="flex justify-between items-center">
                <div>
                <h1 className="text-[14px] text-neutral-200 font-light">{title}</h1>
                <p className="text-[12px] mt-1 text-neutral-400 font-light">{desc}</p>
                </div>
                <span className="p-1 bg-neutral-800 border border-neutral-700/30 rounded-md cursor-pointer"><IconExternalLink color="gray" size={20}/></span>
            </div>
        </div>
    )
}