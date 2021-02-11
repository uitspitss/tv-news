import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { IndexPage } from '~/components/pages/IndexPage';

const Page: NextPage = () => {
  return (
    <>
      <NextSeo title="Index" />
      {/* <SimpleForm onValid={onValid} /> */}
      <IndexPage />
    </>
  );
};

export default Page;
