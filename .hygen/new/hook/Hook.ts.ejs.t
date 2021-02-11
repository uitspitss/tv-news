---
to: <%= abs_path %>/<%= hook_name_kebab %>.ts
---
import { useState, useEffect } from 'react';

export const <%= hook_name_camel %> = () => {
  const [<%= data_name_camel %>, set<%= data_name_pascal %>] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (<%= data_name_camel %> !== null) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch('/api/');
        const data = await res.json();

        set<%= data_name_pascal %>(data);
      } catch (_error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  return { <%= data_name_camel %>, error };
};
