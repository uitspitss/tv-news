import React, { Fragment, memo, useCallback, useMemo, VFC } from 'react';
import tw, { styled } from 'twin.macro';
import { Popup } from 'react-mapbox-gl';

import { Map as MyMap } from '~/components/molecules/Map';
import { PlayerButton } from '~/components/molecules/PlayerButton';
import { Button } from '~/components/atoms/buttons/Button';
import {
  useCurrentTvStationState,
  useCurrentTvStationDispatch,
} from '~/hooks/use-current-tv-station';
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
  currentTvStation: TvStation | null;
  handleRandomlyPlay: () => void;
}> &
  IndexPageProps;

const Component: VFC<Props> = (props) => {
  const {
    className,
    prefectures,
    dataMap,
    currentTvStation,
    handleRandomlyPlay,
  } = props;

  return (
    <div className={className}>
      <MyMap className="map">
        <>
          <div className="globalControls">
            <Button className="button" onClick={handleRandomlyPlay}>
              ランダム再生
            </Button>
          </div>
          {prefectures?.map((prefecture) =>
            dataMap.has(prefecture.name) ? (
              <Popup
                key={prefecture.name}
                className="popup"
                coordinates={[prefecture.lng, prefecture.lat]}
                anchor="center"
                style={
                  currentTvStation?.prefectures
                    .map((p) => p.name)
                    .includes(prefecture.name)
                    ? { zIndex: 10 }
                    : { zIndex: 3 }
                }
              >
                {dataMap.get(prefecture.name)?.map((data) => (
                  <PlayerButton
                    className="playerButton"
                    key={data.name}
                    tvStation={data}
                  />
                ))}
              </Popup>
            ) : (
              <Fragment key={prefecture.name} />
            ),
          )}
        </>
      </MyMap>
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > .map {
    ${tw`w-full h-full`}

    height: calc(100vh - 44px - 36px);

    .globalControls {
      ${tw`fixed top-12 right-4 flex flex-col items-end`}

      & > .button {
        ${tw`text-white text-sm`}
      }
    }

    .popup {
      & > .mapboxgl-popup-content {
        ${tw`bg-gray-700 bg-opacity-0 text-primary-300`}
      }
    }
  }
`;

/**
 * IndexPage
 */
export const IndexPage = memo((props: IndexPageProps) => {
  const { prefectures, tvStations } = props;
  const currentTvStation = useCurrentTvStationState();
  const setCurrentTvStation = useCurrentTvStationDispatch();

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

  const handleRandomlyPlay = useCallback(() => {
    if (tvStations?.length) {
      const index = Math.floor(Math.random() * tvStations.length);
      setCurrentTvStation(tvStations[index]);
    }
  }, [setCurrentTvStation, tvStations]);

  return (
    <StyledComponent
      {...props}
      {...{ dataMap, currentTvStation, handleRandomlyPlay }}
    />
  );
});
