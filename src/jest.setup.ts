/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

// for mapbox
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
    getCenter: jest.fn(),
    getZoom: jest.fn(),
  })),
  NavigationControl: jest.fn(),
}));
