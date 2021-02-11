import React, { memo, VFC, useCallback } from 'react';
import tw, { styled } from 'twin.macro';
import CookieConsent from 'react-cookie-consent';

export type CookieNotificationProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * whether debug
   */
  debug?: boolean;
};

type Props = {
  handleDecline: () => void;
} & CookieNotificationProps;

const Component: VFC<Props> = (props) => {
  const { className, debug = false } = props;

  return (
    <CookieConsent
      disableStyles
      flipButtons
      location="bottom"
      containerClasses={className}
      buttonClasses="acceptButton"
      // enableDeclineButton
      // declineButtonClasses="declineButton"
      // onDecline={handleDecline}
      debug={debug}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

const StyledComponent = styled(Component)`
  ${tw`flex flex-wrap w-full justify-between items-center bg-gray-500 text-white text-sm font-bold px-4 py-3 transition duration-500 ease-in-out`}

  & > div {
    & > .acceptButton {
      ${tw`bg-primary-300 hover:bg-primary-200 text-white font-bold py-2 px-4 mr-2 border-none cursor-pointer`}
    }
    & > .declineButton {
      ${tw`bg-transparent no-underline hover:underline text-white font-bold py-2 px-4 border-none cursor-pointer`}
    }
  }
`;

/**
 * cookie の利用確認用 notification
 */
export const CookieNotification = memo((props: CookieNotificationProps) => {
  const handleDecline = useCallback(() => {
    // Cookies.remove('_ga');
    // Cookies.remove(`_ga_${GA_TRACKING_ID}`);
  }, []);

  return <StyledComponent {...props} {...{ handleDecline }} />;
});
