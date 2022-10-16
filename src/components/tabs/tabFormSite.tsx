import { FC, useState } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '../../../utils/function'
import { DataBaseForm, SiteForm } from '../form'
import { Site } from '../../../interfaces'
import { ImageSiteForm } from '../form';
interface TabFormSite {
  toggle: () => void
  setLeft: () => void
  site?: Site
}

export const TabFormSite: FC<TabFormSite> = ({ toggle, setLeft, site }) => {
  // console.log(site);
  return (
    <div className="w-full max-w-lg h-full ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white py-3">
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
            {site ? "Update" : "Create"}
          </Tab>
          <Tab
            disabled={site ? false : true}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                site ? "text-indigo-700" : "text-gray-200 opacity-40",

                // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-900 hover:bg-white/[0.12] '
              )
            }
          >
            Data Base
          </Tab>
          <Tab
            disabled={site ? false : true}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                site ? "text-indigo-700" : "text-gray-200 opacity-40",

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
        <Tab.Panels className={'h-auto content-between'}>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white '
            )}
          >
            <SiteForm toggle={toggle} setLeft={setLeft}  site={site} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            <DataBaseForm toggle={toggle} setLeft={setLeft}  site={site} />

          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white'
            )}
          >
            <ImageSiteForm toggle={toggle} setLeft={setLeft}  site={site} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
