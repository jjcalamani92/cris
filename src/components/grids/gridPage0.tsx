import { FC, useState, Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import { usePages0ByParent, useSite } from '../../hooks';
import { Grid, Pages0 } from '../grid';
import { HeadingDashboard, HeadingDashboardOption } from '../heading';
interface GridPage0 {

}

export const GridPage0: FC<GridPage0> = () => {
  const { query, asPath } = useRouter()
  const { data: pages0 } = usePages0ByParent(asPath)
  const { data: site } = useSite(asPath);
  const list = useMemo(() => pages0,
    [pages0])
  
  return (
    <Fragment>
      <HeadingDashboard title={site?.data.name!} site={site}/>
      <Pages0 pages0={list!}/>
    </Fragment>
  )
}