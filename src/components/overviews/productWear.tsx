
import { FC, useState } from 'react'

import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { classNames, getQuery } from '../../../utils/function'


import { HeadingDashboard } from '../heading'
import { SwiperNavigation } from '../swiper'


import { MarkdownComponent } from '../utils';
import { Product } from '../../../interfaces';


const code = `### Especificaciones
**Genero**: Hombre

**Actividad**: Viaje

**Edad**: 18 a 25 años

**Capacidad**: 33.34 [L]

**Material Exterior**: Policloruro de vinilo 100%

**Peso**: 0.837 [Kg]

**Color**: Negro

**Medidas**: 39x45x19 [cm]

**Collecion**: Independientes
`
const products = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

interface ProductWear {
  product: Product
}

export const ProductWear:FC<ProductWear> = ({product}) => {
  const [selectedColor, setSelectedColor] = useState(products.colors[0])
  const [selectedSize, setSelectedSize] = useState(products.sizes[2])
  return (
    <>
      <HeadingDashboard title="Detail Products" product={product} />
      <div className="bg-white">
        <div className="py-6 sm:py-10">

          <div className="max-w-2xl mx-auto py-0 px-4 sm:px-0 lg:max-w-7xl lg:py-0  grid grid-cols-1 lg:gap-6 lg:grid-cols-5">
            {/* Image gallery */}
            <div className="col-span-3" >
              <SwiperNavigation image={product?.data.image!} />
            </div>
            <div className="col-span-2 " >
              <div className="mt-3 lg:mt-0 mb-3">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.data.name}</h1>
              </div>
              <div className='mb-3'>
                {/* <h2 className="text-xl font-medium text-gray-900">Description</h2> */}
                <div className="space-y-6">
                  <MarkdownComponent code={product?.data.description!} />
                  {/* <p className="text-base text-gray-900">{product?.data.description}</p> */}
                </div>
              </div>
              <div className=" mb-3">
                <p className="text-3xl tracking-tight text-gray-900">Bs. {product?.data.price},00 </p>
              </div>

              <div className="mb-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
              

              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                {/* <p className="text-3xl tracking-tight text-gray-900">Bs. {product?.data.price},00 </p> */}

                {/* Reviews */}



                <form className="">
                  {/* Colors */}
                  
                  <div className='mb-3'>
                    <h3 className="text-xl font-medium text-gray-900">Color</h3>

                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                      <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {products.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {' '}
                              {color.name}{' '}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                'h-8 w-8 border border-black border-opacity-10 rounded-full'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {/* Sizes */}
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium text-gray-900">Size</h3>
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Size guide
                      </a>
                    </div>

                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                      <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {products.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                active ? 'ring-2 ring-indigo-500' : '',
                                'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? 'border' : 'border-2',
                                      checked ? 'border-indigo-500' : 'border-transparent',
                                      'pointer-events-none absolute -inset-px rounded-md'
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <button
                    type="submit"
                    className="my-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>
                {/* Details */}
                <MarkdownComponent code={code} />
                
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}
