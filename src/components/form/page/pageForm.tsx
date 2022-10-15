
import { useRouter } from 'next/router';
import { createRef, FC, Fragment, useRef, useState } from 'react';
import { useForm, Resolver, SubmitHandler, PathString } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Page } from '../../../../interfaces';
import { getQuery, typePageEcommerce, typePageEducation, typePageFood, typePageFoodCategory, typePageMarketing, typePagePortfolio } from '../../../../utils';
import { useCreatePage0, useCreatePage1, useCreatePage2, useSite, useUpdatePage0, useUpdatePage2 } from '../../../hooks';
import { useUpdatePage1 } from '../../../hooks/page/page1/useUpdatePage1';


interface PageForm {
  toggle: () => void
  setLeft: () => void
  uid?: string
  page?: Page
  type?: string
}

export interface Page0 {
  title: string;
  description: string;
  site: string;
  parent: string;
  type: string;

}

interface FormValues {
  title: string;
  description: string;
  type: string;
};

export const PageForm: FC<PageForm> = ({ toggle, setLeft, uid, page, type }) => {
  const { asPath, replace } = useRouter()
  const query = getQuery(asPath)
  const { data: site } = useSite(asPath)
  console.log(site);
  
  const { mutate: createPage0 } = useCreatePage0()
  const { mutate: updatePage0 } = useUpdatePage0()
  const { mutate: createPage1 } = useCreatePage1()
  const { mutate: updatePage1 } = useUpdatePage1()
  const { mutate: createPage2 } = useCreatePage2()
  const { mutate: updatePage2 } = useUpdatePage2()
  const [radio, setRadio] = useState('')
// console.log(type);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({ mode: "onChange", defaultValues: page ? { title: page?.data.seo.title, description: page?.data.seo.description, type: page?.data.type } : { title: "", description: "page description", type: '' } });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const form = { ...data, title: data.title.trim(), description: data.description.trim(), site: query[2], parent: uid! }
    const formUpdate = { ...data, title: data.title.trim(), description: data.description.trim(), site: page?.site!, parent: page?.parent! }


    if (page) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Page',
        showConfirmButton: false,
        timer: 1000
      })
      if (query.length === 4 && query.at(-1)?.split('=')[0] === 'page1') {
        updatePage1({ id: page._id, input: formUpdate })
      } else if (query.length === 4 && query.at(-1)?.split('=')[0] === 'page0') {
        updatePage0({ id: page._id, input: formUpdate })
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Created Page',
        showConfirmButton: false,
        timer: 1000
      })
      if (query.length === 4 && query.at(-1)?.split('=')[0] === 'page1') {
        createPage2(form)

      } else if (query.length === 4 && query.at(-1)?.split('=')[0] === 'page0') {
        createPage1(form)

      } else if (query.length === 3) {
        createPage0(form)
      }
    }
    toggle()
  }
  const cancelButtonRef = useRef(null)
  const ref = createRef();

  // const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-5">
            
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  className="label-form">
                  Title
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="input-form"
                  {...register("title", {
                    required: 'Title required!!',
                    minLength: { value: 2, message: 'min 2 characters' }
                  })}

                />
                {errors.title && <p className='text-red-600 text-sm'>This is required!!</p>}
              </div>

              <div className="col-span-6">
                <label className="label-form">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={3}
                    className="input-form"

                    {...register("description", {
                      required: 'Title required!!',
                      minLength: { value: 2, message: 'min 2 characters' }
                    })}
                  />
                  {errors.description && <p className='text-red-600 text-sm'>This is required!!</p>}

                </div>

              </div>


              <div className="col-span-6">
                <h2 className="contents text-sm font-medium text-gray-700">Type </h2>
                <div className="grid grid-cols-2">
                  {
                    page ?
                      <>
                        {
                          typePageEcommerce.map(data => data.value).includes(type!) &&
                          (typePageEcommerce.map(data => (
                            <div className="flex items-center my-2" key={data.label}>
                              <input
                                type="radio"
                                value={data.value}
                                {...register('type', { required: true })}
                                name="type"
                                id={data.value}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}


                              />
                              <label className="ml-3 block text-sm text-gray-500">
                                {data.label}
                              </label>
                              {/* {errors.type && <p>This is required</p>} */}
                            </div>)
                          )

                          )
                        }
                        
                        {
                          site?.data.dataBase.map(data => data.value).includes(page?.data.type!) &&
                          (site?.data.dataBase.map(data => (
                            <div className="flex items-center my-2" key={data.label}>
                              <input
                                type="radio"
                                value={data.value}
                                {...register('type', { required: true })}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}


                              />
                              <label className="ml-3 block text-sm text-gray-700">
                                {data.label}
                              </label>
                            </div>)
                          )
                          )

                        }
                        {
                          type === 'article' &&
                          (typePagePortfolio.map(data => (
                            <div className="flex items-center my-2" key={data.label}>
                              <input
                                type="radio"
                                value={data.value}
                                {...register('type', { required: true })}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}


                              />
                              <label className="ml-3 block text-sm text-gray-700">
                                {data.label}
                              </label>
                            </div>)
                          )
                          )
                        }
                        {
                          type === 'category-food' &&
                          <>
                            {typePageFood.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  value={data.value}
                                  // onBlur={onBlur} 
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}
                                // onChange={() => setRadio(data.value)}

                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}

                          </>
                        }
                        
                        {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}
                      </>
                      :
                      <>
                        {
                          type === 'ecommerce' &&
                          <>
                            {typePageEcommerce.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  value={data.value}
                                  // onBlur={onBlur} 
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}
                                // onChange={() => setRadio(data.value)}

                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}

                          </>
                        }
                        {
                          type === 'food' &&
                          <>
                            {typePageFood.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  value={data.value}
                                  // onBlur={onBlur} 
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}
                                // onChange={() => setRadio(data.value)}

                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}

                          </>
                        }
                        {
                          type === 'education' &&
                          <>
                            {typePageEducation.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}

                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}


                          </>
                        }
                        {
                          type === 'portfolio' &&
                          <>
                            {typePagePortfolio.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}

                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}


                          </>
                        }
                        {
                          type === 'marketing' &&
                          <>
                            {typePageMarketing.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}

                                />
                                <label className="ml-3 label-form">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}


                          </>
                        }
                        {
                          type === 'page' &&
                          <>
                            {typePageEcommerce.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}

                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}


                          </>
                        }
                        {
                          type === 'category-food' && 
                          <>
                            {typePageFoodCategory.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={() => setRadio(data.value)}
                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}

                          </>
                        }

                        {
                          type === 'category' &&
                          <>
                            {site?.data.dataBase.map(data => (
                              <div className="flex items-center my-2" key={data.label}>
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={() => setRadio(data.value)}
                                />
                                <label className="ml-3 block text-sm text-gray-500">
                                  {data.label}
                                </label>
                              </div>)
                            )}
                            {errors.type && <p className='text-red-600 text-sm'>This is required!!</p>}

                          </>
                        }

                      </>
                  }

                </div>
                <fieldset>

                </fieldset>
              </div>
            </div>
          </div>

        </div>
        <div className="group-button-form">
          <button
            type="submit"
            className="btn-primary "
            >
            {page ? 'Update' : 'Created'}
          </button>
          <button
            type="button"
            className="btn-default"
            onClick={setLeft}
            ref={cancelButtonRef}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}