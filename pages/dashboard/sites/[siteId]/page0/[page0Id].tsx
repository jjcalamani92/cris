import React, { Fragment, useMemo } from 'react'
import { useRouter } from 'next/router'

import { findPage0, findPages0, findPages1ByParent, usePage0, usePages1ByParent } from '../../../../../src/hooks'

import { GetStaticPaths, GetStaticProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { LayoutDashboard } from '../../../../../src/layouts'
import { HeadingDashboard, Pages1 } from '../../../../../src/components'

function Page0() {
  const { asPath } = useRouter()
  const { data: page0 } = usePage0(asPath)
  const { data: pages1 } = usePages1ByParent(asPath)
// console.log(asPath);
// console.log(pages1);

  
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