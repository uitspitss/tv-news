import React, { memo, VFC } from 'react';
import tw, { styled } from 'twin.macro';

import { Map } from '~/components/molecules/Map';

export type IndexPageProps = {
  /**
   * class for twin.macro
   */
  className?: string;
};

type Props = IndexPageProps;

const Component: VFC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Map className="map" />
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > {
    .map {
      ${tw`w-full h-full`}

      height: calc(100vh - 44px - 36px);
    }
  }
`;

/**
 * IndexPage
 */
export const IndexPage = memo((props: IndexPageProps) => {
  return <StyledComponent {...props} />;
});
