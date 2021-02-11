import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '~/models/user';

export const getData = () => {
  const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'lisa' },
  ];

  return users;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  const data = await getData();
  res.status(200).json(data);
};

export default handler;
