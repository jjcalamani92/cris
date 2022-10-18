import React, { Fragment, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { findPage1, findPages1, findPages2ByParent, findAllFoodsByParent, usePages2ByParent, usePage1, useAllFoodsByParent, useAllProductsByParent, findAllProductsByParent } from '../../../../../src/hooks'
import { LayoutDashboard } from '../../../../../src/layouts'
import { Foods, HeadingDashboard, Pages2, Products } from '../../../../../src/components'
import { typePageEcommerceCategory, typePageFoodCategory } from '../../../../../utils'

function Page1() {
  const { asPath } = useRouter()
  const { data: page1 } = usePage1(asPath)
  const { data: pages2 } = usePages2ByParent(asPath)
  const { data: foods } = useAllFoodsByParent(asPath)
  const { data: products } = useAllProductsByParent(asPath)

  const listProducts = useMemo(() => products,
  [products])
  const list = useMemo(() => pages2,
    [pages2])
    const listFoods = useMemo(() => foods,
    [foods])
  return (
    <Fragment>
      <HeadingDashboard title={page1?.data.seo.title!} page={page1}/>
      <Pages2 pages2={list!}/>
      {
        typePageEcommerceCategory.map(data => data.value).includes(page1?.data.type!) &&
        <Products products={listProducts!} type={page1?.data.type!} />
      }
      {
        typePageFoodCategory.map(data => data.value).includes(page1?.data.type!) &&
        <Foods foods={listFoods!} type={page1?.data.type!} />
      }
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages1 = await findPages1()
  
  return {
    paths: pages1.map(data => ({ params: { siteId: data.site, page1Id: data._id } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  const pageId = context?.params?.page1Id as string
  const parentId = context?.params?.page1Id as string
  
  await queryClient.prefetchQuery(["find-page1", pageId], async () => await findPage1(pageId))
  await queryClient.prefetchQuery(["find-pages2-by-parent", parentId], async () => await findPages2ByParent(parentId))
  await queryClient.prefetchQuery(["find-all-products-by-parent", parentId], async () => await findAllProductsByParent(parentId))
  await queryClient.prefetchQuery(["find-all-foods-by-parent", parentId], async () => await findAllFoodsByParent(parentId))
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