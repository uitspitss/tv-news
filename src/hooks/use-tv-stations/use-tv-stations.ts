import { useState, useEffect } from 'react';

import type { TvStation } from '~/models/tv-station';
import data from '~/contents/tv-stations.yml';

export const useTvStations = () => {
  const [tvStations, setTvStations] = useState<TvStation[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (tvStations.length) {
      return;
    }

    const fetchData = async () => {
      try {
        setTvStations(data.stations);
      } catch (_error) {
        setError(true);
      }
    };

    fetchData();
  }, [tvStations]);

  return { tvStations, error };
};
