import { request } from 'graphql-request';

const API = '';

/**
 * graphql fetchers (for SWR)
 */
export const graphqlFetcher = (query: string) => request(API, query);
