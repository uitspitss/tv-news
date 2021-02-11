import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { SimpleForm, FormValues } from '~/components/organisms/SimpleForm';

const IndexPage: NextPage = () => {
  // FIXME: when use production
  // eslint-disable-next-line
  const onValid = (validData: FormValues) => console.log(validData);

  return (
    <>
      <NextSeo title="Index" />
      <SimpleForm onValid={onValid} />
    </>
  );
};

export default IndexPage;
