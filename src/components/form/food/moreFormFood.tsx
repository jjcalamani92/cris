import { RadioGroup } from '@headlessui/react';
import { DocumentTextIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useQueryClient } from '@tanstack/react-query';
import { useToggle } from 'ahooks';
import { useRouter } from 'next/router';
import { createRef, FC, useRef, useState } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';

import { classNames, getQuery } from '../../../../utils/function';
import { SlideOvers0 } from '../../tailwindComponents';
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
interface MoreFormFood {
  toggleMF: () => void
  setLeftMF: () => void

}
export const MoreFormFood: FC<MoreFormFood> = ({ toggleMF, setLeftMF }) => {
	const [state, { toggle, setLeft, setRight }] = useToggle();

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
    <div className=" ">
      <SlideOvers0  state={state} toggle={toggle} setLeft={setLeft} />
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-5 pb-5">
            <div className="grid grid-cols-6 gap-6">
              {/* <h3 className="text-lg font-medium leading-6 text-gray-900">
                More Options
              </h3> */}
              <div className="col-span-6">
                <label className="label-form flex">
                  Prescription 
                  <DocumentTextIcon className="h-5 w-5 ml-2" aria-hidden="true" 
                  onClick={toggle}
                  />
                </label>
                <button className="btn-default " onClick={() => console.log('click')}>
                </button>
                <div className="mt-1">
                  <textarea
                    rows={5}
                    className="input-form"
                    {...register("description", {
                      required: "Description required!!"
                    })}
                  />
                  {/* {errors.description && <p className='text-red-600 text-sm'>This is required!!</p>} */}
                </div>
              </div>
              <div className="col-span-6">
                <label className="label-form">
                Preparation
                </label>
                <div className="mt-1">
                  <textarea
                    rows={5}
                    className="input-form"
                    {...register("description", {
                      required: "Description required!!"
                    })}
                  />
                  {/* {errors.description && <p className='text-red-600 text-sm'>This is required!!</p>} */}
                </div>
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
            onClick={setLeftMF}
            ref={cancelButtonRef}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}