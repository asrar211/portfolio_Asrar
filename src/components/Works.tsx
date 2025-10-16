import { IconPackage } from "@tabler/icons-react"
import img1 from '../assets/p-1.png';
import img2 from '../assets/p-2.png';
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const Works = () => {
    const imgs = [img1, img2, img1, img1, img1, img1, img1, img1, img1, img1, img1, img1];
  return (
    <div className=" mt-5 mx-auto bg-neutral-950 border border-neutral-900 rounded-xl px-0 pt-4">
        <div className="flex flex-col items-center gap-1">
          <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light"><span><IconPackage size={17} color="yellow"/></span>Projects</h4>
          <h1 className="text-[15px] font-[300]">Works Gallery</h1>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex gap-2 py-4 overflow-hidden">
            {imgs.map((img, index) => (
            <motion.img 
            initial={{ x:0}}
            animate={{ x: -300 }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
            }}
             key={index} src={img} alt={`img-${index}`} className="w-30 object-cover rounded-xl mx-1" />
        ))}
        </div>
        <button className="text-[14px] cursor-pointer bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 text-neutral-900 ring-4 rounded-xl py-2 px-7 -translate-y-8"><Link to='/works'>View Works</Link></button>
        </div>
    </div>
  )
}
