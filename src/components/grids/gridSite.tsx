import { FC, Fragment, useMemo } from 'react';
import { useSites } from '../../hooks';
import { Sites } from '../grid';
import { HeadingDashboard } from '../heading';


interface GridSite {

}

export const GridSite: FC<GridSite> = () => {
  const {data:sites, isFetching} = useSites()
  const list = useMemo(() => sites,
    [sites])
  return (
    <Fragment>
      <HeadingDashboard title={"Sites"} />
      {
        <Sites sites={list!} />
      }
      
    </Fragment>
  )
}