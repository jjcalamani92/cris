import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const plans = ['Statup', 'Business', 'Enterprise']

export function RadioGroupComponent02() {
  const [plan, setPlan] = useState(plans[0])

  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      {plans.map((plan) => (
        /* Use the `active` state to conditionally style the active option. */
        /* Use the `checked` state to conditionally style the checked option. */
        <RadioGroup.Option key={plan} value={plan} as={Fragment}>
          {({ active, checked }) => (
            <li
              className={`flex ${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
            >
              {checked && <CheckIcon width={20} height={20} />}
              {plan}
            </li>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}