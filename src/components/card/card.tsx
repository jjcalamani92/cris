import React, { FC, RefObject } from 'react'
import { Site } from '../../../interfaces'
interface Card {
  site: Site
  ref: RefObject<HTMLDivElement>
}
export const Card:FC<Card> = ({site, ref}) => {
  return (
    <div ref={ref}>
      <img
        className="h-[12rem] w-full object-cover"
        src={site?.data.seo.image.src!}
        alt={site?.data.seo.image.alt!}
      />
      <div className="flex items-center h-[3rem] mx-2">
        <h2 className=" text-sm tracking-wide truncate">{site?.data.seo.title}</h2>
      </div>
    </div>
  )
}
