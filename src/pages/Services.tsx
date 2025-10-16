import { Navbar } from "../components/Navbar"
import { Service } from "../components/Services/Service"

export const Services = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="min-[768px]:hidden">
        <Navbar/>
      </div>
      <Service/>
    </div>
  )
}
