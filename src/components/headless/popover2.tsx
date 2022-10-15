import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const Popover2 = () =>{
  return (
    <Popover className="z-20">
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button className={"flex justify-between"}>
            <p>
              Solutions
            </p>
            <ChevronDownIcon className={open ? 'rotate-180 transform' : ''} />
          </Popover.Button>
          <Popover.Panel className="">
            <a href="/insights">Insights</a>
            <a href="/automations">Automations</a>
            <a href="/reports">Reports</a>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}