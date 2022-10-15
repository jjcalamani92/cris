import { FC, useRef } from "react";
import Image from "next/image";
import { Page, Product, Site } from "../../../interfaces";
import { useClickAway, useLongPress, useSelections } from 'ahooks';
import { useRouter } from "next/router";
import { Card } from "./card";
import Link from "next/link";

interface CardProduct0 {
  product?: Product
  checked: boolean
  partiallySelected: boolean
  toggle: () => void
}
export const CardProduct0: FC<CardProduct0> = ({ product, checked, partiallySelected,  toggle }) => {
  const {push} = useRouter()
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(toggle, ref, {
    moveThreshold: { x: 5, y: 5 },

    // onClick: () => { push(`/dashboard/sites/${product?.site}/product/${product?.type}=${product?._id}`)}, 
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
        <img
          className="h-[12rem] w-full object-cover"
          src={product?.data.seo.image.src!}
          alt={product?.data.seo.image.alt!}
        />
        <Link href={`/dashboard/sites/${product?.site}/product/${product?.type}=${product?._id}`}>
        <a className="flex items-center h-[3rem] mx-2 cursor-pointer"> 
          <h2 className=" text-sm tracking-wide truncate">{product?.data.seo.title}</h2>
        </a>
        </Link>
      </div>

    </div>
  )
}