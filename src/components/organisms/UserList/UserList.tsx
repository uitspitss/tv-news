import React, { memo, VFC } from 'react';
import tw, { styled } from 'twin.macro';

import { User } from '~/models/user';

export type UserListProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * user data
   */
  users: User[];
};

type Props = UserListProps;

const Component: VFC<Props> = (props) => {
  const { className, users } = props;

  return (
    <div className={className}>
      {users.map(({ id, name }) => (
        <p key={name}>
          {id}
          {': '}
          {name}
        </p>
      ))}
    </div>
  );
};

const StyledComponent = styled(Component)``;

/**
 * User List
 */
export const UserList = memo((props: UserListProps) => {
  return <StyledComponent {...props} />;
});
