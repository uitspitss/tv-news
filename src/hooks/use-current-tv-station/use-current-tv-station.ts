import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currentTvStationState } from '~/store/atoms';
// import { TvStation } from '~/models/tv-station';

// export const useCurrentTvStation = () => {
//   const [currentTvStation, setCurrentTvStation] = useRecoilState(
//     currentTvStationState,
//   );

//   return { currentTvStation, setCurrentTvStation };
// };

export const useCurrentTvStationState = () => {
  return useRecoilValue(currentTvStationState);
};

export const useCurrentTvStationDispatch = () => {
  return useSetRecoilState(currentTvStationState);
};
