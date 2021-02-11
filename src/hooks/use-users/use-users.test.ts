import { renderRecoilHook, act } from 'react-recoil-hooks-testing-library';
import fetchMock from 'jest-fetch-mock';

import { useUsers } from './use-users';

describe('hooks/use-users', () => {
  beforeAll(() => fetchMock.enableMocks());
  afterAll(() => fetchMock.disableMocks());

  test('store data', async () => {
    fetchMock.once(
      JSON.stringify([
        { id: 1, name: 'john' },
        { id: 2, name: 'lisa' },
      ]),
    );

    let res;
    await act(async () => {
      res = renderRecoilHook(useUsers);
    });
    expect(res.result.current.users).toHaveLength(2);
  });
});
