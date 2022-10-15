import { useSelections } from 'ahooks';
import { FC, Fragment, useRef } from 'react';
import { Food, Page, Product, Site } from '../../interfaces';
import { CardPage1, CardPage2, CardPage3, CardSite } from './card';
import { HeadingDashboardOption } from './heading';
import { CardProduct0 } from './card/cardProduct0';
import { CardPage0 } from './card/cardPage0';
import { CardFood } from './card/cardFood';
interface Grid {
  children: React.ReactNode;
}

export const Grid: FC<Grid> = ({ children }) => {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 py-6 sm:pt-10`}>
      {children}
    </div>

  )
}

interface Sites {
  sites: Site[];
}

export const Sites: FC<Sites> = ({ sites}) => {
  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    sites?.map(data => data._id)!
  );
  return (
    <Fragment>
    <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} /> 
    <Grid>
      {
        sites?.map((data, i) => <CardSite key={i} site={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
      }
    </Grid>
      </Fragment>

  )
}

interface Products {
  products: Product[];
  type: string
}

export const Products: FC<Products> = ({ products, type}) => {
  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    products?.map(data => data._id)!
  );
  return (
    <Fragment>
    <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} type={type} /> 
    <Grid>
      {
        products?.map((data, i) => <CardProduct0 key={i} product={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
      }
    </Grid>
      </Fragment>

  )
}
interface Foods {
  foods: Food[];
  type: string
}

export const Foods: FC<Foods> = ({ foods, type}) => {
  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    foods?.map(data => data._id)!
  );
  return (
    <Fragment>
    <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} type={type} /> 
    <Grid>
      {
        foods?.map((data, i) => <CardFood key={i} food={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
      }
    </Grid>
      </Fragment>

  )
}
interface Pages0 {
  pages0: Page[];
}

export const Pages0: FC<Pages0> = ({ pages0}) => {
  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    pages0?.map(data => data._id)!
  );
  return (
    <Fragment>
    <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} /> 
    <Grid>
      {
        pages0?.map((data, i) => <CardPage0 key={i} page={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
      }
    </Grid>
      </Fragment>

  )
}
interface Pages1 {
  pages1: Page[];
}

export const Pages1: FC<Pages1> = ({ pages1}) => {
  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    pages1?.map(data => data._id)!
  );
  return (
    <Fragment>
    <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} /> 
    <Grid>
      {
        pages1?.map((data, i) => <CardPage1 key={i} page={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
      }
    </Grid>
      </Fragment>

  )
}
interface Pages2 {
  pages2: Page[];
}

export const Pages2: FC<Pages2> = ({ pages2}) => {
  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    pages2?.map(data => data._id)!
  );
  return (
    <Fragment>
    <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} /> 
    <Grid>
      {
        pages2?.map((data, i) => <CardPage2 key={i} page={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
      }
    </Grid>
      </Fragment>

  )
}
interface Pages3 {
  pages3: Page[];
}

// export const Pages3: FC<Pages3> = ({ pages3}) => {
//   const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
//     pages3?.map(data => data._id)!
//   );
//   return (
//     <Fragment>
//     <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} /> 
//     <Grid>
//       {
//         pages3?.map((data, i) => <CardPage3 key={i} page={data} checked={isSelected(data._id)} toggle={() => toggle(data._id)} partiallySelected={selected.length !== 0} />)
//       }
//     </Grid>
//       </Fragment>

//   )
// }