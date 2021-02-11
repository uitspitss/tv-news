import React from 'react';
import { NextPage } from 'next';

import { UserList } from '~/components/organisms/UserList';
import { useUsers } from '~/hooks/use-users';

const UsersRecoilPage: NextPage = () => {
  const { users, error } = useUsers();

  if (error) return <div>failed to load</div>;
  if (!users.length) return <div>loading...</div>;

  return (
    <div>
      useRecoil
      <UserList users={users} />
    </div>
  );
};

export default UsersRecoilPage;
