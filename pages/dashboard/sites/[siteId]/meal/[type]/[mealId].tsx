import React, { Fragment, useMemo, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../../src/layouts'
import { findAllProducts, findFood, findProduct, useFood, useProduct } from '../../../../../../src/hooks'
import { MealFood, ProductWear } from '../../../../../../src/components'
import { findAllFoods } from '../../../../../../src/hooks/food/useAllFoods';



function MealId() {
  const { asPath } = useRouter()
  const { data: meal } = useFood(asPath)
  // console.log(food);
  
  return (
    <Fragment>
      {/* <h1>Hola</h1> */}
      {/* <ProductWear product={product!} /> */}
      <MealFood meal={meal!} />
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const foods = await findAllFoods()
  // console.log('foods', foods);
  
  return {    
    // paths: [{ params: { siteId: "6345a688dfbf75036f6e66d1", type: "clothing", productId: "634610809b19974e0a031e24" } }],
    paths: foods.map(data => ({ params: { siteId: data.site, type: data.type, mealId: data._id } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  // console.log(context?.params);
  
  const id = context?.params?.mealId as string
  const type = context?.params?.type as string
  // console.log(context?.params);
  await queryClient.prefetchQuery(["find-food", id, type], async () => await findFood(id, type))

  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
MealId.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default MealId