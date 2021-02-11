import React, { memo, useEffect, useRef, VFC } from 'react';
import mapboxgl from 'mapbox-gl';
import tw, { styled } from 'twin.macro';

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

export type MapProps = {
  /**
   * class for twin.macro
   */
  className?: string;
};

type Props = MapProps;

const Component: VFC<Props> = (props) => {
  const { className } = props;

  const ref = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: ref.current ?? '',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [137.685, 38.259],
      zoom: 5,
    });

    return () => {
      map.remove();
    };
  }, [ref]);

  return (
    <div className={className}>
      <div className="map" ref={ref} />
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
