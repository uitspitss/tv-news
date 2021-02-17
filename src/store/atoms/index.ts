import { atom } from 'recoil';

import type { TvStation } from '~/models/tv-station';

export const currentTvStationState = atom<TvStation | null>({
  key: 'current-tv-station-state',
  default: null,
});
