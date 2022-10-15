import { FC, useState, Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useAllProductsByParent, usePage0, usePage2, usePages0ByParent, usePages1ByParent, usePages3ByParent, useProductsByParent, useSite } from '../../hooks';
import { CardPage1, CardPage2, CardPage3, CardProduct } from '../card';
import { Grid, Products } from '../grid';
import { HeadingDashboard } from '../heading';
import { typePageEcommerceCategory } from '../../../utils';
interface GridPage3 {

}

export const GridPage3: FC<GridPage3> = () => {
  const { query, asPath } = useRouter()
  const { data: page2 } = usePage2(asPath)
  const { data: pages3 } = usePages3ByParent(asPath)
  const { data: products } = useAllProductsByParent(asPath)
  const listProducts = useMemo(() => products,
    [products])
    // console.log(page2?.data.type);
    
  return (
    <Fragment>
      <HeadingDashboard title={page2?.data.seo.title!} page={page2}/>
      
      <Grid>
        {pages3?.map((data, i) => <CardPage3 key={i} page={data} />)}
      </Grid>
      {
        typePageEcommerceCategory.map(data => data.value).includes(page2?.data.type!) &&
        <Products products={listProducts!} type={page2?.data.type!}/>
      }
      
    </Fragment>
  )
}