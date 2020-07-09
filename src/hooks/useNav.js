import { useState } from 'react';

export default function useNav(initialTab = 0) {
  const [tab, setTab] = useState(initialTab);

  return {
    tab,
    setTab,
  };
}
