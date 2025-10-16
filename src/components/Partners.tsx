import { IconAi, IconBrandFigma, IconBrandInstagramFilled, IconCode, IconDeviceMobile, IconRocket, IconSeo } from "@tabler/icons-react";
import { motion } from "motion/react";

export const Partners = () => {
  return (
    <div className="max-[768px]:max-w-[85%] h-[13.7rem] bg-neutral-950 mx-auto mask-l-from- mt-5 border border-neutral-900 rounded-xl  px-0 pt-4 overflow-hidden">
      <div className="flex flex-col items-center gap-1">
        <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light">
          <span>
            <IconRocket size={17} color="yellow" />
          </span>
          My Clients
        </h4>
        <h1 className="text-[15px] font-[300]">Satisfied Partners</h1>
      </div>

      <div className=" mask-l-from-80% mask-r-from-80% ">
        <motion.div
        animate={{ x: 300 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "loop" }}
         className="flex items-center w-full gap-3 mt-3 px-2 whitespace-nowrap -translate-x-50">
        <ServiceItem icon={<IconBrandInstagramFilled size={25} color="gray" />} />
        <ServiceItem  icon={<IconBrandFigma size={25} color="gray" />} />
        <ServiceItem  icon={<IconDeviceMobile size={25} color="gray" />} />
        <ServiceItem  icon={<IconSeo size={25} color="gray" />} />
        <ServiceItem  icon={<IconAi size={25} color="gray" />} />
        </motion.div>
      </div>

      <div className=" mask-l-from-80% mask-r-from-80% ">
        <motion.div
        animate={{ x: -300 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "loop" }}
         className="flex items-center w-full gap-3 mt-3 px-2 whitespace-nowrap translate-x-50">
        <ServiceItem icon={<IconCode size={25} color="gray" />} />
        <ServiceItem  icon={<IconBrandFigma size={25} color="gray" />} />
        <ServiceItem  icon={<IconDeviceMobile size={25} color="gray" />} />
        <ServiceItem  icon={<IconSeo size={25} color="gray" />} />
        <ServiceItem  icon={<IconAi size={25} color="gray" />} />
        </motion.div>
      </div>
    </div>
  );
};

function ServiceItem({ icon }: {icon?: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 py-1 px-4 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
      <span>{icon}</span>
    </div>
  );
}

