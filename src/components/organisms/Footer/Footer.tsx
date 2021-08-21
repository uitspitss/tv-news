import React, { memo, VFC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw, { styled } from 'twin.macro';

import SEO from '~/next-seo.config.json';
import { copyrightYears } from '~/utils/copyright-years';

export type FooterProps = {
  /**
   * class for twin.macro
   */
  className?: string;
};

type Props = FooterProps;

const Component: VFC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <p className="title">
        ©{copyrightYears(2021)} — {SEO.title}
      </p>
      <a
        className="twitter"
        href="https://twitter.com/uitspitss"
        rel="noopener noreferrer"
        target="_blank"
      >
        @uitspitss
      </a>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & {
    ${tw`flex items-center py-2 px-2 lg:px-6 bg-primary-700`}

    & > .title {
      ${tw`text-sm text-primary-500 mr-1`}
    }

    & > .twitter {
      ${tw`text-sm text-primary-500 no-underline`}
    }
  }
`;

/**
 * footer
 */
export const Footer = memo((props: FooterProps) => (
  <StyledComponent {...props} />
));
