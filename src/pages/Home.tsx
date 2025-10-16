import { Accordion } from "../components/Accordion"
import { Contact } from "../components/Contact"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Partners } from "../components/Partners"
import { Reviews } from "../components/Reviews"
import { Services } from "../components/Services"
import { Showcase } from "../components/Showcase"
import { Socials } from "../components/Socials"
import { Stack } from "../components/Stack"
import { Works } from "../components/Works"

export const Home = () => {
  return (
    <>
    {/* Mobiles */}
    <div className="max-w-[90%] mx-auto grid grid-cols-1 min-[768px]:hidden">
      <div>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <Partners/>
      <Stack/>
      <Works/>
      <Services/>
      <Reviews/>
      <Accordion/>
      <Socials/>
      <Contact/>
      </div>
    </div>

    {/* Tablets */}
    <div className="max-w-[90%] mx-auto grid grid-cols-5 gap-5 max-[768px]:hidden min-[1320px]:hidden">
      <div className="col-span-2">
      <Stack/>
      <Works/>
      <Services/>
      </div>
      <div className="col-span-3">
      <Showcase/>
      <Hero/>
      <Partners/>
      </div>
      <div className="col-span-3 -mt-5">
        <Reviews/>
      </div>
      <div className="col-span-2 -mt-5">
        <Accordion/>
      </div>
      <div className="col-span-2 -mt-5">
        <Socials/>
      </div>
      <div className="col-span-3 -mt-5">
        <Contact/>
      </div>
    </div>


    {/* Desktops */}
    <div className="my-5 max-w-[98%] gap-3 mx-auto max-[1320px]:hidden grid grid-cols-12">
      <div className="col-span-3">
        <Stack/>
        <Works/>
        <Services/>
      </div>
      <div className="col-span-4">
        <Showcase/>
        <Hero/>
        <Partners/>
      </div>
      <div className="col-span-3">
        <Reviews/>
        <Socials/>
      </div>
      <div className="col-span-2">
        <Accordion/>
        <Contact/>
      </div>
    </div>
    </>
  )
}
