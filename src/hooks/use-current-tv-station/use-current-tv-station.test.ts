import { renderRecoilHook } from 'react-recoil-hooks-testing-library';

import { useCurrentTvStationState } from './use-current-tv-station';

describe('hooks/use-current-tv-station', () => {
  test.todo('write hook test');

  test('store data', () => {
    const { result } = renderRecoilHook(useCurrentTvStationState);
    expect(result.current).toBe(null);
  });
});
