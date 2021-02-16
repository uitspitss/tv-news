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
      buttonText="理解しました"
      // enableDeclineButton
      // declineButtonClasses="declineButton"
      // onDecline={handleDecline}
      debug={debug}
    >
      この Web サイトではユーザー体験向上のため cookie を使用しております。
    </CookieConsent>
  );
};

const StyledComponent = styled(Component)`
  ${tw`fixed z-10 flex flex-wrap w-full justify-between items-center bg-primary-600 text-white text-sm font-bold px-4 py-3`}

  & > div {
    & > .acceptButton {
      ${tw`bg-info-700 hover:bg-info-800 text-white font-bold py-2 px-4 mr-2 border-none cursor-pointer`}
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
