import React, { Fragment, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { findPage0, findPage1, findPages0, findPages0ByParent, findPages1, findPages1ByParent, findSite, findSites, usePage0, usePages0, usePages1, useSites, findPages2ByParent, usePages2, findPages2, findPage2, findPages3ByParent, findAllProductsByParent, useAllProducts, findAllProducts, findProduct, useFindAllArticles, useProductsWithCursor, findProductsWithCursor, useAllFoods, findAllFoodsByParent, findAllFoods, findFood, useSite, usePages0ByParent, usePages2ByParent, usePage1 } from '../../../../../src/hooks'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../src/layouts'
import { HeadingDashboard, Pages0, Pages2 } from '../../../../../src/components'

function Page1() {
  const { asPath } = useRouter()
  const { data: page1 } = usePage1(asPath)
  const { data: pages2 } = usePages2ByParent(asPath)
  const list = useMemo(() => pages2,
    [pages2])
  return (
    <Fragment>
      <HeadingDashboard title={page1?.data.seo.title!} page={page1}/>
      <Pages2 pages2={list!}/>
      
      {/* <HeadingDashboard title={site?.data.name!} site={site}/>
      <Pages0 pages0={list!}/> */}
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
  console.log(context?.params);
  await queryClient.prefetchQuery(["find-page1", pageId], async () => await findPage1(pageId))
  await queryClient.prefetchQuery(["find-pages2-by-parent", parentId], async () => await findPages2ByParent(parentId))
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