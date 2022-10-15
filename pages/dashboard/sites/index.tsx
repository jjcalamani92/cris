
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { Fragment } from 'react'
import { GridSite } from '../../../src/components'
import { findSites } from '../../../src/hooks'
import { LayoutDashboard } from '../../../src/layouts'


export default function Sites() {
  return (
    <Fragment>
      <GridSite />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["find-sites"], findSites)
  // await queryClient.prefetchQuery(["find-sites-with-cursor", args], async () => await findSitesWithCursor(args))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}


Sites.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}
