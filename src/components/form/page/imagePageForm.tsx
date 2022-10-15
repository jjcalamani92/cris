import { useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { graphQLClient, UPDATE_PRODUCT_IMAGE } from '../../../../graphql';
import { DataProduct, ImageProduct, Page, Product, Site } from '../../../../interfaces';



import { getQuery, uuidv3 } from '../../../../utils/function';
import { useUpdatePage1Image, useUpdatePage2Image, useUpdatePage3Image, useUpdateProductImage, useUpdateSiteImage } from '../../../hooks';
import { useUpdatePage0Image } from '../../../hooks/page/page0/useUpdatePage0Image';

interface FormValues {

  page: {
    src: string
    alt: string
  }
  
}
interface ImagePageForm {
  toggle: () => void
  setLeft: () => void
  page?: Page
}
export const ImagePageForm: FC<ImagePageForm> = ({ toggle, setLeft, page }) => {

  
  const { data: session } = useSession()
  const [type, setType] = useState('')

  const { asPath, replace } = useRouter()
  const query = getQuery(asPath)
  // console.log(page);
  
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormValues>({ defaultValues: { page: { src: page?.data.seo.image?.src } } });

  const { mutate: updateImagePage0 } = useUpdatePage0Image()
  const { mutate: updateImagePage1 } = useUpdatePage1Image()
  const { mutate: updateImagePage2 } = useUpdatePage2Image()
  const { mutate: updateImagePage3 } = useUpdatePage3Image()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

  };
  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {

    setLeft()
    if (!target.files || target.files.length === 0) {
      return;
    }
    try {
      for (const file of target.files) {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('parentId', page?._id!)
        formData.append('siteId', query[2])
        formData.append('type', "page")
        if (getValues('page').src) {
          let image = getValues('page').src.split('/').at(-1)?.split('.').at(-2)
          await axios.post(`${process.env.API_URL}/upload/delete`, {name: image, type: "page"} )
        }
        const { data } = await axios.post(`${process.env.API_URL}/upload/file`, formData)
         if (type === "page") {
          setValue('page', { src: data.url, alt: `description image of the ${page?.data.seo.title}` }, { shouldValidate: true })
          if (query[3].split('=')[0] === 'page0') {
            updateImagePage0({ id: page?._id!, input: getValues('page'), uid: session?.user.sid! })
          } else if (query[3].split('=')[0] === 'page1') {
            updateImagePage1({ id: page?._id!, input: getValues('page'), uid: session?.user.sid! })
            
          } else if (query[3].split('=')[0] === 'page2') {
            updateImagePage2({ id: page?._id!, input: getValues('page'), uid: session?.user.sid! })
            
          } else if (query[3].split('=')[0] === 'page3') {
            updateImagePage3({ id: page?._id!, input: getValues('page'), uid: session?.user.sid! })
            
          }
        } 


      }
    } catch (error) {
      const err = error as AxiosError
      const { message } = err.response?.data as {message: string}
      console.log(message)
      Swal.fire({
      
        icon: 'error',
        title: 'Oops...',
        text: "message",
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
  const cancelButtonRef = useRef(null)

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className='pb-3'>
              <h2 className="label-form">Image
              </h2>
              <div className="mt-1 flex items-center">
                <span className="inline-block  rounded-sm bg-gray-100 border border-indigo-90">
                  <img className="object-cover bg-white h-32 w-32" src={getValues('page.src') || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"} alt={""} />
                </span>
                <label htmlFor="file-upload" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setType('page')}

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