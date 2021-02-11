import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { usersState } from '~/store/atoms';

export const useUsers = () => {
  const [users, setUsers] = useRecoilState(usersState);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (users.length) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();

        setUsers(data);
      } catch (_error) {
        setError(true);
      }
    };

    fetchData();
  }, [users, setUsers]);

  return { users, error };
};
