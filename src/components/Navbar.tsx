import { IconCrown, IconHome, IconServer } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const baseClasses =
    "py-2.5 px-4 rounded-[8px] text-[13px] border-[0.1px] border-neutral-800 duration-200 ease-in-out cursor-pointer hover:scale-95 hover:bg-neutral-900 hover:border-neutral-950 hover:shadow-blue-400/20 hover:shadow-sm";

  return (
    <div className="md:hidden flex justify-between items-center gap-2 bg-neutral-950 p-2 mx-auto mt-5 rounded-xl border-neutral-900 border-[0.1px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClasses} ${ 
            isActive ? "bg-blue-400 text-white " : "bg-neutral-900 text-neutral-300"
          }`
        }
      >
        <h4 className="flex items-center gap-1"><IconHome size={17}/>About</h4> 
      </NavLink>

      <NavLink
        to="/works"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive ? "bg-blue-500 text-white" : "bg-neutral-900 text-neutral-300"
          }`
        }
      >
        <h4 className="flex items-center gap-1"><IconCrown size={17}/>Works</h4> 
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive ? "bg-blue-500 text-white" : "bg-neutral-900 text-neutral-300"
          }`
        }
      >
        <h4 className="flex items-center gap-1"><IconServer size={17}/>Services</h4> 
      </NavLink>
    </div>
  );
};
