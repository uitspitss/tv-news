import React from 'react';
import { NextPage, GetServerSideProps } from 'next';

import { UserList } from '~/components/organisms/UserList';
import { User } from '~/models/user';
import { getData } from '~/pages/api/users';

type UsersPageProps = {
  users: User[];
};

const UsersPage: NextPage<UsersPageProps> = (props) => {
  const { users } = props;

  return (
    <div>
      SSR
      <UserList users={users} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const users = await getData();

    return { props: { users } };
  } catch {
    throw new Error('user api is wrong.');
  }
};

export default UsersPage;
