import initStoryshots from '@storybook/addon-storyshots';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
initStoryshots();
fetchMock.disableMocks();
