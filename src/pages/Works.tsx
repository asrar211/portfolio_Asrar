import { Navbar } from "../components/Navbar"
import { TopProjects } from "../components/Works/TopProjects"

export const Works = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="min-[768px]:hidden">
        <Navbar/>
      </div>
      <TopProjects/>
    </div>
  )
}
