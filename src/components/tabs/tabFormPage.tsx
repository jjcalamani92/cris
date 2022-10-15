import { FC, useState } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '../../../utils/function'
import { ImagePageForm, PageForm, SiteForm } from '../form'
import { Page, Site } from '../../../interfaces'
interface TabFormPage {
  page?: Page
  type?: string 
  uid?: string
  toggle: () => void
  setLeft: () => void
  
}

export const TabFormPage:FC<TabFormPage> = ({page, type, uid, toggle, setLeft}) => {

  return (
    <div className="w-full max-w-lg">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-3">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700',
                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-indigo-900 hover:bg-white/[0.12] '
              )
            }
          >
            {page ? "Update" : "Create"}
          </Tab>
          <Tab
            disabled={page ? false : true}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                page ? "text-indigo-700" : "text-gray-200 opacity-40",
                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-900 hover:bg-white/[0.12] '
              )
            }
          >
            Seo
          </Tab>
          
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            <PageForm toggle={toggle} setLeft={setLeft} type={type} uid={uid} page={page}/>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            <ImagePageForm  toggle={toggle} setLeft={setLeft} page={page} />

          </Tab.Panel>
          
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
