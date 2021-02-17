import { renderHook } from '@testing-library/react-hooks';

import { useTvStations } from './use-tv-stations';

describe('hooks/use-tv-stations', () => {
  test('store data', () => {
    const { result } = renderHook(() => useTvStations());
    expect(result.current.tvStations).toHaveLength(30);
  });
});
