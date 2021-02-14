import React, { Fragment, memo, useMemo, VFC } from 'react';
import tw, { styled } from 'twin.macro';
import { Popup } from 'react-mapbox-gl';

import { Map as MyMap } from '~/components/molecules/Map';
import { PlayerButton } from '~/components/molecules/PlayerButton';
import type { Prefecture } from '~/models/prefecture';
import type { TvStation } from '~/models/tv-station';

type DataMap = Map<Prefecture['name'], Array<TvStation>>;

export type IndexPageProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * prefectures
   */
  prefectures?: Prefecture[];
  /**
   * tv stations
   */
  tvStations?: TvStation[];
};

type Props = Readonly<{
  dataMap: DataMap;
}> &
  IndexPageProps;

const Component: VFC<Props> = (props) => {
  const { className, dataMap, prefectures } = props;

  return (
    <div className={className}>
      <MyMap className="map">
        {prefectures?.map((prefecture) =>
          dataMap.has(prefecture.name) ? (
            <Popup
              key={prefecture.name}
              className="popup"
              coordinates={[prefecture.lng, prefecture.lat]}
              anchor="center"
            >
              {dataMap.get(prefecture.name)?.map((data) => (
                <PlayerButton
                  className="playerButton"
                  key={data.name}
                  playlistId={data.playlistId}
                  tvStationName={data.name}
                />
              ))}
            </Popup>
          ) : (
            <Fragment key={prefecture.name} />
          ),
        )}
      </MyMap>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > .map {
    ${tw`w-full h-full`}

    height: calc(100vh - 44px - 36px);

    .popup {
      & > .mapboxgl-popup-content {
        ${tw`bg-gray-700 bg-opacity-0 text-primary-300`}
      }

      & > .playerButton {
        ${tw`hover:z-10`}
      }
    }
  }
`;

/**
 * IndexPage
 */
export const IndexPage = memo((props: IndexPageProps) => {
  const { prefectures, tvStations } = props;

  const dataMap = useMemo(() => {
    const map: DataMap = new Map();

    prefectures?.forEach((pref) => {
      const stationsInPref = tvStations?.filter((station) =>
        station.prefectures.map((p) => p.name).includes(pref.name),
      );

      if (stationsInPref?.length) {
        map.set(pref.name, stationsInPref);
      }
    });

    return map;
  }, [prefectures, tvStations]);

  return <StyledComponent {...props} {...{ dataMap }} />;
});
