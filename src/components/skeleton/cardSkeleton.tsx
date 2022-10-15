import React, { Fragment } from 'react'
// import Skeleton from 'react-loading-skeleton';
import { Grid } from '../grid';

export const Skeleton = () => {
  const rows = [];
  for (let i = 1; i < 12; i++) {

    rows.push(
      <div key={i}>
        <div className=" animate-pulse ">
          <div className="flex flex-col space-y-1">
            <div className="h-[11.8rem] rounded-md bg-gray-300 "></div>
            <div className="h-[2.7rem] rounded-md bg-gray-300 "></div>
          </div>
        </div>
      </div>);
  }
  return (
    <Fragment>
        {rows}
    </Fragment>
  )
}
