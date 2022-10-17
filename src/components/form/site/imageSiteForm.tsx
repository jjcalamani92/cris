import { useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { graphQLClient, UPDATE_PRODUCT_IMAGE } from '../../../../graphql';
import { DataProduct, ImageProduct, Product, Site } from '../../../../interfaces';



import { getQuery, uuidv3 } from '../../../../utils/function';
import { useUpdateProductImage, useUpdateSiteImage } from '../../../hooks';

interface FormValues {
  id: string
  input: {
    src: string
    alt: string
  }
  type: string
  uid: string
  logo: {
    src: string
    alt: string
  }
  site: {
    src: string
    alt: string
  }
  icon: {
    src: string
    alt: string
  }
}
interface ImageSiteForm {
  toggle: () => void
  setLeft: () => void
  site?: Site
  image?: ImageProduct[]
}
export const ImageSiteForm: FC<ImageSiteForm> = ({ toggle, setLeft, site, image }) => {
  const { data: session } = useSession()
  // console.log('data', site?.data.icon);
  const [type, setType] = useState('')

  const { asPath, replace } = useRouter()
  const query = getQuery(asPath)
  // console.log(query.at(-2));
  // "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormValues>({ defaultValues: { logo:  {src: site?.data.logo?.src} , site: { src: site?.data.image?.src }, icon: { src: site?.data.icon?.src } } });
  // console.log(getValues('icon')?.src.split('/').at(-1)?.split('.').at(-2));
  // console.log(getValues('logo')?.src.split('/').at(-1)?.split('.').at(-2));
  // console.log(getValues('site')?.src.split('/').at(-1)?.split('.').at(-2));
  
  // const {mutate: updateProductImage} = useUpdateProductImage()

  const { mutate: updateSiteImage } = useUpdateSiteImage()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

  };
  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {

    if (!target.files || target.files.length === 0) {
      return;
    }
    try {
      for (const file of target.files) {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('parentId', query[2])
        formData.append('siteId', query[2])
        formData.append('type', "site")

        
        
        

        
        
        const { data } = await axios.post(`${process.env.API_URL}/upload/file`, formData)
        
        setValue('input', { src: data.url, alt: `description image of the ${site?.data.name}` }, { shouldValidate: true })
        updateSiteImage({ id: site?._id!, input: getValues('input'), type: type, uid: session?.user.sid! })
        if (type === 'logo') {
          if (getValues('logo')) {
            let logo = getValues('logo').src.split('/').at(-1)?.split('.').at(-2)
            await axios.post(`${process.env.API_URL}/upload/delete`, {name: logo, type: "site"} )
          }
          setValue('logo', { src: data.url, alt: `description image of the ${site?.data.name}` }, { shouldValidate: true })
        } else if (type === "site") {
          if (getValues('site').src) {
            let image = getValues('site').src.split('/').at(-1)?.split('.').at(-2)
            await axios.post(`${process.env.API_URL}/upload/delete`, {name: image, type: "site"} )
          }
          setValue('site', { src: data.url, alt: `description image of the ${site?.data.name}` }, { shouldValidate: true })
        } else {
          if (getValues('icon').src) {
            let icon = getValues('icon').src.split('/').at(-1)?.split('.').at(-2)
            await axios.post(`${process.env.API_URL}/upload/delete`, {name: icon, type: "site"} )
          }
          setValue('icon', { src: data.url, alt: `description image of the ${site?.data.name}` }, { shouldValidate: true })

        }


      }
    } catch (error) {
      const err = error as AxiosError
      const { message } = err.response?.data as {message: string}
      // console.log(message)
      // console.log(error.response.data.message);
      
    }
  }
  const cancelButtonRef = useRef(null)

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            {/* <div className="my-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Update Images
              </h3>
            </div> */}
            <div className='pb-3'>
              <h2 className="label-form">Icon</h2>
              <div className="mt-1 flex items-center">
                <span className="inline-block h-28 w-28 overflow-hidden rounded-full bg-gray-100 border">
                  <img className="p-2 bg-white object-cover object-center h-28 w-28 text-gray-300" src={getValues('icon.src') || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"} alt={""} />
                  {/* <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg> */}
                </span>
                <label htmlFor="file-upload" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setType('icon')}
                >Change
                </label>
                <input
                  id="file-upload" name="file-upload" accept=".png, .jpeg, .jpg, .webp" type="file"
                  hidden
                  onChange={onFileSelected}


                />
              </div>
            </div>
            <div className='pb-3'>
              <h2 className="label-form">Logo
              </h2>
              <div className="mt-1 flex items-center">
                <span className="inline-block  rounded-sm bg-gray-100 border border-indigo-90">
                  <img className="object-contain bg-white h-32 w-96" src={getValues('logo.src') || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"} alt={""} />

                  {/* <img className='object-cover h-48 w-96' src="https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg" alt="" /> */}
                </span>
                <label htmlFor="file-upload" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setType('logo')}
                >Change
                </label>
                <input
                  id="file-upload" name="file-upload" accept=".png, .jpeg, .jpg, .webp" type="file"

                  hidden

                  onChange={onFileSelected}

                />
              </div>
            </div>
            <div className='pb-3'>
              <h2 className="label-form">Image
              </h2>
              <div className="mt-1 flex items-center">
                <span className="inline-block  rounded-sm bg-gray-100 border border-indigo-90">
                  <img className="object-cover bg-white  h-32 w-32" src={getValues('site.src') || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"} alt={""} />
                </span>
                <label htmlFor="file-upload" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setType('site')}

                >Change
                </label>
                <input
                  id="file-upload" name="file-upload" accept=".png, .jpeg, .jpg, .webp" type="file"

                  hidden

                  onChange={onFileSelected}
                />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-2'>



            </div>
          </div>
        </div>
        <div className="group-button-form">

          
          <button
            className="btn-default"
            type="button"
            onClick={setLeft}
            ref={cancelButtonRef}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}