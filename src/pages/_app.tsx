import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import { DefaultSeo } from 'next-seo';
import tw, { GlobalStyles } from 'twin.macro';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';

import * as gtag from '~/lib/gtag';
import SEO from '~/next-seo.config';
import { CookieNotification } from '~/components/molecules/CookieNotification';
import { Layout } from '~/components/templates/Layout';
import { ToastContainer } from '~/components/molecules/ToastContainer';
// import '~/styles/global.css';

const isProd = process.env.NODE_ENV === 'production';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  const config = getConfig();
  const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
  Sentry.init({
    enabled: isProd,
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          // eslint-disable-next-line
          // @ts-ignore
          // eslint-disable-next-line
          frame.filename = frame.filename.replace(distDir, 'app:///_next');

          return frame;
        },
      }),
    ],
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

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
      <CookieNotification tw="fixed bottom-0 left-0" />
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <ToastContainer />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </CacheProvider>
  );
};

export default MyApp;
