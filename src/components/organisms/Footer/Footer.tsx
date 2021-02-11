import React, { memo, VFC } from 'react';
import tw, { styled } from 'twin.macro';

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
      <p>
        ©{copyrightYears(2020)} *WEBSITE TITLE* —
        <a
          href="https://twitter.com/uitspitss"
          rel="noopener noreferrer"
          target="_blank"
        >
          @uitspitss
        </a>
      </p>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & {
    ${tw`flex items-center sm:flex-row flex-col py-2 px-2 lg:px-6`}

    & > p {
      ${tw`text-sm text-gray-500`}
      & > a {
        ${tw`text-gray-600 ml-1 no-underline`}
      }
    }
  }
`;

/**
 * footer
 */
export const Footer = memo((props: FooterProps) => {
  return <StyledComponent {...props} />;
});
