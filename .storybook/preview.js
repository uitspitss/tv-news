import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from 'twin.macro';
import * as nextRouter from 'next/router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

// Storybook tips, SEE https://panda-program.com/posts/nextjs-storybook-typescript-errors
// ダミーデータは適宜変更する
nextRouter.useRouter = () => ({
  route: '/',
  pathname: '/about',
  query: { query: 'Next.js Storybook' },
  asPath: '',
  basePath: '',
  prefetch: () => new Promise((resolve, reject) => {}),
});

// GA mock
window.gtag = () => {};

// decorator
export const decorators = [
  (Story) => (
    <RecoilRoot>
      <GlobalStyles />
      <Story />
    </RecoilRoot>
  ),
];
