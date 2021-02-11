import fetchMock from 'jest-fetch-mock';

import { jsonFetcher } from './jsonFetcher';

describe('jsonFetcher', () => {
  const content = {
    id: 1,
    text: 'test',
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test('fetch', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: content }));
    await expect(jsonFetcher('/mock/api/get')).resolves.toStrictEqual({
      data: content,
    });
  });
});
