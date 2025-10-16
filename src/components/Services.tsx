import { IconAi, IconBoxMultiple, IconBrandFigma, IconCode, IconDeviceMobile, IconSeo } from "@tabler/icons-react";
import { motion } from "motion/react";
import {Link} from "react-router-dom";

export const Services = () => {
  return (
    <div className="max-[768px]:max-w-[85%] bg-neutral-950 mx-auto mask-l-from- mt-5 border border-neutral-900 rounded-xl  px-0 pt-4 overflow-hidden">
      <div className="flex flex-col items-center gap-1">
        <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light">
          <span>
            <IconBoxMultiple size={17} color="yellow" />
          </span>
          Services
        </h4>
        <h1 className="text-[15px] font-[300]">Solutions Suite</h1>
      </div>

      <div className=" mask-l-from-80% mask-r-from-80% ">
        <motion.div
        animate={{ x: 300 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "loop" }}
         className="flex items-center w-full gap-3 mt-3 px-2 whitespace-nowrap -translate-x-100">
        <ServiceItem title="Web Development" icon={<IconCode size={25} color="gray" />} />
        <ServiceItem title="Web Design" icon={<IconBrandFigma size={25} color="gray" />} />
        <ServiceItem title="App Developement" icon={<IconDeviceMobile size={25} color="gray" />} />
        <ServiceItem title="SEO Optimization" icon={<IconSeo size={25} color="gray" />} />
        <ServiceItem title="AI Agents" icon={<IconAi size={25} color="gray" />} />
        </motion.div>
      </div>

      <div className="mask-l-from-80% mask-r-from-80% -translate-">
        <motion.div className="flex items-center w-full gap-3 mt-3 px-2 whitespace-nowrap "
         animate={{ x: -300 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
            <ServiceItem title="Web Development" icon={<IconCode size={25} color="gray" />} />
        <ServiceItem title="Web Design" icon={<IconBrandFigma size={25} color="gray" />} />
        <ServiceItem title="App Developement" icon={<IconDeviceMobile size={25} color="gray" />} />
        <ServiceItem title="SEO Optimization" icon={<IconSeo size={25} color="gray" />} />
        <ServiceItem title="AI Agents" icon={<IconAi size={25} color="gray" />} />
        </motion.div>
      </div>
      <div className="flex flex-col items-center">
        <button className="text-[14px] cursor-pointer bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 text-neutral-900 ring-4 rounded-xl py-2.5 px-7 -translate-y-10.5"><Link to='/services'>View All Services</Link></button>
      </div>
    </div>
  );
};

function ServiceItem({ title, icon }: { title?: string; icon?: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 py-1 px-4 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
      <span className="p-1 rounded-md bg-neutral-800 border border-neutral-700/50">{icon}</span>
      <h1 className="text-[13px] text-neutral-300 font-light">{title}</h1>
    </div>
  );
}
