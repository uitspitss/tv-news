import React, { FC, memo, ReactNode } from 'react';
import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw, { styled } from 'twin.macro';

type DialogCloseAction = PopupActions['close'];

export type { DialogCloseAction };

type BaseProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * children（required）
   */
  children: (close: DialogCloseAction) => ReactNode;
  /**
   * overlay
   */
  overlay?: boolean;
};

export type DialogProps =
  | (BaseProps & {
      //  eslint-disable-next-line no-undef
      trigger: JSX.Element;
    })
  | (BaseProps & {
      open: boolean;
      onClose: () => void;
    });

type Props = DialogProps;

const Component: FC<Props> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <Popup className={className} arrow={false} modal {...rest}>
      {(close: DialogCloseAction) => (
        <div className="dialog">{children(close)}</div>
      )}
    </Popup>
  );
};

const StyledComponent = styled(Component)`
  &-overlay {
    ${({ overlay }) => overlay && tw`bg-gray-500 bg-opacity-50`}
  }

  &-content {
    ${tw`bg-white rounded p-4`}
  }
`;

/**
 * ダイアログ
 */
export const Dialog: FC<DialogProps> = memo((props) => (
  <StyledComponent {...props} />
));
