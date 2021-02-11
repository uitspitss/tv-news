import React, { memo, VFC, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

import { Button } from '~/components/atoms/buttons/Button';
import { HeaderMenu } from '~/components/molecules/HeaderMenu';

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
  const { className, isOpen, handleClick } = props;

  return (
    <div className={className}>
      <nav>
        <div className="title">
          <Link href="/">
            <a>*WEBSITE TITLE*</a>
          </Link>
        </div>
        <div className="toggleButton">
          <Button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  className="open"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  className="closed"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
        <div className="menuList">
          <HeaderMenu />
        </div>
      </nav>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & {
    ${tw`bg-primary-300 mb-2 lg:mb-4`}
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
