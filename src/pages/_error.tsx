import React from 'react';
import { NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';

import Custom404Page from '~/pages/404';

const ErrorPage = ({ statusCode }: ErrorProps) => {
  if (statusCode === 404) {
    return <Custom404Page />;
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async (ctx: NextPageContext) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(ctx);

  const { res, err } = ctx;

  if (res?.statusCode === 404) {
    return { statusCode: 404 };
  }

  if (err) {
    return errorInitialProps;
  }

  return errorInitialProps;
};

export default ErrorPage;
