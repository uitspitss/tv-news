import React from 'react';
import { NextPage } from 'next';

import { IndexPage } from '~/components/pages/IndexPage';
import { usePrefectures } from '~/hooks/use-prefectures';
import { useTvStations } from '~/hooks/use-tv-stations';

const Page: NextPage = () => {
  const { prefectures, error: errorPrefectures } = usePrefectures();
  const { tvStations, error: errorTvStations } = useTvStations();

  if (errorPrefectures || errorTvStations) {
    return <div>failed to load ...</div>;
  }

  return <IndexPage prefectures={prefectures} tvStations={tvStations} />;
};

export default Page;
