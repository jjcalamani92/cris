import Link from 'next/link'
import React, { createRef, FC, forwardRef } from 'react'
import { useRouter } from 'next/router';
import { ImageInterface } from '../../../interfaces';
interface LinkURL {
  label: string
  href: string
  type: string
}
export const LinkURL:FC<LinkURL> = ({label, href, type}) => {
  let style
  if (type === 'primary') {
    style="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
  } else
  if (type === 'link') {
    style="whitespace-nowrap text-sm font-normal text-gray-500 hover:text-gray-900"
  } else
  if (type === 'a') {
    style="font-medium text-indigo-600 hover:text-indigo-500"
  }
  return (
    <Link href={href}>
      <a className={style}>
        {label}
      </a>
    </Link>
  )
}

interface NextLink {
  label: string
  href: string
  style: string
}
export const NextLink:FC<NextLink> = ({label, href, style}) => {
  return (
    <Link href={href}>
      <a className={style}>
        {label}
      </a>
    </Link>
  )
}
interface Image {
  className: string
  img: ImageInterface
}
export const Image:FC<Image> = ({className, img}) => {
  return (
      <img src={img?.src || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg" } alt={ img?.alt || 'image description'} className={className}/>
  )
}

interface Button {
  children: React.ReactNode;
}
export const Button:FC<Button> = ({ children, ...restProps}) => {
  return (
    <button {...restProps} >{children}</button>
  )
}
