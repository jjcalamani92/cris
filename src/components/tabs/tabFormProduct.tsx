import { FC, useState } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '../../../utils/function'
import { ImageForm, PageForm, ProductForm, SiteForm } from '../form'
import { Page, Product, Site } from '../../../interfaces'
interface TabFormProduct {
  toggle: () => void
  setLeft: () => void
  product?: Product
  type?: string 
  uid?: string
}

export const TabFormProduct:FC<TabFormProduct> = ({toggle, setLeft, product, type, uid}) => {

  return (
    <div className="w-full max-w-lg">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-3">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700',
                selected
                  ? 'bg-white shadow'
                  : 'text-indigo-900 hover:bg-white/[0.12] '
              )
            }
          >
            {product ? "Updated" : "Created"}
            
          </Tab>
          <Tab
            disabled={product ? false : true}

            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700',
                product ? "text-indigo-700" : "text-gray-200 opacity-40",

                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-900 hover:bg-white/[0.12] '
              )
            }
          >
            Images
          </Tab>
          <Tab
            disabled={product ? false : true}

            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700',
                product ? "text-indigo-700" : "text-gray-200 opacity-40",

                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-900 hover:bg-white/[0.12] '
              )
            }
          >
            More
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            <ProductForm toggle={toggle} setLeft={setLeft} type={type} uid={uid} product={product}/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            <ImageForm toggle={toggle} setLeft={setLeft} product={product!}/>

          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            <h1>2</h1>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
