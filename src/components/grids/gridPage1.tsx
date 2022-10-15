import { FC, useState, Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import { usePage0, usePages0ByParent, usePages1ByParent, useSite } from '../../hooks';
import { Grid, Pages1 } from '../grid';
import { HeadingDashboard, HeadingDashboardOption } from '../heading';
interface GridPage1 {

}

export const GridPage1: FC<GridPage1> = () => {
  const { query, asPath } = useRouter()
  const { data: pages1 } = usePages1ByParent(asPath)
  const { data: page0 } = usePage0(asPath)
  const list = useMemo(() => pages1,
    [pages1])
  
  return (
    <Fragment>
      <HeadingDashboard title={page0?.data.seo.title!} page={page0}/>
      
      <Pages1 pages1={list!}/>
    </Fragment>
  )
}