# Next.js template repository

## node, npm, yarn version

- node `v14.13.1`
- npm `6.14.8`
- yarn `1.22.10`

## INSTALL BELOW PACKAGES AFTER YARN CREATE NEXT-APP

### TypeScript

- [https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/utils/verifyTypeScriptSetup.js#L116-L160](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/utils/verifyTypeScriptSetup.js#L116-L160)

```sh
yarn add -D typescript ts-node-dev
```

### Test (Jest, testing-library)

- [https://jestjs.io/docs/en/getting-started](https://jestjs.io/docs/en/getting-started)
- [https://ja.reactjs.org/docs/test-renderer.html](https://ja.reactjs.org/docs/test-renderer.html)
- [https://testing-library.com/docs/react-testing-library/example-intro](https://testing-library.com/docs/react-testing-library/example-intro)
- [https://github.com/testing-library/user-event](https://github.com/testing-library/user-event)

```sh
yarn add -D jest jest-css-modules ts-jest babel-jest @types/jest jest-date-mock @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom jest-fetch-mock @testing-library/react-hooks react-recoil-hooks-testing-library
```

### ESlint

```sh
yarn add -D eslint eslint-config-airbnb eslint-import-resolver-typescript eslint-plugin-import \
eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks \
@typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jest-dom eslint-plugin-testing-library
```

### Stylelint

```sh
yarn add -D stylelint stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard \
stylelint-config-styled-components stylelint-prettier stylelint-processor-styled-components \
stylelint-scss
```

### Emotion

```sh
yarn add @emotion/react @emotion/styled @emotion/css
yarn add -D @emotion/jest
```

### Husky

```sh
yarn add -D husky lint-staged
```

### date-fns

```sh
yarn add date-fns
```

### types

```sh
yarn add -D @types/react
```

### Storybook

#### storybook:core

```sh
# npx sb init

yarn add -D @storybook/addon-a11y @storybook/addon-knobs react-docgen-typescript-plugin \
@storybook/preset-scss css-loader sass-loader style-loader paths.macro @storybook/node-logger
```

#### storybook:storyshot

```sh
yarn add -D @storybook/addon-storyshots
```

#### storybook:regsuit

```sh
yarn add -D reg-suit zisui

yarn reg-suit init
```

### Tailwind CSS

- document
  - [https://tailwindcss.com/docs/configuration](https://tailwindcss.com/docs/configuration)
- twin.macro
  - [https://github.com/ben-rogerson/twin.macro](https://github.com/ben-rogerson/twin.macro)
- theme config
  - [https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js](https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js)
- tailwindcss-forms
  - [https://github.com/tailwindlabs/tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms)
- tailwindcss-typography
  - [https://github.com/tailwindlabs/tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)

```sh
yarn add twin.macro tailwindcss @emotion/react @emotion/styled @emotion/css @tailwindcss/forms @tailwindcss/typography

# for storybook
yarn add -D @emotion/babel-preset-css-prop
```

### headlessui

- [https://github.com/tailwindlabs/headlessui/tree/develop/packages/%40headlessui-react](https://github.com/tailwindlabs/headlessui/tree/develop/packages/%40headlessui-react)

```sh
yarn add @headlessui/react
```

### hygen

- [https://www.hygen.io/docs/quick-start](https://www.hygen.io/docs/quick-start)
- [https://zenn.dev/takepepe/articles/hygen-template-generator](https://zenn.dev/takepepe/articles/hygen-template-generator)

```sh
yarn add -D hygen
```

### Next SEO

- [https://github.com/garmeeh/next-seo/blob/master/README.md](https://github.com/garmeeh/next-seo/blob/master/README.md)

```sh
yarn add next-seo
```

### Dialog, PopupMenu

- [https://react-popup.elazizi.com/](https://react-popup.elazizi.com/)

```sh
yarn add reactjs-popup
```

## BELOW IF IT'S REQUIRED

### for fetcher

- [https://nextjs.org/blog/next-9-4#improved-built-in-fetch-support](https://nextjs.org/blog/next-9-4#improved-built-in-fetch-support)
- [https://github.com/vercel/next.js/discussions/13678](https://github.com/vercel/next.js/discussions/13678)

- useSWR

```sh
yarn add swr
```

- graphql

```sh
yarn add graphql-request graphql
```

### React-Hook-Form & zod

- [https://react-hook-form.com/jp/get-started](https://react-hook-form.com/jp/get-started)
- [https://react-hook-form.com/jp/advanced-usage](https://react-hook-form.com/jp/advanced-usage)
- [https://github.com/vriad/zod](https://github.com/vriad/zod)

```sh
yarn add react-hook-form @hookform/resolvers zod
```

### Sentry

- [https://github.com/vercel/next.js/tree/canary/examples/with-sentry](https://github.com/vercel/next.js/tree/canary/examples/with-sentry)

```sh
yarn add @sentry/browser @sentry/integrations @sentry/node @sentry/webpack-plugin @zeit/next-source-maps
```

```sh
yarn add @adobe/react-spectrum
```

### Redux

```sh
yarn add @reduxjs/toolkit react-redux
```

### Framer motion

```sh
yarn add framer-motion
```

### Google Analytics

- [https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics)

### react-cookie-consent

- [https://github.com/Mastermindzh/react-cookie-consent](https://github.com/Mastermindzh/react-cookie-consent)
- [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)

```sh
yarn add react-cookie-consent
```

### React Spectrum

UI Framework (maybe conflict with TailwindCSS)

- [https://react-spectrum.adobe.com/react-spectrum/index.html](https://react-spectrum.adobe.com/react-spectrum/index.html)

### React Stately

Use with React Aria

- [https://react-spectrum.adobe.com/react-stately/index.html](https://react-spectrum.adobe.com/react-stately/index.html)

```sh
yarn add @react-stately/toggle
```

### React Aria

Use with React Stately

- [https://react-spectrum.adobe.com/react-aria/index.html](https://react-spectrum.adobe.com/react-aria/index.html)

```sh
yarn add @react-aria/button
```

### Next Auth

```sh
yarn add next-auth @types/next-auth
```

### React Table

headless table library

- for TS
  - create `react-table-config.d.ts`
  - [https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table#configuration-using-declaration-merging](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table#configuration-using-declaration-merging)

```sh
yarn add react-table
yarn add -D @types/react-table
```

### React Select

- https://react-select.com/home

```sh
yarn add react-select
yarn add -D react-select-event
```
