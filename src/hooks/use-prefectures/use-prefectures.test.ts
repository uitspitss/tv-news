import { renderHook } from '@testing-library/react-hooks';

import { usePrefectures } from './use-prefectures';

describe('hooks/use-prefectures', () => {
  test('store data', () => {
    const { result } = renderHook(() => usePrefectures());
    expect(result.current.prefectures).toHaveLength(47);
  });
});
