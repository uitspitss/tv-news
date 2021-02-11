import React, { FC, memo, ReactNode } from 'react';
import Popup from 'reactjs-popup';
import { PopupPosition } from 'reactjs-popup/dist/types';
import tw, { styled } from 'twin.macro';

export type MenuProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * no children
   */
  children?: ReactNode;
  /**
   * trigger component
   */
  //  eslint-disable-next-line no-undef
  trigger: JSX.Element;
  /**
    "top left" | "top center" | "top right" | "right top" | "right center" | "right bottom" | "bottom left" | "bottom center" | "bottom right" | "left top" | "left center" | "left bottom" | "center center"
   */
  position?: PopupPosition;
};

type Props = MenuProps;

const Component: FC<Props> = (props) => {
  const { className, children, trigger, ...rest } = props;

  return (
    <Popup
      className={className}
      position="bottom left"
      trigger={trigger}
      arrow={false}
      {...rest}
    >
      <ul className="menuList">{children}</ul>
    </Popup>
  );
};

const StyledComponent = styled(Component)`
  &-content {
    .menuList {
      ${tw`rounded flex flex-col items-start`}

      & > li {
        ${tw`px-2 py-1`}
      }
    }
  }
`;

/**
 * リストメニュー
 */
export const Menu: FC<MenuProps> = memo((props) => {
  return <StyledComponent {...props} />;
});
