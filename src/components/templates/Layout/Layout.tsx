import React, { memo, FC, ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw, { styled } from 'twin.macro';

import { Header } from '~/components/organisms/Header';
import { Footer } from '~/components/organisms/Footer';

export type LayoutProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * children
   */
  children: ReactNode;
};

type Props = LayoutProps;

const Component: FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <header>
        <Header className="header" />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > header {
    ${tw`sticky top-0 left-0 w-full h-11`}
  }

  & > main {
    height: calc(100% - 44px - 36px);
    min-height: calc(100vh - 44px - 36px);
  }
`;

/**
 * レイアウト
 */
export const Layout: FC<LayoutProps> = memo((props) => (
  <StyledComponent {...props} />
));
