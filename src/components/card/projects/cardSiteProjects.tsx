import { FC, useRef } from "react";
import { Page, Site } from "../../../../interfaces";
import { useClickAway, useLongPress, useSelections } from 'ahooks';
import Link from "next/link";
import { Image } from "../../utils";

interface CardSiteProjects {
  site?: Site
  checked: boolean
  partiallySelected: boolean
  toggle: () => void
}
export const CardSiteProjects: FC<CardSiteProjects> = ({ site, checked, partiallySelected,  toggle }) => {
  // const {push} = useRouter()
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(toggle, ref, {
    moveThreshold: { x: 5, y: 5 },
    // onClick: (e) => { push(`/dashboard/sites/${site?._id}`); e.stopPropagation()}, 
    // onClick: (e) => { push(`/dashboard/sites/${site?._id}`); e.stopPropagation()}, 
    // onClick: (e) => console.log('click'), 
  }, );
  return (
    <div   className="group relative max-w-xs rounded-md shadow hover:shadow-2xl transition-all z-0  delay-150  bg-gray-100 text-gray-800">
      <input
        type="checkbox"
        className={`h-5 w-5 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500 absolute  top-2 left-2 z-100 opacity-0 ${partiallySelected  && "opacity-100"} group-hover:opacity-100 transition ease-in-out delay-150`}
      onChange={() => toggle}  
      checked={checked}
      onClick={toggle}
      />
      {/* <Card site={site!} ref={ref}/> */}
      <div ref={ref} className="">
        <Image img={site?.data.seo.image!} className="h-[12rem] w-full object-cover"/>

        
        <Link href={`/dashboard/projects/${site?._id}`}>
          <a  className="flex items-center h-[3rem] mx-2 cursor-pointer"> 
            <h2 className=" text-sm tracking-wide truncate">{site?.data.seo.title}</h2>
          </a>
        </Link>
      </div>

    </div>
  )
}