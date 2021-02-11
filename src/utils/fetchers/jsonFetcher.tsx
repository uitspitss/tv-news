/**
 * json fetcher (for SWR)
 */
export const jsonFetcher = (url: string) =>
  fetch(url).then((resp) => resp.json());
