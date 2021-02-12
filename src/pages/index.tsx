import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { IndexPage } from '~/components/pages/IndexPage';
import { usePrefectures } from '~/hooks/use-prefectures';

const Page: NextPage = () => {
  const { prefectures, error } = usePrefectures();

  if (error) {
    return <div>failed to load ...</div>;
  }

  return (
    <>
      <NextSeo title="Index" />
      {/* <SimpleForm onValid={onValid} /> */}
      <IndexPage prefectures={prefectures} />
    </>
  );
};

export default Page;
