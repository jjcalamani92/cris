/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { FC, Fragment, useMemo, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, BuildingStorefrontIcon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames, getPathByLayout } from '../../../utils'
import { useToggle } from 'ahooks'
import { useRouter } from 'next/router';
import { useSiteByLayout } from '../../hooks'

// const categories = [
//   {
//     id: 'menu',
//     name: 'Menú',
//     children: [
//       {
//         name: 'Pollo', href: '/dashboard/projects/6324d2d5132d462bc1c57b55/woman/tops', items: [
//           {
//             name: 'Balde copacabana 12 presas',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-12.jpg',
//             imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//           },
//           {
//             name: 'Balde copacabana 8 presas',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-8.jpg',
//             imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//           },
//           {
//             name: 'Balde alitas',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-alitas.jpg',
//             imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//           },
//           {
//             name: 'Combo especial',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_comboespecial.jpg',
//             imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//           },
//           {
//             name: 'Combo Trío',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_trio.jpg',
//             imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//           },]
//       },
//       {
//         name: 'Hamburguesa', href: '#', items: [
//           {
//             name: 'Balde copacabana 12 presas',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-12.jpg',
//             imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//           },
//           {
//             name: 'Balde copacabana 8 presas',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-8.jpg',
//             imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//           },
//           {
//             name: 'Combo especial',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_comboespecial.jpg',
//             imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//           },
//           {
//             name: 'Balde alitas',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-alitas.jpg',
//             imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//           },
//           {
//             name: 'Combo Trío',
//             href: '#',
//             imageSrc: 'http://www.polloscopacabana.com/images/products/i_trio.jpg',
//             imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//           },]
//       },
//       { name: 'Ensaladas', href: '#', items: [] },
//       { name: 'Extras', href: '#', items: [] },
//       { name: 'Cafetería y pastelería', href: '#', items: [] }
//     ],

//   },
// ]

const navigation = {
  categories: [
    {
      id: 'menu',
      name: 'Menú',
      featured: [
        {
          name: 'Balde copacabana 12 presas',
          href: '#',
          imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-12.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Balde copacabana 8 presas',
          href: '#',
          imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-8.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Balde copacabana 12 presas',
          href: '#',
          imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-12.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Balde copacabana 8 presas',
          href: '#',
          imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-8.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Balde alitas',
          href: '#',
          imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-alitas.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Combo especial',
          href: '#',
          imageSrc: 'http://www.polloscopacabana.com/images/products/i_comboespecial.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Combo Trío',
          href: '#',
          imageSrc: 'http://www.polloscopacabana.com/images/products/i_trio.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },

      ],
      categories: [
        {
          name: 'Pollo', href: '/dashboard/projects/6324d2d5132d462bc1c57b55/woman/tops', items: [{
            name: 'Balde copacabana 12 presas',
            href: '#',
            imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-12.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Balde copacabana 8 presas',
            href: '#',
            imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-8.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Balde copacabana 12 presas',
            href: '#',
            imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-12.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Balde copacabana 8 presas',
            href: '#',
            imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-8.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Balde alitas',
            href: '#',
            imageSrc: 'http://www.polloscopacabana.com/images/products/i_balde-alitas.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
          {
            name: 'Combo especial',
            href: '#',
            imageSrc: 'http://www.polloscopacabana.com/images/products/i_comboespecial.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
          {
            name: 'Combo Trío',
            href: '#',
            imageSrc: 'http://www.polloscopacabana.com/images/products/i_trio.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },]
        },
        { name: 'Hamburguesa', href: '#', items: [] },
        { name: 'Ensaladas', href: '#', items: [] },
        { name: 'Extras', href: '#', items: [] },
        { name: 'Cafetería y pastelería', href: '#', items: [] }
      ],
      // sections: [
      //   {
      //     id: 'menu',
      //     name: 'Menú',
      //     items: [
      //       { name: 'Pollo', href: '/dashboard/projects/6324d2d5132d462bc1c57b55/woman/tops' },
      //       { name: 'Hamburguesa', href: '#' },
      //       { name: 'Ensaladas', href: '#' },
      //       { name: 'Extras', href: '#' },
      //       { name: 'Cafetería y pastelería', href: '#' }
      //     ],
      //   },
      //   {
      //     id: 'pollo',
      //     name: 'Pollo',
      //     items: []
      //   }

      // ],
    },

  ],
  pages: [
  ],
}

interface HeaderFood {
  toggleShoppingCarts: () => void
}

export const HeaderFood: FC<HeaderFood> = ({ toggleShoppingCarts }) => {
  const {asPath} = useRouter()
  // console.log(item);
  
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const selectHandle = (id: string) => {
    console.log('Click', id)
  }
  const { data: site } = useSiteByLayout(asPath);
  // console.log(site);

  const list = useMemo(() => site,
  [site])
  const categories = getPathByLayout(list!)
  const [item, setItem] = useState(categories[1].children[0].items)

  console.log(getPathByLayout(site!));
  
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={state} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={toggle}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={setLeft}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {categories.map((data, i) => data.name !=='Home' && (
                        <Tab
                          key={i}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-red-600 border-red-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {data.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {categories.map((category, i) => (
                      <Tab.Panel key={i} className="space-y-6 px-4 pt-10 pb-8">
                        <ul
                          role="list"
                          // aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className=" grid grid-cols-2 gap-3"
                        >
                          {category.children.map((data, i) =>  (
                            <li key={i} className="flow-root" onClick={() => setItem(data.items)}>
                              <div className="-m-2 block p-2 text-gray-500 tracking-wide truncate">
                                {data.name}
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="grid grid-cols-2 gap-3">
                          {item.map((data, i) => (
                            <div key={i} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={data.imageSrc} alt={data.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={data.href} className="mt-2 block font-medium text-gray-900 tracking-wide truncate">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {data.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>

                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div> */}

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-red-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over Bs. 100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={setRight}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img src={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1665504775/criscrm/63459587474708532c2dd798/2022-10-11T16:12:55.004Z.jpg"} alt={"item.imageAlt"} className={"h-16 w-auto"} />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {categories.map((data) => data.name !=='Home' &&  (
                    <Popover key={data.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-red-600 text-red-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {data.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-5 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-6 col-span-4 gap-6">
                                      {item.map((item, i) => (
                                        <div key={i} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Make an order
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-1 gap-y-10 gap-x-8 text-sm">

                                      <ul
                                        role="list"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {data.children.map((data, i) => (
                                          <li key={i} className="flex cursor-pointer">
                                            <div onClick={() => setItem(data.items)} className="hover:text-gray-800">
                                              {data.name}
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <div className="group -m-2 flex items-center p-2"
                    onClick={toggleShoppingCarts}>
                    <ShoppingCartIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
