import { FC, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { useProductsWithCursor } from '../../hooks';
import { CardProduct } from '../card';
import { Grid } from '../grid';
import { HeadingDashboard } from '../heading';
import { getQuery } from '../../../utils';
import { Pagination01 } from '../pagination';
import { Product } from '../../../interfaces';
import { Skeleton } from '../skeleton';
interface GridProduct {

}

export const GridProduct: FC<GridProduct> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const [select, setSelect] = useState<string[]>([])
  // console.log(select);

  // setSelect([...select, '1'])
  // console.log('select', select);

  const [amount, setAmount] = useState(10)
  const [args, setArgs] = useState({
    first: amount,
  })
  const { data: products, isError, isLoading, isFetching, status, isPreviousData } = useProductsWithCursor(args, query[4], query[2]);

  // const rows = [];
  // for (let i = 0; i < 10; i++) {
  //     // note: we are adding a key prop here to allow react to uniquely identify each
  //     // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //     rows.push(<div key={i}>
  //       {/* <Skeleton height={200} />
  //       <Skeleton height={50} /> */}  
  //     </div>);
  // }

  return (
    <Fragment>
      <HeadingDashboard title={`Products`} select={select} setSelect={setSelect} />
      <Grid>

        {
          isFetching ?
            <Skeleton />
            :
            <Fragment>
              {
                products?.page.edges.map((data, i) => <CardProduct key={i} product={data.node as Product} select={select} setSelect={setSelect} />)

              }
            </Fragment>
        }
      </Grid>
      {/* <Grid>
      {
        isLoading ?
        rows
        :
        products?.page.edges.map((data, i) => <CardProduct key={i} product={data.node as Product} select={select} setSelect={setSelect} />)
      }
      </Grid> */}
      <Pagination01 setArgs={setArgs} amount={amount} pageInfo={products?.page.pageInfo!} pageData={products?.pageData!} />

    </Fragment>
  )
}