
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useSelections } from 'ahooks'
import { GetStaticProps } from 'next'
import { Fragment, useMemo } from 'react'
import { CardSiteProjects, GridProjects, GridSite, HeadingDashboard, HeadingDashboardOption } from '../../../src/components'
import { findSites, useSites } from '../../../src/hooks'
import { LayoutDashboard } from '../../../src/layouts'


export default function Projects() {
  const { data: sites } = useSites()
  const list = useMemo(() => sites,
    [sites])
  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    list?.map(data => data._id)!
  );
  return (
    <Fragment>
      <HeadingDashboard title={"Projects"} />
      <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} />
      <GridProjects>
        {
          list?.map((data, i) => <CardSiteProjects key={i} site={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
        }
      </GridProjects>
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


Projects.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}
