---
to: <%= abs_path %>.tsx
---
import React from 'react';
import { NextPage } from 'next';

import { TemplateComponent } from '~/components/templates/template-component'

type PageProps = {};

/**
 * TODO: write an explanation of this Page
 */
const Page: NextPage<PageProps> = (props) => {
  return (
    <TemplateComponent {...props} />
  );
}

export default Page;
