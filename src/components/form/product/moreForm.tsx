import { RadioGroup } from '@headlessui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { createRef, FC, useRef, useState } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';

import { classNames, getQuery } from '../../../../utils/function';
const product = {
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
    { name: 'Red', class: 'bg-red-600', selectedClass: 'ring-gray-900' },
    { name: 'Pink', class: 'bg-pink-600', selectedClass: 'ring-gray-900' },
    { name: 'Pinkw', class: 'bg-yellow-600', selectedClass: 'ring-gray-900' },
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

interface FormValues {
  name: string;
  mark: string;
  featured: string;
  description: string;
  price: number;
  discountPrice: number;
  inStock: number;
};
interface MoreForm {
  setOpenMCD: React.Dispatch<React.SetStateAction<boolean>>

}
export const MoreForm: FC<MoreForm> = ({ setOpenMCD }) => {

  const { asPath, replace } = useRouter()
  const query = getQuery(asPath)

  const { register, handleSubmit } = useForm<FormValues>({ });

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // const updateForm ={...data, price: Number(data.price), discountPrice: Number(data.discountPrice), inStock: Number(data.inStock) }
    // const form = {...updateForm, site: query[2], page:}

    // if (product) {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Updated Page',
    //     showConfirmButton: false,
    //     timer: 1000
    //   }) 
    //   await graphQLClient.request(UPDATE_PRODUCT, {_id: product._id, input: updateForm, type: product.type})
    //   queryClient.invalidateQueries([`find-product`]);

    // } else {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Created Product',
    //     showConfirmButton: false,
    //     timer: 500
    //   })
    //   await graphQLClient.request(CREATE_PRODUCT, { input: form, type:type})
    //   queryClient.invalidateQueries([`find-page2-by-site`]);
    // }

    // // createproduct({ type: type, input: form })
    // setOpenMCD(false)

    // mutate(form)
  };
  const cancelButtonRef = useRef(null)
  const ref = createRef();

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="my-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                More Options
              </h3>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
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

              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
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
            </div>
            
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-6 sm:flex sm:flex-row-reverse sm:px-6">
        <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          // onClick={() => setOpen(false)}
          >
            {'Update'}
          </button>
          <button
            className="btn-default"
            onClick={() => setOpenMCD(false)}
            ref={cancelButtonRef}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}