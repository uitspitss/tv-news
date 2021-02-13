import React, { lazy, memo, Suspense, useState, VFC } from 'react';
import tw, { styled } from 'twin.macro';

import { Button } from '~/components/atoms/buttons/Button';

export type PlayerButtonProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * tv station name
   */
  tvStationName: string;
  /**
   * youtube playlist id
   */
  playlistId: string;
};

type Props = {
  playerActive: boolean;
  playerSize: { width: string; height: string };
  handlePlayerActive: (active: boolean) => void;
  handlePlayerSize: (args: { width: number; height: number }) => void;
} & PlayerButtonProps;

const Component: VFC<Props> = (props) => {
  const {
    className,
    tvStationName,
    playlistId,
    playerActive,
    playerSize,
    handlePlayerActive,
    handlePlayerSize,
  } = props;

  const YouTube = lazy(() => import('react-youtube'));

  return (
    <div className={className}>
      {playerActive ? (
        <Suspense fallback="loading player...">
          <div className="playerHeader">
            <div className="stationName">{tvStationName}</div>
            <div className="controls">
              {playerSize.width === '360' ? (
                <Button
                  aria-label="expand"
                  onClick={() => handlePlayerSize({ width: 540, height: 304 })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    // fill="currentColor"
                    width={16}
                    height={16}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
                    />
                  </svg>
                </Button>
              ) : (
                <Button
                  aria-label="shrink"
                  onClick={() => handlePlayerSize({ width: 360, height: 203 })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="5 9 9 9 9 5" />
                    <line x1="3" y1="3" x2="9" y2="9" />
                    <polyline points="5 15 9 15 9 19" />
                    <line x1="3" y1="21" x2="9" y2="15" />
                    <polyline points="19 9 15 9 15 5" />
                    <line x1="15" y1="9" x2="21" y2="3" />
                    <polyline points="19 15 15 15 15 19" />
                    <line x1="15" y1="15" x2="21" y2="21" />
                  </svg>
                </Button>
              )}
              <Button
                aria-label="close"
                onClick={() => handlePlayerActive(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={16}
                  height={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <YouTube
            className="youtube"
            opts={{
              width: playerSize.width,
              height: playerSize.height,
              playerVars: {
                listType: 'playlist',
                list: playlistId,
              },
            }}
          />
        </Suspense>
      ) : (
        <Button
          className="handler"
          secondary
          onClick={() => handlePlayerActive(true)}
        >
          {tvStationName}
        </Button>
      )}
    </div>
  );
};

const StyledComponent = styled(Component)`
  ${tw`py-1`}

  & > .playerHeader {
    ${tw`w-full flex justify-between items-center text-primary-300`}
  }

  & > .handler {
    ${tw`w-full`}
  }
`;

/**
 * button included YouTube player
 */
export const PlayerButton = memo((props: PlayerButtonProps) => {
  const [playerActive, setPlayerActive] = useState(false);
  const [playerSize, setPlayerSize] = useState({ width: '360', height: '203' });

  const handlePlayerActive = (active: boolean) => {
    if (!active) {
      setPlayerSize({ width: '360', height: '203' });
    }
    setPlayerActive(active);
  };
  const handlePlayerSize = (args: { width: number; height: number }) => {
    setPlayerSize({ width: String(args.width), height: String(args.height) });
  };

  return (
    <StyledComponent
      {...props}
      {...{ playerActive, playerSize, handlePlayerActive, handlePlayerSize }}
    />
  );
});
