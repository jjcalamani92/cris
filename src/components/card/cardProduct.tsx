import Link from "next/link"
import React, { FC, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Page, Product, Site } from "../../../interfaces";
import { useLongPress } from 'ahooks';
import { useRouter } from "next/router";

interface CardProduct {
  product?: Product
  select?: string[]
  setSelect?: React.Dispatch<React.SetStateAction<string[]>> | any
}

export const CardProduct: FC<CardProduct> = ({ product, select, setSelect }) => {
  const {push} = useRouter()
  const [check, setCheck] = useState(false)
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(() => onSelect(product?._id!), ref, {
    onClick: () => push(`/dashboard/sites/${product?.site}/product/${product?.type}=${product?._id}`),
  });

  useEffect(() => {
    // if (select!.length === 0) {
    //   setCheck(false)
    // }
  }, [select])
  
  const onSelect = ( id:string) => {
    const uid = select!.find(data => data === id)
    if (uid) {
      setSelect(select!.filter(data => data !== id))
      setCheck(false)
    } else {
      setSelect([...select!, id])
      setCheck(true)
    }
  } 
  

  
  return (
    <div ref={ref}  className="group max-w-xs rounded-md shadow hover:shadow-2xl transition ease-in-out delay-150 bg-gray-50 text-gray-800 relative">

        <div className={`flex p-1 items-center absolute z-50 top-2 left-2 opacity-0 ${select?.length !== 0  && "opacity-100"} group-hover:opacity-100  group-hover:transition-all transition ease-in-out delay-150`}>
          <input
            type="checkbox"
            className="h-5 w-5  rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onClick={() => {onSelect(product?._id!), setCheck(true)}}
            onChange={(e) => setCheck(!check)}  
            checked={check}
            
          />
        </div>
      {/* <Link href={`/dashboard/sites/${product?.site}/product/${product?.type}=${product?._id}`}>
        <a> */}
          <Image
            width={400}
            height={400}
            src={product?.data.seo.image.src!}
            alt={product?.data.seo.image.alt!}
          />
          <div className="flex flex-col justify-between px-4 my-3">
            
              <h2 className=" text-sm tracking-wide truncate">{product?.data.seo.title}</h2>
          </div>
        {/* </a>
      </Link> */}
    </div>
  )
}