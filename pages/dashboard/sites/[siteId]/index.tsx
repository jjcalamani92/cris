import React, { Fragment, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { findPage0, findPage1, findPages0, findPages0ByParent, findPages1, findPages1ByParent, findSite, findSites, usePage0, usePages0, usePages1, useSites, findPages2ByParent, usePages2, findPages2, findPage2, findPages3ByParent, findAllProductsByParent, useAllProducts, findAllProducts, findProduct, useFindAllArticles, useProductsWithCursor, findProductsWithCursor, useAllFoods, findAllFoodsByParent, findAllFoods, findFood, useSite, usePages0ByParent } from '../../../../src/hooks'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../src/layouts'
import { HeadingDashboard, Pages0 } from '../../../../src/components'



function Site() {
  const { asPath } = useRouter()
  const { data: site } = useSite(asPath);
  const { data: pages0 } = usePages0ByParent(asPath)
  // console.log(pages0);
  // console.log(asPath);
  
  const list = useMemo(() => pages0,
    [pages0])
  return (
    <Fragment>
      <HeadingDashboard title={site?.data.name!} site={site}/>
      <Pages0 pages0={list!}/>
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sites = await findSites()
  return {
    // paths: [{ params: { siteId: "6324d2d5132d462bc1c57b55" } }],
    paths: sites.map(data => ({params: {siteId: data._id}})),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  const siteId = context?.params?.siteId as string
  const parentId = context?.params?.siteId as string
  await queryClient.prefetchQuery(["find-site", siteId], async () => await findSite(siteId))
  await queryClient.prefetchQuery(["find-pages0-by-parent", parentId], async () => await findPages0ByParent(parentId))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}
Site.getLayout = function getLayout(children: React.ReactNode) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}

export default Site