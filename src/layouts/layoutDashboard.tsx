/* This example requires Tailwind CSS v2.0+ */
import { createRef, FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import { HeaderDashboard, Main } from '../components';
// import { getSlugByPages0, getSlugByPages1, getSlugByPages2, getSlugByPages3, getSlugBySites } from '../../utils/functionV1';

interface LayoutDashboard {
  children: React.ReactNode;
}

export const LayoutDashboard: FC<LayoutDashboard> = ({ children }) => {
  const { query, asPath } = useRouter()
  
  const ref = createRef();
 
  const seo = {
    title: "criscrm",
    description:" page description",
  }

  return (
    <>
      <div className="min-h-full" >
        <Head>
        <title>{`criscrm ${seo ? `| ${seo?.title}`: ''}`}</title>


          <meta name="description" content={seo?.description} key="desc" />
          <meta name="og:title" content={`criscrm ${seo ? `| ${seo?.title}`: null}`} />

          {/* <meta name="og:description" content={seo?.description} /> */}
          {/* <meta name="og:image" content={seo?.image.src} /> */}
          <link rel="icon" href={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />
          {/* <title>{seo ? seo?.title : 'dashboard'}</title>
          <meta name="keywords" />
          <meta name="description" content={seo ? seo?.description : 'description'} />
          <meta property="og:title" content={seo ? seo?.title : 'criscrm'} />
          <meta property="og:description" content={seo ? seo?.description : 'description'} />
          <meta property="og:type" content="og:product" />
          {seo && seo?.image && <meta property="og:image" content={seo ? seo?.image.src : "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />}
           */}
        </Head>
        <HeaderDashboard />
        <Main>
          {children}
        </Main>
      </div>
    </>
  )
}
