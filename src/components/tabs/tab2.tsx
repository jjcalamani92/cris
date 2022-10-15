import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '../../../utils/function'


export const Tab2 = () => {

  const [openMCD, setOpenMCD] = useState(false)
  return (
    <div className="w-full max-w-lg px-2 py-2 sm:px-6">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-indigo-900 hover:bg-white/[0.12] '
              )
            }
          >
            New Site
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-900 hover:bg-white/[0.12] '
              )
            }
          >
            Images of Site
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-900 hover:bg-white/[0.12] '
              )
            }
          >
            Data Base
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3'
            )}
          >
            <h1>1</h1>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3'
            )}
          >
            <h1>2</h1>

          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3'
            )}
          >
            <h1>2</h1>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
