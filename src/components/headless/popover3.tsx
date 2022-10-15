import { Popover, Transition } from '@headlessui/react'
export const Popover3 = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button>Solutions</Popover.Button>

          {/* Use the `Transition` component. */}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* Mark this component as `static` */}
            <Popover.Panel static>
              <div className="grid grid-cols-1">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}