import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import { classNames, getQuery, typeSite } from '../../../../utils';
import { useSession } from 'next-auth/react';

import Swal from 'sweetalert2';
import { Site } from '../../../../interfaces';
import { useCreateSite, useUpdateSite } from '../../../hooks';

interface SiteForm {
  toggle: () => void,
  setLeft: () => void,
  site?: Site
}
interface FormValues {
  name: string;
  domain: string;
  description: string;
  type: string;
  client: string;
};
export const SiteForm: FC<SiteForm> = ({ toggle, site, setLeft }) => {
  const { asPath, replace } = useRouter()
  const query = getQuery(asPath)
  // console.log(site);

  const { mutate: createSite } = useCreateSite()
  const { mutate: updateSite } = useUpdateSite()
  const { data: session } = useSession()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>({ mode: "onChange", defaultValues: site ? { name: site?.data.name, domain: site?.url, description: site?.data.description, type: site?.data.type, client: site.client } : {name: "", domain: ".vercel.app", description: "site description", type: "ecommerce", client: "Jesus Calamani"} });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const form = { ...data, name: data.name.trim(), domain: data.domain.trim(), description: data.description.trim(), change: "change", uid: session?.user.sid! }
    const {client, ...updateForm} = form;
    const createForm = { ...form, client: data.client?.trim() }
// console.log('created', createForm);

    if (site) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Site',
        showConfirmButton: false,
        timer: 1000
      })
      // console.log(updateForm, site._id);
      
      updateSite({ id: site._id, input: updateForm })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Created Site',
        showConfirmButton: false,
        timer: 1000
      }),
        createSite(createForm)
    }
    toggle()
  }

  const cancelButtonRef = useRef(null)
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} method="POST" className='h-full'>
        <div className=" sm:rounded-md px-2">
          <div className="p-2 ">
            {/* <div className="text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {
                  site ? 'Update Site' : 'New Site'
                }
              </h3>
            </div> */}
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  className="label-form">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("name", {
                    required: 'Name required!!',
                    minLength: {value: 2, message: 'min 2 characters'}
                  })}
                  
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                  
                />
                {errors.name && <p className='text-red-600 text-sm'>This is required!!</p>}
              </div>
              <div className="col-span-6">
                <label
                  // htmlFor="company-website" 
                  className="label-form">
                  Website
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                    http://
                  </span>
                  <input
                    type="text"
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    placeholder="example.com"
                    {...register("domain")}

                  />
                </div>
              </div>
              <div className="col-span-6">
                <label className="label-form">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    
                    {...register("description")}
                  />
                </div>
              </div>
              
              {
                query.length === 2 &&
                <div className="col-span-6">
                  <label
                    className="label-form">
                    Client name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    {...register("client")}
                  />
                </div>
              }

              <div className="col-span-6">
                <fieldset>
                  <legend className="label-form">Type </legend>
                  {/* <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p> */}
                  <div className=" grid grid-cols-2 ">
                    {
                      typeSite.map(data => (
                        <div className="flex items-center my-2" key={data.label}>
                          <input
                            type="radio"
                            value={data.value}
                            // onBlur={onBlur} 
                            {...register('type')}
                            onChange={({ target }) => setValue('type', target.value, { shouldValidate: true })}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          // {...register("type", {required:true, onChange: (e) => {setValue("type", e.target.value, {shouldValidate: true});}, onBlur: (e) => {},})}
                          />
                          {/* {errors.type && <p>This is required</p>} */}
                          <label className="ml-3 block text-sm text-gray-500">
                            {data.label}
                          </label>
                        </div>)
                      )
                    }

                  </div>
                </fieldset>
              </div>


            </div>
            
          </div>

        </div>
        <div className=" group-button-form">
          <button
            type="submit"
            className="btn-primary "
          >
            {site ? 'Update' : 'Created'}
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