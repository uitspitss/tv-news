import React from 'react';
import { NextPage, GetStaticProps } from 'next';

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
      SSG
      <UserList users={users} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const users = await getData();

    return { props: { users } };
  } catch {
    throw new Error('User API is wrong.');
  }
};

export default UsersPage;
