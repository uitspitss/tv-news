import { useState, useEffect } from 'react';

import type { Prefecture } from '~/models/prefecture';
import data from '~/contents/prefectures.yml';

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (prefectures.length) {
      return;
    }

    const getData = async () => {
      try {
        setPrefectures(data.prefectures);
      } catch (_error) {
        setError(true);
      }
    };

    getData();
  }, [prefectures]);

  return { prefectures, error };
};
