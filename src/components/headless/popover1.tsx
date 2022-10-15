import { Popover } from '@headlessui/react'

export const Popover1 = () => {
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-1">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src="https://headlessui.com/react/popover/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}