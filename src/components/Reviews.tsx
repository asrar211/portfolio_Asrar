import { IconMoodHeart } from "@tabler/icons-react"
import img1 from "../assets/a.jpg";
import { motion } from "motion/react";

export const Reviews = () => {
  return (
    <div className=" h-[26rem] overflow-hidden mt-5 bg-neutral-950 border border-neutral-900 rounded-xl mx-auto relative">
         <div className="z-20 flex flex-col items-center gap-1 shadow-xl shadow-neutral-950 border-b border-neutral-800 pt-4 pb-2 w-full bg-neutral-950 relative">
        <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light">
          <span>
            <IconMoodHeart size={17} color="yellow" />
          </span>
          Testimonials
        </h4>
        <h1 className="text-[15px] font-[300]">Rave Reviews Showcase</h1>
      </div>
    <div className="flex flex-col ">
        <ReviewItem
            name="Emily Chen"
            address="Sydney, Australia"
            date="30,Nov,2024"
            text="Working with Asrar was a fantastic experience! The design exceeded my expectations and the process was smooth from start to finish. Highly recommended."
        />
        <ReviewItem
            className="!justify-end !ml-0 mr-3"
            name="Emily Chen"
            address="Sydney, Australia"
            date="30,Nov,2024"
            text="Working with Asrar was a fantastic experience! The design exceeded my expectations and the process was smooth from start to finish. Highly recommended."
        />
        <ReviewItem
            name="Emily Chen"
            address="Sydney, Australia"
            date="30,Nov,2024"
            text="Working with Asrar was a fantastic experience! The design exceeded my expectations and the process was smooth from start to finish. Highly recommended."
        />
        <ReviewItem
            className="!justify-end !ml-0 mr-3"
            name="Emily Chen"
            address="Sydney, Australia"
            date="30,Nov,2024"
            text="Working with Asrar was a fantastic experience! The design exceeded my expectations and the process was smooth from start to finish. Highly recommended."
        />
    </div>
    </div>
  )
}


function ReviewItem({name, address, date, className, text}: {name?: string, address?: string, date?: string, className?: string, text: string}) {
    return (
        <div className={`flex justify-start ${className}`}>
            <motion.div
            initial={{ y: 0 }} 
            animate={{ y: -300 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            className="relative mt-5 ml-3 w-[21rem] flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl px-4 pt-4 z-10">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2">
                <img className="w-10 h-10 rounded-md object-cover" src={img1} alt="" />
                <div>
                    <h1 className="text-[13px] ">{name}</h1>
                    <p className="text-[11px] text-neutral-400 font-light">{address}</p>
                </div>
            </div>
            <p className="text-[11px] text-neutral-400 font-light">{date}</p>
            </div>
            <hr className="border-neutral-800 mt-1 absolute inset-x-0 top-15" />
            <div>
                <p className="text-[13px] text-neutral-400 font-light py-4">{text}</p>
            </div>
        </motion.div>
        </div>
    )
}