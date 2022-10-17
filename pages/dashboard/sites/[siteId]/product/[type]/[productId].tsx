import React, { Fragment, useMemo, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../../src/layouts'
import { findAllProducts, findProduct, useProduct } from '../../../../../../src/hooks'
import { ProductWear } from '../../../../../../src/components'



function ClothingId() {
  const { asPath } = useRouter()
  const { data: product } = useProduct(asPath)
  // console.log(product);
  
  return (
    <Fragment>
      <ProductWear product={product!} />
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await findAllProducts()
  // console.log('products', products);
  
  return {    
    // paths: [{ params: { siteId: "6345a688dfbf75036f6e66d1", type: "clothing", productId: "634610809b19974e0a031e24" } }],
    paths: products.map(data => ({ params: { siteId: data.site, type: data.type, productId: data._id } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  // console.log(context?.params);
  
  const id = context?.params?.productId as string
  const type = context?.params?.type as string
  // console.log(context?.params);
  await queryClient.prefetchQuery(["find-product", id, type], async () => await findProduct(id, type))

  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
ClothingId.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default ClothingId