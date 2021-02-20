import React, { memo, VFC, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

import SEO from '~/next-seo.config.json';

export type HeaderProps = {
  /**
   * class for twin.macro
   */
  className?: string;
};

type Props = {
  isOpen: boolean;
  handleClick: () => void;
} & HeaderProps;

const Component: VFC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <nav>
        <div className="title">
          <Link href="/">
            <a>{SEO.title}</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & {
    ${tw`bg-primary-700`}
    & > nav {
      ${tw`flex flex-wrap items-center justify-between py-2 px-2 lg:px-6`}

      & > .title {
        ${tw`flex items-center flex-shrink-0 mr-6 text-gray-100 font-semibold text-xl tracking-tight`}
      }

      & > .toggleButton {
        ${tw`flex lg:hidden`}
      }

      & > .menuList {
        ${tw`w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        ${({ isOpen }) => (isOpen ? tw`block` : tw`hidden lg:block`)}
      }
    }
  }
`;

/**
 * nav in header
 */
export const Header = memo((props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledComponent {...props} isOpen={isOpen} handleClick={handleClick} />
  );
});
