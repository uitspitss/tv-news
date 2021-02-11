import React from 'react';
import { NextPage } from 'next';
import useSWR from 'swr';

import { UserList } from '~/components/organisms/UserList';
import { jsonFetcher } from '~/utils/fetchers';
import type { User } from '~/models/user';

const UsersPage: NextPage = () => {
  const { data: users, error } = useSWR<User[]>('/api/users', jsonFetcher);

  if (error) return <div>failed to load</div>;
  if (!users?.length) return <div>loading...</div>;

  return (
    <div>
      SWR
      <UserList users={users} />
    </div>
  );
};

export default UsersPage;
