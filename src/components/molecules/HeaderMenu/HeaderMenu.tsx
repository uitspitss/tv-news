import React, { memo, VFC } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

export type HeaderMenuProps = {
  /**
   * class for twin.macro
   */
  className?: string;
};

type Props = HeaderMenuProps;

const Component: VFC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Link href="/users-ssr">
        <a>Users SSR</a>
      </Link>
      <Link href="/users-ssg">
        <a>Users SSG</a>
      </Link>
      <Link href="/users-swr">
        <a>Users useSWR</a>
      </Link>
      <Link href="/users-recoil">
        <a>Users useUsers</a>
      </Link>
    </div>
  );
};

const StyledComponent = styled(Component)`
  ${tw`text-sm lg:flex-grow`}

  & > a {
    ${tw`block mt-4 lg:inline-block lg:mt-0 text-gray-500`}

    &:not(:last-child) {
      ${tw`mr-4`}
    }
  }
`;

/**
 * menu in header
 */
export const HeaderMenu = memo((props: HeaderMenuProps) => {
  return <StyledComponent {...props} />;
});
