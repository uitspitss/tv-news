import React, { memo, VFC } from 'react';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import tw, { styled } from 'twin.macro';

import 'mapbox-gl/dist/mapbox-gl.css';
// import svg from '../../../../public/tv-icon.svg'

const MapInstance = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '',
});

export type MapProps = {
  /**
   * class for twin.macro
   */
  className?: string;
};

type Props = MapProps;

const Component: VFC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <MapInstance
        className="map"
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/dark-v10"
        center={[137.685, 38.259]}
        zoom={[5]}
      >
        <Popup className="popup" coordinates={[137.685, 38.259]}>
          test
        </Popup>
      </MapInstance>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > .map {
    ${tw`w-full h-full min-w-full min-h-full`}

    & > .popup {
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
 * Map
 */
export const Map = memo((props: MapProps) => {
  return <StyledComponent {...props} />;
});
