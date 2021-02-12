import React, { memo, VFC } from 'react';
import tw, { styled } from 'twin.macro';
import { Popup } from 'react-mapbox-gl';

import { Map } from '~/components/molecules/Map';
import type { Prefecture } from '~/models/prefecture';

export type IndexPageProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * prefectures
   */
  prefectures?: Prefecture[];
};

type Props = IndexPageProps;

const Component: VFC<Props> = (props) => {
  const { className, prefectures } = props;

  return (
    <div className={className}>
      <Map className="map">
        {prefectures?.map((prefecture) => (
          <Popup
            className="popup"
            coordinates={[prefecture.lng, prefecture.lat]}
          >
            {prefecture.name}
          </Popup>
        ))}
      </Map>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > .map {
    ${tw`w-full h-full`}

    height: calc(100vh - 44px - 36px);

    .popup {
      & > .mapboxgl-popup-content {
        ${tw`bg-gray-700 text-primary-300`}
      }
      & > .mapboxgl-popup-tip {
        border-top-color: #374151;
      }
    }
  }
`;

/**
 * IndexPage
 */
export const IndexPage = memo((props: IndexPageProps) => {
  return <StyledComponent {...props} />;
});
