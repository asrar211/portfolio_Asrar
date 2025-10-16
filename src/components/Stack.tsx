import { IconBrandDocker, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconSql, IconStack2Filled } from "@tabler/icons-react"

export const Stack = () => {
  return (
    <div className="max-[768px]:max-w-[85%] mt-5  mx-auto p-4 bg-neutral-950 border border-neutral-900 rounded-xl ">
        <div className="flex flex-col items-center gap-1">
          <h4 className="flex gap-1 items-center text-[13px] text-neutral-400 font-light"><span><IconStack2Filled size={17} color="yellow"/></span> My Stacks</h4>
          <h1 className="text-[15px] font-[300]">Tech Arsenal</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <StackItem title="Next.js" icon={<IconBrandNextjs size={17} color="gray" />} />
          <StackItem title="ReactJs" icon={<IconBrandReact size={17} color="gray" />} />
          <StackItem title="Node.js" icon={<IconBrandNodejs size={17} color="gray" />} />
          <StackItem title="Docker" icon={<IconBrandDocker size={17} color="gray" />} />
          <StackItem title="Typescript" icon={<IconBrandTypescript size={17} color="gray" />} />
          <StackItem title="Tailwind" icon={<IconBrandTailwind size={17} color="gray" />} />
        </div>
    </div>
  )
}


function StackItem({title, icon}: {title?: string, icon?: React.ReactNode}) {
  return (
    <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg mt-2">
          <h1 className="flex gap-2 items-center text-[13px] text-neutral-200 font-light"><span className="p-1 rounded-md bg-neutral-800 border border-neutral-700/50">{icon}</span> {title}</h1>
        </div>
  )
}