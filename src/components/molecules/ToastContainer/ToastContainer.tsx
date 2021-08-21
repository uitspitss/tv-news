import React, { memo, VFC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw, { styled } from 'twin.macro';
import {
  ToastContainer as ReactToastifyContainer,
  Slide,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type ToastContainerProps = {
  /**
   * no className
   */
  className?: undefined;
};

type Props = ToastContainerProps;

const Component: VFC<Props> = (props) => (
  <ReactToastifyContainer
    position="top-right"
    autoClose={5000}
    closeOnClick
    closeButton
    draggable={false}
    hideProgressBar
    transition={Slide}
    {...props}
  />
);

const StyledComponent = styled(Component)`
  ${tw`fixed top-12`}

  .Toastify__toast {
    ${tw`flex items-center p-2 cursor-pointer mb-1`}
  }

  .Toastify__toast--success {
    ${tw`text-success-500 bg-success-100`}
  }

  .Toastify__toast--info {
    ${tw`text-info-500 bg-info-100`}
  }

  .Toastify__toast--warning {
    ${tw`text-warning-500 bg-warning-100`}
  }

  .Toastify__toast--error {
    ${tw`text-error-500 bg-error-100`}
  }
`;

/**
 * ToastContainer of react-toastify
 */
export const ToastContainer = memo((props: ToastContainerProps) => (
  <StyledComponent {...props} />
));
