import { IconAppWindow, IconCode, IconPaintFilled, IconPhoneCalling, IconSeo } from "@tabler/icons-react"

export const Service = () => {
  return (
    <div className="min-[768px]:grid min-[768px]:grid-cols-3 flex flex-col gap-5 max-[768px]:max-w-[95%] mt-5 min-[700px]:mt-10  mx-auto ">
        <ServiceCard
  title="Web Development"
  description="Building modern, responsive websites using clean, optimized code and user-focused layouts that ensure performance, accessibility, and an engaging online experience."
  icon={<IconCode color="yellow" />}
/>

<ServiceCard
  title="App Development"
  description="Creating high-performance mobile apps with smooth interfaces, scalable architecture, and a seamless user journey that enhances productivity and engagement."
  icon={<IconAppWindow color="yellow" />}
/>

<ServiceCard
  title="Web Design"
  description="Designing visually stunning, intuitive interfaces that blend creativity with usability, helping your brand stand out and keep users engaged across devices."
  icon={<IconPaintFilled color="yellow" />}
/>

<ServiceCard
  title="SEO Optimization"
  description="Implementing strategic SEO techniques to boost your site’s visibility, improve rankings, and drive consistent organic traffic from your target audience."
  icon={<IconSeo color="yellow" />}
/>
    </div>
  )
}

function ServiceCard({title, description, icon}: {title?: string, description?: string, icon?: React.ReactNode}) {
    return (
        <div className="py-4 bg-neutral-950 border border-neutral-900 rounded-xl p-3">
            <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span className="p-1 bg-neutral-800 border border-neutral-700/30 rounded-md">{icon}</span>
                <h1 className="text-[16.5px] text-neutral-200 font-light">{title}</h1>
            </div>
            <p className="text-[13px] mr-6 font-light text-neutral-400">{description}</p>
            </div>
            <button className="bg-neutral-800/60 rounded-xl text-[14px] text-neutral-400 cursor-pointer font-light px-2 py-3 flex justify-center w-full items-center gap-2 mt-3"><span><IconPhoneCalling color="yellow" size={19}/></span>Schedule a Call</button>
        </div>
    )
}

