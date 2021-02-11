import { atom } from 'recoil';

import type { User } from '~/models/user';

export const usersState = atom<User[]>({
  key: 'usersState',
  default: [],
});
