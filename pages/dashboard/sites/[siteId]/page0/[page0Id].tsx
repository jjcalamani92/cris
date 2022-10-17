import React, { Fragment, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { findPage0, findPage1, findPages0, findPages0ByParent, findPages1, findPages1ByParent, findSite, findSites, usePage0, usePages0, usePages1, useSites, findPages2ByParent, usePages2, findPages2, findPage2, findPages3ByParent, findAllProductsByParent, useAllProducts, findAllProducts, findProduct, useFindAllArticles, useProductsWithCursor, findProductsWithCursor, useAllFoods, findAllFoodsByParent, findAllFoods, findFood, useSite, usePages0ByParent, usePages1ByParent } from '../../../../../src/hooks'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../src/layouts'
import { HeadingDashboard, Pages0, Pages1 } from '../../../../../src/components'

function Page0() {
  const { asPath } = useRouter()
  const { data: page0 } = usePage0(asPath)
  const { data: pages1 } = usePages1ByParent(asPath)
console.log(asPath);
console.log(pages1);

  
  const list = useMemo(() => pages1,
    [pages1])
  return (
    <Fragment>
      <HeadingDashboard title={page0?.data.seo.title!} page={page0}/>
      <Pages1 pages1={list!}/>
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages0 = await findPages0()
  return {
    paths: pages0.map(data => ({ params: { siteId: data.site, page0Id: data._id } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  // console.log(context?.params);
  
  const pageId = context?.params?.page0Id as string
  const parentId = context?.params?.page0Id as string
  await queryClient.prefetchQuery(["find-page0", pageId], async () => await findPage0(pageId))
  await queryClient.prefetchQuery(["find-pages1-by-parent", parentId], async () => await findPages1ByParent(parentId))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
Page0.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default Page0