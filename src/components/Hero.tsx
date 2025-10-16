import img from "../assets/a.jpg";
import { IconPointFilled, IconBrandTelegram, IconBrandWhatsapp, IconClockHour12Filled, IconContract, IconMapPinFilled, IconSchool, IconWorld, IconFileDownloadFilled } from '@tabler/icons-react';

export const Hero = () => {
  const skills = [
    "Developer",
    "Designer",
  ]
  return (
    <div className='h-[23rem] mt-5 bg-neutral-950 rounded-xl border border-neutral-900 px-4 py-10 mx-auto'>
      <div className="flex gap-4">
        <img className="rounded-xl" width={90} height={90} src={img} alt="Placeholder" />
        <div>
          <h4 className="text-[13px] font-light text-neutral-400 py-1 px-4 rounded-full bg-neutral-900 border border-neutral-800 flex items-center gap-1"><span><IconPointFilled size={17} color="yellow"/></span>Available To Work</h4>
          <h1 className="mt-2 text-2xl ">Mohd Asrar</h1>
          <p className="text-neutral-400 font-light text-[14.5px] mt-2">Im a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-800 font-semibold">{skills[0]}</span></p>
        </div>
        <div className="max-[768px]:hidden float-end ml-auto">
            <p className="flex items-center gap-2 text-[14px] text-neutral-400 font-light">Resume <span className="bg-neutral-800 p-1.5 rounded-md cursor-pointer"><IconFileDownloadFilled color="yellow" size={19}/></span></p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 bg-neutral-900/70 border border-neutral-800/50 p-2 rounded-xl">
        <p className="flex items-center gap-1 font-light text-[12px] text-neutral-200 py-1 px-2 rounded-full bg-neutral-900 border border-neutral-800"><span><IconMapPinFilled size={17} color="pink"/></span>India</p>
        <p className="flex items-center gap-1 font-light text-[12px] text-neutral-200 py-1 px-2 rounded-full bg-neutral-900 border border-neutral-800"><span><IconWorld size={17} color="pink"/></span>Kashmiri, English & Urdu</p>
        <p className="flex items-center gap-1 font-light text-[12px] text-neutral-200 py-1 px-2 rounded-full bg-neutral-900 border border-neutral-800"><span><IconClockHour12Filled size={17} color="pink"/></span>IST</p>
        <p className="flex items-center gap-1 font-light text-[12px] text-neutral-200 py-1 px-2 rounded-full bg-neutral-900 border border-neutral-800"><span><IconSchool size={17} color="pink"/></span>Software Engineer</p>
        <p className="flex items-center gap-1 font-light text-[12px] text-neutral-200 py-1 px-2 rounded-full bg-neutral-900 border border-neutral-800"><span><IconContract size={17} color="pink"/></span>SSM College of Engineering</p>
      </div>

      <div className="flex items-center mt-5 gap-2 cursor-pointer">
  <a
    href="https://t.me/asrar21154"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[14px] text-neutral-300 flex gap-1 w-full items-center bg-neutral-900/70 border border-neutral-800/50 rounded-md p-3 hover:bg-neutral-800/70 transition-colors"
  >
    <IconBrandTelegram size={20} color="pink" />
    Telegram Me
  </a>

  <a
    href="https://wa.me/917889789033"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[14px] text-neutral-300 flex gap-1 w-full items-center bg-neutral-900/70 border border-neutral-800/50 rounded-md p-3 hover:bg-neutral-800/70 transition-colors"
  >
    <IconBrandWhatsapp size={20} color="pink" />
    WhatsApp Me
  </a>
</div>
    </div>
  )
}
