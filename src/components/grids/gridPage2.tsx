import { FC, useState, Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useAllFoodsByParent, useAllProductsByParent, usePage0, usePage1, usePages2ByParent } from '../../hooks';
import { Foods, Grid, Pages2, Products } from '../grid';
import { HeadingDashboard, HeadingDashboardOption } from '../heading';
import { typePageEcommerceCategory, typePageFoodCategory } from '../../../utils';
interface GridPage2 {

}

export const GridPage2: FC<GridPage2> = () => {
  const { asPath } = useRouter()
  const { data: page1 } = usePage1(asPath)
  const { data: pages2 } = usePages2ByParent(asPath)
  const { data: products } = useAllProductsByParent(asPath)
  const { data: foods } = useAllFoodsByParent(asPath)
  // console.log(page1);
  // console.log(foods);
  
  const list = useMemo(() => pages2,
    [pages2])
  const listProducts = useMemo(() => products,
    [products])
  const listFoods = useMemo(() => foods,
    [foods])
  return (
    <Fragment>
      <HeadingDashboard title={page1?.data.seo.title!} page={page1}/>
      
      <Pages2 pages2={list!}/>
      
      {
        typePageEcommerceCategory.map(data => data.value).includes(page1?.data.type!) &&
        <Products products={listProducts!} type={page1?.data.type!} />
      }
      {
        typePageFoodCategory.map(data => data.value).includes(page1?.data.type!) &&
        <Foods foods={listFoods!} type={page1?.data.type!} />
      }
    </Fragment>
  )
}