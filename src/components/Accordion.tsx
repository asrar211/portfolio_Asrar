import { IconArrowDown, IconCode, IconDiscountCheck, IconPaintFilled, IconPlane, IconStarsFilled, IconTestPipe} from "@tabler/icons-react"
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react"

export const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = [
        {
      title: "Requirement Analysis",
      icon: <IconDiscountCheck color="gray" size={19} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Planning",
      icon: <IconPlane color="gray" size={19} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Designing",
      icon: <IconPaintFilled color="gray" size={19} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Development",
      icon: <IconCode color="gray" size={19} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Testing & Launch",
      icon: <IconTestPipe color="gray" size={19} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    ]
  return (
    <div className=" mt-5 min-[1320px]:h-[26rem]  mx-auto py-4 bg-neutral-950 border border-neutral-900 rounded-xl ">
        <div className="relative flex flex-col items-center gap-1">
          <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light"><span><IconStarsFilled size={17} color="yellow"/></span>Work Process</h4>
          <h1 className="text-[15px] font-[300]">Workflow Highlights</h1>
        <hr className="border-neutral-800 my-2 absolute -bottom-4 inset-x-0 " />
        </div>

         <div className="mt-5 min-[1320px]:py-5 px-4 min-[1320px]:px-2 flex flex-col gap-3">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                icon={item.icon}
                description={item.description}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
         </div>
    </div>
  )
}

function AccordionItem({
  title,
  icon,
  isOpen,
  onToggle,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  description: string;
}) {    return (
        <div className="min-[1320px]:py-1 min-[1320px]:cursor-pointer bg-neutral-900 border border-neutral-800 rounded-xl">
        <div className="flex p-2 justify-between items-center ">
                <div>
                    <h1 className="text-[13px] text-neutral-400 font-light flex gap-1 items-center"><span>{icon}</span>{title}</h1>
                </div>
                <div>
                    <button
                     onClick={onToggle} 
                      className="px-2 min-[1320px]:hidden pt-2 cursor-pointer bg-neutral-800 border border-neutral-700/50 rounded-lg">
                    <motion.span 
                     initial={{rotate: 0}}
                     animate={{rotate: isOpen ? 180 : 0}}
                    transition={{duration: 0.4, ease: "easeInOut"}}
                    className="inline-block "
                     ><IconArrowDown color="gray" size={19}/>
                     </motion.span>
                     </button>
                </div>

                </div>
                <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="overflow-hidden"
          >
            <div className="m-2 bg-neutral-950 p-2 rounded-xl border border-neutral-800">
              <h1 className="text-[13px] text-neutral-100 font-light flex gap-1 items-center">
                {title}
              </h1>
              <p className="mt-2 text-[12px] text-neutral-500 font-light">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
            </div>
    )
}