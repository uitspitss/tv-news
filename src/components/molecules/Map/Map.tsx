import React, { memo, FC, ReactElement } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import tw, { styled } from 'twin.macro';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapInstance = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '',
});

export type MapProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * children
   */
  children?: ReactElement | ReactElement[];
};

type Props = MapProps;

const Component: FC<Props> = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      <MapInstance
        className="map"
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/dark-v10"
        center={[137.685, 38.259]}
        zoom={[5]}
      >
        {children}
      </MapInstance>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > .map {
    ${tw`w-full h-full min-w-full min-h-full`}
  }
`;

/**
 * Map
 */
export const Map = memo((props: MapProps) => {
  return <StyledComponent {...props} />;
});
