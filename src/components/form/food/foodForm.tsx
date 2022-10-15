import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { createRef, FC, useRef } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Food, Product } from '../../../../interfaces';
import { getQuery } from '../../../../utils';
import { useCreateFood, useCreateProduct, useUpdateFood, useUpdateProduct } from '../../../hooks';


interface FormValues {
  name: string;
  // mark: string;
  promotion: string;
  description: string;
  price: number;
  discountPrice: number;
  // inStock: number;
};
interface FoodForm {
  toggle: () => void
  setLeft: () => void
  uid?: string
  type?: string
  meal?: Food
}
export const FoodForm: FC<FoodForm> = ({ toggle, setLeft, uid, type, meal }) => {
  const { data: session } = useSession()

  const { asPath } = useRouter()
  const query = getQuery(asPath)
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>({ defaultValues: meal ? { name: meal.data.name, promotion: meal.data.promotion.href, description: meal.data.description, price: meal.data.price, discountPrice: meal.data.discountPrice } : { name: "", promotion: 'none', description: 'meal description', price: 0, discountPrice: 0} });

  const { mutate: createFood } = useCreateFood(uid!)
  const { mutate: updateFood } = useUpdateFood()
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const updateForm = { ...data, name: data.name.trim(), price: Number(data.price), discountPrice: Number(data.discountPrice), uid: session?.user.sid!, change: "create meal" }
    const form = { ...updateForm, site: query[2], parent: uid! }
    // console.log(form);
    
    if (meal) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Food',
        showConfirmButton: false,
        timer: 1000
      })
      updateFood({ id: meal._id, input: updateForm, type: meal.type })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Created Food',
        showConfirmButton: false,
        timer: 500
      })
      createFood({ input: form, type: type! })
    }
    toggle()
  };
  const cancelButtonRef = useRef(null)
  const ref = createRef();

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-5 pb-5">
            
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  className="label-form">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="input-form"
                  {...register("name", {
                    required: 'Name required!!',
                    minLength: { value: 2, message: 'min 2 characters' }
                  })}
                />
                {errors.name && <p className='text-red-600 text-sm'>This is required!!</p>}
              </div>
              <div className="col-span-6">
                <label className="label-form">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={5}
                    className="input-form"
                    {...register("description", {
                      required: "Description required!!"
                    })}
                  />
                  {errors.description && <p className='text-red-600 text-sm'>This is required!!</p>}
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label className="label-form">
                  Price [Bs]
                </label>
                <input
                  type="number"
                  className="input-form"
                  {...register("price", { required: "Price required!!", min: 0 })}
                />
                {errors.price && <p className='text-red-600 text-sm'>This is required!!</p>}

              </div>
              <div className="col-span-3 sm:col-span-2">
                <label className="label-form">
                  Discount price [Bs]
                </label>
                <input
                  type="number"
                  className="input-form"
                  {...register("discountPrice", { required: "Discount price required!!", min: 0 })}
                />
                {errors.discountPrice && <p className='text-red-600 text-sm'>This is required!!</p>}
              </div>
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="country" className="label-form">
                  Featured
                </label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                  {...register("promotion", {
                    required: "Featured required!!"
                  })}
                >
                  <option value="none" >None</option>
                  <option value="dos-por-uno" >Dos por Uno</option>
                  <option value="descuentos-de-julio" >Descuentos de Julio</option>
                </select>
                {errors.promotion && <p className='text-red-600 text-sm'>This is required!!</p>}
              </div>
              {/* <div className="col-span-3 sm:col-span-2">
                <label className="label-form">
                  Stock [#]
                </label>
                <input
                  type="number"
                  className="input-form"
                  {...register("inStock", { required: "Stock required!!", min: 1 })}
                />
                {errors.inStock && <p className='text-red-600 text-sm'>This is required!!</p>}
              </div> */}
            </div>
          </div>

        </div>
        <div className="group-button-form">
          <button
            type="submit"
            className="btn-primary "
          >
            {meal ? 'Update' : 'Created'}
          </button>
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