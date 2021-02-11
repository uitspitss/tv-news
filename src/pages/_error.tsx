import React from 'react';
import { NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';
import * as Sentry from '@sentry/node';

import Custom404Page from '~/pages/404';

type ExpandedProps = {
  hasGetInitialPropsRun: boolean;
  err: string;
} & ErrorProps;

const ErrorPage = ({
  statusCode,
  hasGetInitialPropsRun,
  err,
}: ExpandedProps) => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
  }

  if (statusCode === 404) {
    return <Custom404Page />;
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async (ctx: NextPageContext) => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps(
    ctx,
  )) as ExpandedProps;

  const { res, err, asPath } = ctx;

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return { statusCode: 404 };
  }

  if (err) {
    Sentry.captureException(err);
    await Sentry.flush(2000);

    return errorInitialProps;
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`),
  );
  await Sentry.flush(2000);

  return errorInitialProps;
};

export default ErrorPage;
