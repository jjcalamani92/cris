import React, { Fragment, useMemo, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient } from '@tanstack/react-query'


import { findAllProductsByParent, findPage2, findPages2, findPages3ByParent, useAllProductsByParent, usePage2, usePages3ByParent } from '../../../../../src/hooks'
import { LayoutDashboard } from '../../../../../src/layouts'
import { HeadingDashboard, Products } from '../../../../../src/components'
import { typePageEcommerceCategory } from '../../../../../utils'

function Page1() {
  const { asPath } = useRouter()
  const { data: page2 } = usePage2(asPath)
  const { data: pages3 } = usePages3ByParent(asPath)
  const { data: products } = useAllProductsByParent(asPath)
  const listProducts = useMemo(() => products,
    [products])
  return (
    <Fragment>
      <HeadingDashboard title={page2?.data.seo.title!} page={page2}/>
      {
        typePageEcommerceCategory.map(data => data.value).includes(page2?.data.type!) &&
        <Products products={listProducts!} type={page2?.data.type!}/>
      }
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages2 = await findPages2()
  return {    
    paths: pages2.map(data => ({ params: { siteId: data.site, page2Id: data._id } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  const pageId = context?.params?.page2Id as string
  const parentId = context?.params?.page2Id as string
  // console.log(context?.params);
  await queryClient.prefetchQuery(["find-page2", pageId], async () => await findPage2(pageId))
  await queryClient.prefetchQuery(["find-pages3-by-parent", parentId], async () => await findPages3ByParent(parentId))
  await queryClient.prefetchQuery(["find-all-products-by-parent", parentId], async () => await findAllProductsByParent(parentId))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
Page1.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default Page1