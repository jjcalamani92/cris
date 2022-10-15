import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react';

import { SessionProvider } from 'next-auth/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout ) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }))
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {
            getLayout(<Component {...pageProps} />)
          }
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  )
}


export default MyApp
