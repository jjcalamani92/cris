import { FC, useState } from 'react'

import { HeadingDashboard } from '../heading'
import { SwiperNavigation } from '../swiper'

import { MarkdownComponent } from '../utils';
import { Product } from '../../../interfaces';

const code0 = `### Características que aumentan la robustez de este motor:
- El protector de escape y la cubierta del ventilador se han reforzado en los puntos de fijación
- Arranque  construido en acero.
- La varilla del regulador está provista de un casquillo.
- La pipa de la bujía es de resina.
### Otras características del motor:
- Un simple pero novedoso sistema de lubricación, con dos cámaras de respiración, garantiza una correcta lubricación en cualquier posición.
- Un carburador de membrana evita cualquier pérdida de combustible cuando se apoya la máquina de lado.
- Soporte especial de montaje para pisón.
`
const code1 = `### Especificaciones técnicas
- **Tipo de motor**: 
  - Cilindro individual 
  - 4 tiempos Motor gasolina OHV
  - Eje horizontal
- **Tipo de camisa de cilindro**: Camisa de acero
- **Calibre x carrera**: 56 x 40 mm
- **Cilindrada**: 98 cm³
- **Relación de compresión**: 8.5 : 1
- **Potencia neta**: 2.1 kW ( 2.8 HP ) / 3600 rpm
- **Potencia nominal**: 1.7 kW ( 2.3 HP ) / 3600 rpm
- **Par maximo neto**: 5.7 Nm ( 0.58 kgfm ) / 3600 rpm
- **Sistema de Encendido**: Transistorizado
- **Motor de arranque**: Tirador de arranque
- **Consumo de combustible a potencia nominal**: 0.88 L/H - 3600 rpm
- **Capacidad de aceite**: 0.3 Litro
- **Dimensiones (L X A X A)**: 254 x 316 x 290 mm
- **Peso en seco**: 
  - Tipo de pisón 50 kg : 10.7 kg
  - Tipo de pisón 60 kg : 10.8 kg
`

interface ProductEngine {
  product: Product
}

export const ProductEngine: FC<ProductEngine> = ({ product }) => {

  return (
    <>
      <HeadingDashboard title="Detail Product" product={product} />
      <div className="bg-white">
        <div className="py-6 sm:py-10">

          <div className="max-w-2xl mx-auto py-0 px-4 sm:px-0 lg:max-w-7xl lg:py-0  grid grid-cols-1 lg:gap-6 lg:grid-cols-5">
            {/* Image gallery */}
            <div className="col-span-3" >
              <SwiperNavigation image={product?.data.image!} />
            </div>
            <div className="col-span-2 " >
              <div className="mt-6 mb-3">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.data.name}</h1>
              </div>
              <div className='mb-3'>

                <div className="space-y-6">
                  <MarkdownComponent code={product?.data.description!} />

                </div>
              </div>



              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>


                {/* Details */}
                <MarkdownComponent code={code0} />
                <MarkdownComponent code={code1} />

              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}
