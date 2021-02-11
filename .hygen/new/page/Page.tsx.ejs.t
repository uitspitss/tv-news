---
to: <%= abs_path %>.tsx
---
import React from 'react';
import { NextPage } from 'next';

import { TemplateComponent } from '~/components/templates/template-component'

type <%= page_name %>PageProps = {};

/**
 * TODO: write an explanation of <%= page_name %>Page
 */
const <%= page_name %>Page: NextPage<<%= page_name %>PageProps> = (props) => {
  return (
    <TemplateComponent {...props} />
  );
}

export default <%= page_name %>Page;
