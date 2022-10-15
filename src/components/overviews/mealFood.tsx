import { FC, useState } from 'react'

import { HeadingDashboard } from '../heading'
import { SwiperNavigation } from '../swiper'

import { MarkdownComponent } from '../utils';
import { Food, Product } from '../../../interfaces';

const code0 = `### El Combo Paceñicimo contiene...:
- Un sándwich a elegir*
- Patatas fritas o Deluxe o Ensalada de la Huerta.
- Una botella de 50 cl de agua Nestlé Aquarel, un refresco de 40 cl (Coca-Cola, Coca-Cola Zero, Coca-Cola Light, Sprite, Lipton Ice Tea, Trina Limón), una cerveza Mahou de 30cl o una cerveza sin alcohol Mahou de 30cl
- Por un suplemento añade las patatas Top Fries a tu menú.

Menú también disponible en tamaño grande, con bebida y patatas grandes. Por solo 70 céntimos más.

*El sándwich puede variar dependiendo de la oferta de cada restaurante
`
interface MealFood {
  meal: Food
}

export const MealFood: FC<MealFood> = ({ meal }) => {
  
  return (
    <>
      <HeadingDashboard title="Detail Product" meal={meal} />
      <div className="bg-white">
        <div className="py-6 sm:py-10">

          <div className="max-w-2xl mx-auto py-0 px-4 sm:px-0 lg:max-w-7xl lg:py-0  grid grid-cols-1 lg:gap-6 lg:grid-cols-5">
            {/* Image gallery */}
            <div className="col-span-3" >
              <SwiperNavigation image={meal?.data.image!} />
            </div>
            <div className="col-span-2 " >
              <div className="mt-6 mb-3">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{meal?.data.name}</h1>
              </div>
              <div className='mb-3'>

                <div className="space-y-6">
                  <MarkdownComponent code={meal?.data.description!} />

                </div>
              </div>



              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>


                {/* Details */}
                <MarkdownComponent code={code0} />
                {/* <MarkdownComponent code={code1} /> */}

              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}
