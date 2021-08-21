import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import { DefaultSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw, { GlobalStyles } from 'twin.macro';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';

import * as gtag from '~/lib/gtag';
import SEO from '~/next-seo.config.json';
import { Layout } from '~/components/templates/Layout';
import { ToastContainer } from '~/components/molecules/ToastContainer';
import { CookieNotification } from '~/components/molecules/CookieNotification';
// import '~/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <ToastContainer />
      <CookieNotification />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </CacheProvider>
  );
};

export default MyApp;
